#!/bin/bash
# Rollback script for Jordan-AI website
# Restores the most recent backup

set -e

echo "🔄 Starting rollback process..."

# Configuration
PROJECT_DIR="/opt/jordan-ai"
BACKUP_DIR="/opt/backups/jordan-ai"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Check if backup exists
LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup-*.tar.gz 2>/dev/null | head -n 1)

if [ -z "$LATEST_BACKUP" ]; then
    print_error "No backup found in $BACKUP_DIR"
    exit 1
fi

print_warning "This will rollback to: $LATEST_BACKUP"
print_warning "Press Ctrl+C to cancel, or Enter to continue..."
read

# Stop current containers
print_status "Stopping current containers..."
cd "$PROJECT_DIR"
docker-compose down

# Restore backup
print_status "Restoring backup..."
tar -xzf "$LATEST_BACKUP" -C "$PROJECT_DIR"

# Restore Docker images
IMAGES_FILE="$BACKUP_DIR/images-$(basename $LATEST_BACKUP .tar.gz | sed 's/backup-//')"
if [ -f "$IMAGES_FILE" ]; then
    print_status "Previous images:"
    cat "$IMAGES_FILE"
fi

# Start containers
print_status "Starting containers..."
docker-compose up -d

# Wait for health check
print_status "Waiting for application to be ready..."
sleep 10
if docker-compose exec -T jordan-ai wget -q --spider http://localhost:3000/api/health 2>/dev/null; then
    print_status "✅ Rollback successful!"
else
    print_error "⚠️  Containers started but health check failed. Check logs:"
    docker-compose logs --tail=50
fi

docker-compose ps
