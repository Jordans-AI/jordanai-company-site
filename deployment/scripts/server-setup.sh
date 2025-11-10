#!/bin/bash
# Server setup script for Hetzner VPS
# Run this once on a fresh Ubuntu/Debian server

set -e

echo "🔧 Setting up Hetzner server for Jordan-AI deployment..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root (use sudo)"
    exit 1
fi

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Update system
print_status "Updating system packages..."
apt-get update
apt-get upgrade -y

# Install essential packages
print_status "Installing essential packages..."
apt-get install -y \
    curl \
    wget \
    git \
    ufw \
    fail2ban \
    unattended-upgrades \
    ca-certificates \
    gnupg \
    lsb-release

# Install Docker
print_status "Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    systemctl enable docker
    systemctl start docker
    print_status "Docker installed successfully"
else
    print_warning "Docker already installed"
fi

# Install Docker Compose
print_status "Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
    curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    print_status "Docker Compose installed successfully"
else
    print_warning "Docker Compose already installed"
fi

# Install Nginx
print_status "Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get install -y nginx
    systemctl enable nginx
    systemctl start nginx
    print_status "Nginx installed successfully"
else
    print_warning "Nginx already installed"
fi

# Install Certbot
print_status "Installing Certbot for Let's Encrypt..."
if ! command -v certbot &> /dev/null; then
    apt-get install -y certbot python3-certbot-nginx
    print_status "Certbot installed successfully"
else
    print_warning "Certbot already installed"
fi

# Create deploy user
print_status "Creating deploy user..."
if ! id -u deploy &> /dev/null; then
    useradd -m -s /bin/bash deploy
    usermod -aG docker deploy
    mkdir -p /home/deploy/.ssh
    chmod 700 /home/deploy/.ssh
    print_status "Deploy user created"
    print_warning "Remember to add SSH public key to /home/deploy/.ssh/authorized_keys"
else
    print_warning "Deploy user already exists"
fi

# Create project directories
print_status "Creating project directories..."
mkdir -p /opt/jordan-ai
mkdir -p /opt/backups/jordan-ai
mkdir -p /var/www/certbot
chown -R deploy:deploy /opt/jordan-ai
chown -R deploy:deploy /opt/backups/jordan-ai

# Configure firewall
print_status "Configuring firewall (UFW)..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw --force enable
print_status "Firewall configured"

# Configure fail2ban
print_status "Configuring fail2ban..."
systemctl enable fail2ban
systemctl start fail2ban

# Enable automatic security updates
print_status "Enabling automatic security updates..."
cat > /etc/apt/apt.conf.d/50unattended-upgrades << EOF
Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}-security";
};
Unattended-Upgrade::Automatic-Reboot "false";
EOF

# Configure log rotation for Docker
print_status "Configuring Docker log rotation..."
cat > /etc/docker/daemon.json << EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
EOF
systemctl restart docker

# Display summary
print_status "✅ Server setup completed!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Next steps:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Add SSH public key for GitHub Actions:"
echo "   sudo nano /home/deploy/.ssh/authorized_keys"
echo ""
echo "2. Set up environment variables:"
echo "   sudo nano /opt/jordan-ai/.env"
echo ""
echo "3. Configure Nginx:"
echo "   sudo cp /opt/jordan-ai/nginx/nginx.conf /etc/nginx/sites-available/jordan-ai.com"
echo "   sudo ln -s /etc/nginx/sites-available/jordan-ai.com /etc/nginx/sites-enabled/"
echo "   sudo nginx -t"
echo ""
echo "4. Obtain SSL certificate:"
echo "   sudo certbot --nginx -d jordan-ai.com -d www.jordan-ai.com"
echo ""
echo "5. Test deployment:"
echo "   cd /opt/jordan-ai && sudo -u deploy bash deployment/scripts/deploy.sh"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
print_status "Installed versions:"
docker --version
docker-compose --version
nginx -v
certbot --version
