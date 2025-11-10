# Jordan-AI Deployment Guide

Complete guide for deploying the Jordan-AI website to Hetzner with Cloudflare DNS.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Server Setup](#server-setup)
3. [GitHub Configuration](#github-configuration)
4. [Cloudflare Configuration](#cloudflare-configuration)
5. [First Deployment](#first-deployment)
6. [Automated Deployments](#automated-deployments)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Accounts & Access
- ✅ Hetzner VPS (Ubuntu 22.04 or Debian 11+)
- ✅ Cloudflare account with domain configured
- ✅ GitHub repository access
- ✅ Resend API key (for contact form)

### Local Requirements
- Git
- SSH client
- GitHub CLI (`gh`) - optional but recommended

---

## Server Setup

### Step 1: Initial Server Access

SSH into your Hetzner server as root:

```bash
ssh root@YOUR_SERVER_IP
```

### Step 2: Run Setup Script

Download and execute the server setup script:

```bash
# Download the setup script
wget https://raw.githubusercontent.com/YOUR_USERNAME/jordanai-company-site/main/deployment/scripts/server-setup.sh

# Make it executable
chmod +x server-setup.sh

# Run the setup
sudo bash server-setup.sh
```

This script will:
- ✅ Install Docker & Docker Compose
- ✅ Install Nginx
- ✅ Install Certbot (Let's Encrypt)
- ✅ Create deploy user
- ✅ Configure firewall (UFW)
- ✅ Enable automatic security updates
- ✅ Configure fail2ban

### Step 3: Configure SSH Key for GitHub Actions

Generate SSH key pair on your local machine:

```bash
# Generate new SSH key (don't use a passphrase for automation)
ssh-keygen -t ed25519 -f ~/.ssh/jordan-ai-deploy -N ""

# Copy the public key
cat ~/.ssh/jordan-ai-deploy.pub
```

Add the public key to the server:

```bash
# On your Hetzner server
sudo nano /home/deploy/.ssh/authorized_keys
# Paste the public key, save and exit

# Set correct permissions
sudo chown deploy:deploy /home/deploy/.ssh/authorized_keys
sudo chmod 600 /home/deploy/.ssh/authorized_keys
```

**Save the private key** (`~/.ssh/jordan-ai-deploy`) - you'll need it for GitHub Secrets.

### Step 4: Configure Environment Variables

Create the production environment file on the server:

```bash
sudo nano /opt/jordan-ai/.env
```

Add the following variables:

```env
NODE_ENV=production
RESEND_API_KEY=re_your_actual_api_key_here
NEXT_PUBLIC_SITE_URL=https://jordan-ai.com
NEXT_PUBLIC_APP_VERSION=1.0.0
```

Save and exit (`Ctrl+X`, `Y`, `Enter`).

### Step 5: Configure Nginx

Copy the Nginx configuration (after first deployment):

```bash
# This will be done after the first manual deployment
sudo cp /opt/jordan-ai/nginx/nginx.conf /etc/nginx/sites-available/jordan-ai.com
sudo ln -s /etc/nginx/sites-available/jordan-ai.com /etc/nginx/sites-enabled/
sudo nginx -t
```

**Don't reload Nginx yet** - we need SSL certificates first.

---

## GitHub Configuration

### Step 1: Add GitHub Secrets

Use GitHub CLI (recommended) or web interface:

```bash
# Using gh CLI
cd /Users/shakedyarden/MyProjects/jordanai-company-site

# Add Hetzner server IP
gh secret set HETZNER_HOST --body "YOUR_SERVER_IP"

# Add SSH username (usually 'deploy')
gh secret set HETZNER_USER --body "deploy"

# Add SSH private key
gh secret set HETZNER_SSH_KEY < ~/.ssh/jordan-ai-deploy

# Add Resend API key
gh secret set RESEND_API_KEY --body "re_your_api_key_here"
```

**Alternative: Web Interface**

1. Go to: `https://github.com/YOUR_USERNAME/jordanai-company-site/settings/secrets/actions`
2. Click "New repository secret"
3. Add each secret:
   - `HETZNER_HOST`: Your server IP
   - `HETZNER_USER`: `deploy`
   - `HETZNER_SSH_KEY`: Contents of `~/.ssh/jordan-ai-deploy`
   - `RESEND_API_KEY`: Your Resend API key

### Step 2: Verify Secrets

```bash
gh secret list
```

You should see:
- `HETZNER_HOST`
- `HETZNER_SSH_KEY`
- `HETZNER_USER`
- `RESEND_API_KEY`

---

## Cloudflare Configuration

### Step 1: DNS Setup

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Go to **DNS** → **Records**
4. Add/Update A records:

```
Type: A
Name: @
Content: YOUR_SERVER_IP
Proxy status: Proxied (orange cloud)
TTL: Auto

Type: A
Name: www
Content: YOUR_SERVER_IP
Proxy status: Proxied (orange cloud)
TTL: Auto
```

### Step 2: SSL/TLS Settings

Go to **SSL/TLS** → **Overview**:
- Set mode to: **Full (strict)**

This ensures end-to-end encryption.

### Step 3: Security Settings

**Firewall Rules** (optional but recommended):

Go to **Security** → **WAF**:
- Enable "Browser Integrity Check"
- Enable "Challenge Passage" (24 hours)

**Rate Limiting** (optional):

Go to **Security** → **Rate Limiting**:
- Create rule for `/api/contact`: 5 requests per minute per IP

### Step 4: Performance Settings

Go to **Speed** → **Optimization**:
- ✅ Auto Minify: JavaScript, CSS, HTML
- ✅ Brotli compression

---

## First Deployment

### Step 1: Manual Deployment Test

SSH into your server and run a manual deployment:

```bash
ssh deploy@YOUR_SERVER_IP

cd /opt/jordan-ai

# Clone repository
git clone https://github.com/YOUR_USERNAME/jordanai-company-site.git .

# Run first deployment
bash deployment/scripts/deploy.sh
```

This will:
1. Build Docker image
2. Start containers
3. Run health checks

Verify the application is running:

```bash
docker-compose ps
docker-compose logs
curl http://localhost:3000/api/health
```

### Step 2: Obtain SSL Certificate

With Cloudflare in **Full (strict)** mode, we need a valid SSL certificate on the server:

```bash
# On your server
sudo certbot --nginx -d jordan-ai.com -d www.jordan-ai.com --non-interactive --agree-tos -m shaylee@jordan-ai.com
```

Certbot will:
- Request certificate from Let's Encrypt
- Automatically configure Nginx
- Set up auto-renewal

Verify:

```bash
sudo certbot certificates
```

### Step 3: Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Step 4: Test Production Site

Visit `https://jordan-ai.com` - you should see the site! ✅

Test the health check:

```bash
curl https://jordan-ai.com/api/health
```

---

## Automated Deployments

Once the initial setup is complete, deployments are fully automated:

### How It Works

1. **Push to `main` branch** → Triggers GitHub Actions
2. **Tests run** → Linting, type checking, build test
3. **Deploy** → SSH to server, pull changes, rebuild, restart
4. **Verification** → Health check confirms deployment success

### Manual Trigger

You can also trigger deployment manually:

```bash
# Using GitHub CLI
gh workflow run deploy.yml

# Or via web interface
# Go to: Actions → Deploy to Hetzner → Run workflow
```

### Monitoring Deployments

```bash
# Watch workflow runs
gh run list

# View logs for latest run
gh run view --log

# Or check on GitHub
# https://github.com/YOUR_USERNAME/jordanai-company-site/actions
```

---

## Troubleshooting

### Issue: Deployment Fails

**Check logs:**

```bash
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
docker-compose logs --tail=50
```

**Common causes:**
- Missing environment variables
- Port conflicts
- Docker daemon not running
- Insufficient disk space

### Issue: SSL Certificate Problems

**Renew certificate manually:**

```bash
sudo certbot renew --nginx
sudo systemctl reload nginx
```

**Check certificate status:**

```bash
sudo certbot certificates
```

### Issue: Site Not Accessible

**Check Nginx status:**

```bash
sudo systemctl status nginx
sudo nginx -t
```

**Check Cloudflare settings:**
- Verify DNS records point to correct IP
- Ensure SSL mode is "Full (strict)"
- Check if IP is blocked by firewall rules

**Check Docker containers:**

```bash
docker-compose ps
docker-compose logs jordan-ai
```

### Issue: GitHub Actions Can't Connect

**Test SSH connection:**

```bash
ssh -i ~/.ssh/jordan-ai-deploy deploy@YOUR_SERVER_IP
```

**Verify secrets:**

```bash
gh secret list
```

**Check server firewall:**

```bash
sudo ufw status
```

Port 22 should be open.

### Rollback to Previous Version

If a deployment breaks the site:

```bash
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
bash deployment/scripts/rollback.sh
```

This will:
1. Stop current containers
2. Restore previous configuration
3. Restart containers
4. Run health checks

---

## Maintenance

### View Logs

```bash
# Application logs
docker-compose logs -f jordan-ai

# Nginx logs
sudo tail -f /var/log/nginx/jordan-ai.access.log
sudo tail -f /var/log/nginx/jordan-ai.error.log
```

### Update System

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot  # If kernel updates
```

### Backup Management

Backups are created automatically during each deployment in:
```
/opt/backups/jordan-ai/
```

Manual backup:

```bash
cd /opt/jordan-ai
tar -czf ~/backup-$(date +%Y%m%d).tar.gz docker-compose.yml .env
```

### SSL Certificate Renewal

Certificates auto-renew via cron. Test renewal:

```bash
sudo certbot renew --dry-run
```

---

## Security Checklist

- [x] Firewall configured (UFW)
- [x] Fail2ban enabled
- [x] SSH key-only authentication
- [x] Non-root user for deployment
- [x] SSL/TLS with Let's Encrypt
- [x] Security headers in Nginx
- [x] Rate limiting on API endpoints
- [x] Cloudflare proxy enabled
- [x] Automatic security updates
- [x] Docker log rotation
- [x] Environment variables secured

---

## Support

**Issues or questions?**
- GitHub Issues: `https://github.com/YOUR_USERNAME/jordanai-company-site/issues`
- Email: shaylee@jordan-ai.com

---

**Last Updated**: November 2025
**Version**: 1.0.0
