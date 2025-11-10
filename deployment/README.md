# Deployment Directory

This directory contains all deployment-related files, scripts, and documentation for the Jordan-AI website.

## 📁 Directory Structure

```
deployment/
├── README.md              # This file - deployment overview
├── DEPLOYMENT.md          # Complete deployment guide
├── RUNBOOK.md             # Operations runbook for maintenance
├── scripts/
│   ├── server-setup.sh    # Initial server setup script
│   ├── deploy.sh          # Deployment script (runs on server)
│   ├── rollback.sh        # Rollback script for emergencies
│   └── setup-github-secrets.sh  # Configure GitHub Secrets via CLI
```

## 🚀 Quick Start

### First Time Deployment

1. **Set up your Hetzner server:**
   ```bash
   ssh root@YOUR_SERVER_IP
   wget https://raw.githubusercontent.com/YOUR_USERNAME/jordanai-company-site/main/deployment/scripts/server-setup.sh
   chmod +x server-setup.sh
   sudo bash server-setup.sh
   ```

2. **Configure GitHub Secrets:**
   ```bash
   cd /Users/shakedyarden/MyProjects/jordanai-company-site
   ./deployment/scripts/setup-github-secrets.sh
   ```

3. **Deploy:**
   ```bash
   git push origin main
   # GitHub Actions will automatically deploy
   ```

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📚 Documentation

### [DEPLOYMENT.md](DEPLOYMENT.md)
Complete step-by-step deployment guide covering:
- Server setup and configuration
- GitHub Actions configuration
- Cloudflare DNS and SSL setup
- First deployment walkthrough
- Troubleshooting guide

**Read this first for initial setup.**

### [RUNBOOK.md](RUNBOOK.md)
Operations runbook for day-to-day maintenance:
- Common operational tasks
- Emergency procedures
- Rollback procedures
- Monitoring and health checks
- Troubleshooting playbooks

**Reference this for ongoing operations.**

## 🛠️ Scripts

### server-setup.sh
**Purpose**: Initial server configuration (run once on fresh server)

**What it does**:
- Installs Docker, Docker Compose, Nginx, Certbot
- Creates deploy user
- Configures firewall (UFW)
- Enables automatic security updates
- Sets up fail2ban

**Usage**:
```bash
sudo bash deployment/scripts/server-setup.sh
```

### deploy.sh
**Purpose**: Deploy application (runs automatically via GitHub Actions)

**What it does**:
- Pulls latest code
- Builds Docker image
- Creates backup of current deployment
- Stops old containers
- Starts new containers
- Runs health checks
- Cleans up old images

**Usage**:
```bash
# On server (as deploy user)
cd /opt/jordan-ai
bash deployment/scripts/deploy.sh
```

### rollback.sh
**Purpose**: Rollback to previous deployment

**What it does**:
- Stops current containers
- Restores previous backup
- Restarts containers
- Verifies health

**Usage**:
```bash
# On server (as deploy user)
cd /opt/jordan-ai
bash deployment/scripts/rollback.sh
```

### setup-github-secrets.sh
**Purpose**: Configure GitHub Secrets via gh CLI

**What it does**:
- Prompts for required secrets
- Sets them in GitHub repository
- Verifies configuration

**Usage**:
```bash
# On local machine
./deployment/scripts/setup-github-secrets.sh
```

## 🔒 Security

### Required Secrets

The following secrets must be configured in GitHub:

| Secret | Description | Example |
|--------|-------------|---------|
| `HETZNER_HOST` | Server IP address | `123.45.67.89` |
| `HETZNER_USER` | SSH username | `deploy` |
| `HETZNER_SSH_KEY` | Private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `RESEND_API_KEY` | Resend API key | `re_123abc...` |

### Security Measures

✅ **Implemented**:
- Firewall (UFW) - ports 22, 80, 443 only
- Fail2ban - brute force protection
- SSH key-only authentication
- Non-root deployment user
- SSL/TLS with Let's Encrypt
- Security headers in Nginx
- Rate limiting on API endpoints
- Cloudflare proxy
- Docker log rotation
- Automatic security updates

## 🔄 Deployment Flow

```
┌─────────────────┐
│  Push to main   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ GitHub Actions  │
│   - Lint        │
│   - Type check  │
│   - Build test  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  SSH to Server  │
│   - Pull code   │
│   - Build image │
│   - Backup      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Deploy & Verify │
│   - Stop old    │
│   - Start new   │
│   - Health check│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Live! 🎉      │
└─────────────────┘
```

## 📊 Monitoring

### Health Check
```bash
curl https://jordan-ai.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-10T12:00:00.000Z",
  "uptime": 123456,
  "environment": "production",
  "version": "1.0.0"
}
```

### Container Status
```bash
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
docker-compose ps
```

### View Logs
```bash
docker-compose logs -f jordan-ai
```

## 🔧 Troubleshooting

### Deployment Failed

1. **Check GitHub Actions logs:**
   ```bash
   gh run view --log
   ```

2. **Check server logs:**
   ```bash
   ssh deploy@YOUR_SERVER_IP
   cd /opt/jordan-ai
   docker-compose logs --tail=100
   ```

3. **Manual deployment:**
   ```bash
   ssh deploy@YOUR_SERVER_IP
   cd /opt/jordan-ai
   bash deployment/scripts/deploy.sh
   ```

### Site Not Responding

1. **Check container status:**
   ```bash
   docker-compose ps
   ```

2. **Restart containers:**
   ```bash
   docker-compose restart
   ```

3. **If still down, rollback:**
   ```bash
   bash deployment/scripts/rollback.sh
   ```

For more troubleshooting scenarios, see [RUNBOOK.md](RUNBOOK.md).

## 🔄 Common Operations

| Task | Command |
|------|---------|
| Deploy | `git push origin main` |
| Check status | `curl https://jordan-ai.com/api/health` |
| View logs | `ssh deploy@SERVER 'cd /opt/jordan-ai && docker-compose logs -f'` |
| Restart | `ssh deploy@SERVER 'cd /opt/jordan-ai && docker-compose restart'` |
| Rollback | `ssh deploy@SERVER 'cd /opt/jordan-ai && bash deployment/scripts/rollback.sh'` |

## 📞 Support

- **Email**: shaylee@jordan-ai.com
- **Phone**: +972 054 972 8712
- **GitHub Issues**: https://github.com/YOUR_USERNAME/jordanai-company-site/issues

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-01-10 | Initial deployment setup |

---

**For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

**For operational procedures, see [RUNBOOK.md](RUNBOOK.md)**
