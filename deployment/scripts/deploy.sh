#!/bin/bash
# Deployment script for Jordan-AI website
# This script is executed on the Hetzner server via GitHub Actions

set -e  # Exit on error

echo "🚀 Starting deployment for Jordan-AI website..."

# Configuration
PROJECT_DIR="/opt/jordan-ai"
COMPOSE_FILE="$PROJECT_DIR/docker-compose.yml"
ENV_FILE="$PROJECT_DIR/.env"
BACKUP_DIR="/opt/backups/jordan-ai"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p "$PROJECT_DIR"
mkdir -p "$BACKUP_DIR"

# Navigate to project directory
cd "$PROJECT_DIR"

# Backup current state (if exists)
if [ -f "$COMPOSE_FILE" ]; then
    print_status "Creating backup of current deployment..."
    BACKUP_NAME="backup-$(date +'%Y%m%d-%H%M%S').tar.gz"
    docker-compose ps -q | xargs docker inspect --format='{{.Image}}' | sort -u > "$BACKUP_DIR/images-$BACKUP_NAME.txt" || true
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" docker-compose.yml .env 2>/dev/null || true

    # Keep only last 5 backups
    ls -t "$BACKUP_DIR"/backup-*.tar.gz | tail -n +6 | xargs rm -f 2>/dev/null || true
    print_status "Backup created: $BACKUP_NAME"
fi

# Pull latest code from GitHub
print_status "Pulling latest code from GitHub..."
if [ ! -d ".git" ]; then
    print_status "Cloning repository for the first time..."
    cd /opt
    git clone https://github.com/Jordans-AI/jordanai-company-site.git jordan-ai
    cd jordan-ai
else
    # Fix git directory permissions if needed
    if [ -d ".git" ]; then
        print_status "Ensuring correct git directory permissions..."
        sudo chown -R $(whoami):$(whoami) .git 2>/dev/null || true
        chmod -R u+w .git 2>/dev/null || true
    fi
    git fetch origin
    git reset --hard origin/main
fi

# Load environment variables
if [ -f "$ENV_FILE" ]; then
    print_status "Loading environment variables..."
    export $(cat "$ENV_FILE" | grep -v '^#' | xargs)
else
    print_error "Environment file not found at $ENV_FILE"
    print_error "Please create it with required variables"
    exit 1
fi

# Build new Docker image
print_status "Building Docker image..."
docker-compose build --no-cache

# Run health check on current container (if exists)
if docker-compose ps | grep -q "Up"; then
    print_status "Running health check on current container..."
    if docker-compose exec -T jordan-ai wget -q --spider http://localhost:3000/api/health; then
        print_status "Current container is healthy"
    else
        print_warning "Current container health check failed, proceeding with deployment anyway"
    fi
fi

# Stop and remove old containers
print_status "Stopping old containers..."
docker-compose down --remove-orphans

# Start new containers
print_status "Starting new containers..."
docker-compose up -d

# Wait for container to be healthy
print_status "Waiting for application to be ready..."
MAX_ATTEMPTS=90
ATTEMPT=0
while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
    # Check Docker's native healthcheck status
    HEALTH_STATUS=$(docker inspect --format='{{.State.Health.Status}}' jordan-ai-web 2>/dev/null || echo "none")

    if [ "$HEALTH_STATUS" = "healthy" ]; then
        print_status "✅ Application is healthy and ready!"
        break
    elif [ "$HEALTH_STATUS" = "unhealthy" ]; then
        print_error "❌ Application is unhealthy"
        print_error "Container logs:"
        docker-compose logs --tail=20 jordan-ai
        print_error "Rolling back to previous version..."
        docker-compose down
        # Restore from backup if available
        LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup-*.tar.gz 2>/dev/null | head -n 1)
        if [ -n "$LATEST_BACKUP" ]; then
            tar -xzf "$LATEST_BACKUP" -C "$PROJECT_DIR"
            docker-compose up -d
        fi
        exit 1
    fi

    ATTEMPT=$((ATTEMPT + 1))
    if [ $ATTEMPT -eq $MAX_ATTEMPTS ]; then
        print_error "❌ Application failed to start within timeout"
        print_error "Final health status: $HEALTH_STATUS"
        print_error "Container logs:"
        docker-compose logs --tail=20 jordan-ai
        print_error "Rolling back to previous version..."
        docker-compose down
        # Restore from backup if available
        LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup-*.tar.gz 2>/dev/null | head -n 1)
        if [ -n "$LATEST_BACKUP" ]; then
            tar -xzf "$LATEST_BACKUP" -C "$PROJECT_DIR"
            docker-compose up -d
        fi
        exit 1
    fi
    echo -n "."
    sleep 2
done

# Cleanup old images
print_status "Cleaning up old Docker images..."
docker image prune -f

# Show status
print_status "Deployment completed successfully! 🎉"
docker-compose ps

# Display logs
print_status "Last 20 lines of logs:"
docker-compose logs --tail=20
