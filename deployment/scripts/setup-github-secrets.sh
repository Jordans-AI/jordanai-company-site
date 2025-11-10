#!/bin/bash
# Setup GitHub Secrets for Jordan-AI deployment
# This script uses GitHub CLI (gh) to configure deployment secrets

set -e

echo "🔐 Setting up GitHub Secrets for Jordan-AI deployment..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed"
    echo "Install it from: https://cli.github.com/"
    echo "Or run: brew install gh"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    print_error "Not authenticated with GitHub CLI"
    echo "Run: gh auth login"
    exit 1
fi

print_status "GitHub CLI authenticated"

# Get current repository
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)
if [ -z "$REPO" ]; then
    print_error "Not in a GitHub repository"
    exit 1
fi

print_status "Working with repository: $REPO"
echo ""

# Function to set secret
set_secret() {
    local secret_name=$1
    local secret_prompt=$2
    local is_file=$3

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Setting: $secret_name"
    echo "$secret_prompt"
    echo ""

    if [ "$is_file" = "true" ]; then
        read -p "Enter file path: " file_path
        if [ -f "$file_path" ]; then
            gh secret set "$secret_name" < "$file_path"
            print_status "$secret_name set successfully from file"
        else
            print_error "File not found: $file_path"
            return 1
        fi
    else
        read -sp "Enter value: " secret_value
        echo ""
        if [ -n "$secret_value" ]; then
            echo "$secret_value" | gh secret set "$secret_name"
            print_status "$secret_name set successfully"
        else
            print_warning "$secret_name skipped (empty value)"
        fi
    fi
    echo ""
}

# Introduction
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 GitHub Secrets Setup for Jordan-AI"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
print_info "This script will configure the following secrets:"
echo "  • HETZNER_HOST - Your Hetzner server IP address"
echo "  • HETZNER_USER - SSH user (usually 'deploy')"
echo "  • HETZNER_SSH_KEY - Private SSH key for deployment"
echo "  • RESEND_API_KEY - Resend API key for email"
echo ""
print_warning "Make sure you have the following ready:"
echo "  1. Hetzner server IP address"
echo "  2. Path to SSH private key (e.g., ~/.ssh/jordan-ai-deploy)"
echo "  3. Resend API key from https://resend.com/api-keys"
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."
echo ""

# Set secrets one by one
set_secret "HETZNER_HOST" "Enter your Hetzner server IP address (e.g., 123.45.67.89)" false
set_secret "HETZNER_USER" "Enter SSH username (typically 'deploy')" false
set_secret "HETZNER_SSH_KEY" "Enter path to SSH private key file" true
set_secret "RESEND_API_KEY" "Enter your Resend API key (starts with 're_')" false

# Verify secrets were set
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Verifying secrets..."
echo ""

SECRETS=$(gh secret list 2>&1)
if echo "$SECRETS" | grep -q "HETZNER_HOST"; then
    print_status "HETZNER_HOST configured"
else
    print_warning "HETZNER_HOST not found"
fi

if echo "$SECRETS" | grep -q "HETZNER_USER"; then
    print_status "HETZNER_USER configured"
else
    print_warning "HETZNER_USER not found"
fi

if echo "$SECRETS" | grep -q "HETZNER_SSH_KEY"; then
    print_status "HETZNER_SSH_KEY configured"
else
    print_warning "HETZNER_SSH_KEY not found"
fi

if echo "$SECRETS" | grep -q "RESEND_API_KEY"; then
    print_status "RESEND_API_KEY configured"
else
    print_warning "RESEND_API_KEY not found"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_status "GitHub Secrets setup completed!"
echo ""
print_info "Next steps:"
echo "  1. Ensure your Hetzner server is set up (see deployment/DEPLOYMENT.md)"
echo "  2. Test deployment by pushing to main branch"
echo "  3. Monitor at: https://github.com/$REPO/actions"
echo ""
print_info "To view configured secrets:"
echo "  gh secret list"
echo ""
print_info "To update a secret:"
echo "  gh secret set SECRET_NAME"
echo ""
