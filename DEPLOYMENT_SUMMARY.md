# 🚀 Jordan-AI Deployment Setup - Complete Summary

This document provides an overview of the complete production deployment setup for the Jordan-AI website.

## 📦 What's Been Created

### Core Infrastructure Files

#### 1. **Dockerfile**
- Multi-stage build for optimized production image
- Based on Node.js 20 Alpine (minimal size)
- Standalone Next.js output for efficiency
- Non-root user for security
- Built-in health checks
- **Size**: Optimized for ~150-200MB final image

#### 2. **docker-compose.yml**
- Service orchestration for Jordan-AI website
- Ready to add site_enhancements service
- Health checks and automatic restarts
- Log rotation configured
- Network isolation

#### 3. **.dockerignore**
- Excludes unnecessary files from Docker build
- Reduces build time and image size
- Prevents sensitive files from being included

#### 4. **next.config.js** (Updated)
- Enabled `output: 'standalone'` for Docker
- Removed `poweredByHeader` for security
- Enabled compression

#### 5. **.env.example**
- Template for environment variables
- Documents all required secrets
- Safe to commit (no actual secrets)

#### 6. **.gitignore** (Updated)
- Added deployment-related exclusions
- SSH key patterns for security
- Backup file patterns

### Nginx Configuration

#### 7. **nginx/nginx.conf**
- Reverse proxy configuration
- SSL/TLS termination
- HTTP/2 enabled
- Rate limiting (5 req/min for contact form, 30 req/min general)
- Security headers (HSTS, CSP, etc.)
- Gzip compression
- Static file caching
- Ready for multi-service routing

### GitHub Actions CI/CD

#### 8. **.github/workflows/deploy.yml**
- Automated deployment on push to main
- Test stage: lint, type check, build test
- Deploy stage: SSH, build, deploy, verify
- Health check verification
- Rollback on failure
- Manual trigger option

### Deployment Scripts

#### 9. **deployment/scripts/server-setup.sh**
- **Purpose**: One-time server initialization
- Installs: Docker, Docker Compose, Nginx, Certbot
- Creates deploy user with proper permissions
- Configures firewall (UFW) - ports 22, 80, 443
- Enables fail2ban for security
- Sets up automatic security updates
- Configures Docker log rotation

#### 10. **deployment/scripts/deploy.sh**
- **Purpose**: Main deployment script (runs on server)
- Backs up current deployment
- Pulls latest code from GitHub
- Builds new Docker image
- Zero-downtime deployment
- Health check verification
- Automatic rollback on failure
- Cleanup old images

#### 11. **deployment/scripts/rollback.sh**
- **Purpose**: Emergency rollback procedure
- Restores previous deployment backup
- Automatic health check verification
- Simple one-command execution

#### 12. **deployment/scripts/setup-github-secrets.sh**
- **Purpose**: Configure GitHub Secrets via CLI
- Interactive prompts for all secrets
- Verification of configuration
- Uses `gh` CLI (GitHub CLI)

### API Endpoints

#### 13. **app/api/health/route.ts**
- Health check endpoint for monitoring
- Returns: status, uptime, version, timestamp
- Used by Docker healthcheck
- Used by deployment verification
- Used by monitoring systems

### Documentation

#### 14. **deployment/DEPLOYMENT.md**
- **3,000+ words** - Complete deployment guide
- Prerequisites and requirements
- Step-by-step server setup
- GitHub configuration with `gh` CLI
- Cloudflare DNS and SSL setup
- First deployment walkthrough
- Automated deployment process
- Comprehensive troubleshooting section

#### 15. **deployment/RUNBOOK.md**
- **4,000+ words** - Operations manual
- Common operational tasks
- Emergency procedures
- Rollback procedures
- Monitoring and health checks
- 5 detailed troubleshooting playbooks
- Weekly, monthly, quarterly maintenance tasks
- Contact information and escalation paths

#### 16. **deployment/README.md**
- Overview of deployment directory
- Quick start guide
- Script descriptions and usage
- Security checklist
- Common operations reference
- Support contacts

#### 17. **README.md** (Updated)
- Added comprehensive deployment section
- Quick deploy instructions
- Links to detailed documentation
- Feature highlights

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                  Cloudflare                      │
│  • DNS Management                                │
│  • SSL/TLS Proxy                                 │
│  • DDoS Protection                               │
│  • CDN Caching                                   │
└────────────────┬────────────────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────────────┐
│              Hetzner VPS                         │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │            Nginx (Port 80/443)          │   │
│  │  • Reverse Proxy                        │   │
│  │  • SSL Termination (Let's Encrypt)      │   │
│  │  • Rate Limiting                        │   │
│  │  • Security Headers                     │   │
│  │  • Gzip Compression                     │   │
│  └───────────┬─────────────────────────────┘   │
│              │                                   │
│              ▼                                   │
│  ┌─────────────────────────────────────────┐   │
│  │     Docker Network (jordan-ai-network)  │   │
│  │                                          │   │
│  │  ┌────────────────────────────────┐    │   │
│  │  │  Jordan-AI Container           │    │   │
│  │  │  • Next.js App (Port 3000)     │    │   │
│  │  │  • Health Checks               │    │   │
│  │  │  • Auto-restart                │    │   │
│  │  └────────────────────────────────┘    │   │
│  │                                          │   │
│  │  ┌────────────────────────────────┐    │   │
│  │  │  Site Enhancements (Future)    │    │   │
│  │  │  • Python Service (Port 8000)  │    │   │
│  │  └────────────────────────────────┘    │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │           UFW Firewall                   │   │
│  │  • Port 22 (SSH)                        │   │
│  │  • Port 80 (HTTP → HTTPS redirect)      │   │
│  │  • Port 443 (HTTPS)                     │   │
│  └─────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘

                 ▲
                 │ SSH (Port 22)
                 │
┌────────────────┴────────────────┐
│        GitHub Actions            │
│  • Automated CI/CD               │
│  • Test → Build → Deploy         │
│  • Health Check Verification     │
└──────────────────────────────────┘
```

---

## 🔐 Security Features

### Implemented Security Measures

✅ **Network Security**
- UFW Firewall (only essential ports open)
- Fail2ban (brute force protection)
- Cloudflare proxy (DDoS protection)

✅ **Authentication**
- SSH key-only authentication
- Non-root deployment user
- GitHub Actions with SSH keys

✅ **SSL/TLS**
- Let's Encrypt certificates
- Automatic renewal via Certbot
- Cloudflare Full (strict) mode
- HSTS headers

✅ **Application Security**
- Rate limiting on API endpoints
- Security headers (CSP, X-Frame-Options, etc.)
- No `X-Powered-By` header
- Input validation on contact form

✅ **Container Security**
- Non-root user in containers
- Minimal Alpine Linux base
- No unnecessary packages
- Log rotation to prevent disk exhaustion

✅ **Secrets Management**
- GitHub Secrets for sensitive data
- `.env` file on server (not in git)
- SSH keys excluded from git

✅ **Monitoring**
- Health check endpoint
- Docker healthchecks
- Deployment verification
- Automatic rollback on failure

✅ **Maintenance**
- Automatic security updates
- Log rotation
- Backup retention policy
- Regular security audits (documented)

---

## 📊 Deployment Flow

### Automated Deployment (Recommended)

```
Developer                GitHub Actions              Hetzner Server
    │                          │                           │
    │  git push origin main    │                           │
    ├─────────────────────────>│                           │
    │                          │                           │
    │                          │  1. Run Tests             │
    │                          │     - Lint                │
    │                          │     - Type Check          │
    │                          │     - Build Test          │
    │                          │                           │
    │                          │  2. SSH to Server         │
    │                          ├──────────────────────────>│
    │                          │                           │
    │                          │  3. Execute deploy.sh     │
    │                          │                           │  - Pull code
    │                          │                           │  - Backup current
    │                          │                           │  - Build image
    │                          │                           │  - Stop old
    │                          │                           │  - Start new
    │                          │                           │  - Health check
    │                          │                           │
    │                          │  4. Verify Health         │
    │                          │<──────────────────────────│
    │                          │                           │
    │  ✅ Deployment Success   │                           │
    │<─────────────────────────│                           │
```

### Manual Deployment

```bash
# 1. SSH to server
ssh deploy@YOUR_SERVER_IP

# 2. Navigate to project
cd /opt/jordan-ai

# 3. Run deployment script
bash deployment/scripts/deploy.sh

# 4. Verify
curl http://localhost:3000/api/health
```

---

## 🎯 Quick Reference Commands

### Local Development
```bash
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Build production
npm run lint             # Run linter
```

### GitHub Operations
```bash
gh secret set SECRET_NAME        # Set a secret
gh secret list                   # List all secrets
gh workflow run deploy.yml       # Trigger deployment
gh run list                      # List workflow runs
gh run view --log                # View latest logs
```

### Server Operations
```bash
# Check status
docker-compose ps
curl http://localhost:3000/api/health

# View logs
docker-compose logs -f jordan-ai

# Restart
docker-compose restart

# Deploy
bash deployment/scripts/deploy.sh

# Rollback
bash deployment/scripts/rollback.sh

# Nginx
sudo systemctl status nginx
sudo nginx -t
sudo systemctl reload nginx

# SSL/Certs
sudo certbot certificates
sudo certbot renew --dry-run
```

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

### Server Setup
- [ ] Hetzner VPS provisioned (Ubuntu 22.04 or Debian 11+)
- [ ] Server is accessible via SSH
- [ ] Root access available for initial setup
- [ ] Server has adequate resources (min: 1 vCPU, 2GB RAM)

### Domain & DNS
- [ ] Domain registered
- [ ] Cloudflare account created
- [ ] Domain added to Cloudflare
- [ ] Nameservers updated to Cloudflare

### Credentials & Access
- [ ] GitHub repository access
- [ ] Resend API key obtained
- [ ] SSH key pair generated for deployment
- [ ] GitHub CLI (`gh`) installed locally

### Code Preparation
- [ ] All placeholder content replaced
- [ ] Contact information updated
- [ ] Environment variables configured
- [ ] Build tested locally (`npm run build`)

---

## 🚀 Deployment Steps (Summary)

### 1. Server Setup (10 minutes)
```bash
ssh root@YOUR_SERVER_IP
wget https://raw.githubusercontent.com/YOUR_USERNAME/jordanai-company-site/main/deployment/scripts/server-setup.sh
sudo bash server-setup.sh
```

### 2. Configure SSH Access (5 minutes)
```bash
# Generate key locally
ssh-keygen -t ed25519 -f ~/.ssh/jordan-ai-deploy

# Add public key to server
ssh deploy@YOUR_SERVER_IP
nano ~/.ssh/authorized_keys
# Paste public key, save
```

### 3. Set Environment Variables (5 minutes)
```bash
# On server
sudo nano /opt/jordan-ai/.env
# Add: NODE_ENV, RESEND_API_KEY, NEXT_PUBLIC_SITE_URL
```

### 4. Configure GitHub Secrets (5 minutes)
```bash
# On local machine
cd /Users/shakedyarden/MyProjects/jordanai-company-site
./deployment/scripts/setup-github-secrets.sh
```

### 5. First Deployment (10 minutes)
```bash
# Manual first deployment
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
git clone https://github.com/YOUR_USERNAME/jordanai-company-site.git .
bash deployment/scripts/deploy.sh
```

### 6. Configure Nginx & SSL (10 minutes)
```bash
# Copy Nginx config
sudo cp /opt/jordan-ai/nginx/nginx.conf /etc/nginx/sites-available/jordan-ai.com
sudo ln -s /etc/nginx/sites-available/jordan-ai.com /etc/nginx/sites-enabled/

# Get SSL certificate
sudo certbot --nginx -d jordan-ai.com -d www.jordan-ai.com

# Reload Nginx
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Configure Cloudflare (5 minutes)
- Add A records pointing to server IP
- Set SSL mode to "Full (strict)"
- Enable proxy (orange cloud)

### 8. Verify (2 minutes)
```bash
curl https://jordan-ai.com/api/health
# Visit https://jordan-ai.com in browser
```

**Total time: ~50 minutes**

---

## 🎉 What You Get

### Fully Automated CI/CD
- Push to `main` → automatic deployment
- Tests run before deploy
- Health checks verify success
- Automatic rollback on failure

### Production-Grade Infrastructure
- Docker containerization
- Nginx reverse proxy
- SSL/TLS encryption
- Rate limiting
- Security headers
- DDoS protection via Cloudflare

### Monitoring & Maintenance
- Health check endpoint
- Docker healthchecks
- Automatic security updates
- Log rotation
- Backup system

### Emergency Procedures
- One-command rollback
- Documented troubleshooting
- Operations runbook
- Emergency contact info

### Best Practices
- Non-root containers
- SSH key authentication
- Secrets management
- Network isolation
- Principle of least privilege

---

## 📚 Next Steps

1. **Review Documentation**
   - Read [deployment/DEPLOYMENT.md](deployment/DEPLOYMENT.md) thoroughly
   - Familiarize yourself with [deployment/RUNBOOK.md](deployment/RUNBOOK.md)

2. **Prepare Credentials**
   - Get Hetzner VPS
   - Set up Cloudflare account
   - Obtain Resend API key
   - Generate SSH keys

3. **Deploy**
   - Follow steps in DEPLOYMENT.md
   - Test thoroughly
   - Set up monitoring alerts (optional)

4. **Ongoing Maintenance**
   - Weekly: Check logs, disk space
   - Monthly: Update packages, review security
   - Quarterly: Audit access, review backups

---

## 🆘 Support & Resources

### Documentation
- [deployment/DEPLOYMENT.md](deployment/DEPLOYMENT.md) - Full deployment guide
- [deployment/RUNBOOK.md](deployment/RUNBOOK.md) - Operations manual
- [deployment/README.md](deployment/README.md) - Quick reference

### Service Providers
- **Hetzner**: https://console.hetzner.cloud
- **Cloudflare**: https://dash.cloudflare.com
- **Resend**: https://resend.com
- **GitHub**: https://github.com

### Contact
- **Email**: shaylee@jordan-ai.com
- **Phone**: +972 054 972 8712

---

## ✅ File Manifest

```
jordanai-company-site/
├── Dockerfile                              # Production container
├── docker-compose.yml                      # Service orchestration
├── .dockerignore                           # Build optimization
├── .env.example                            # Environment template
├── next.config.js                          # Next.js config (updated)
├── .gitignore                              # Git exclusions (updated)
├── README.md                               # Main readme (updated)
├── DEPLOYMENT_SUMMARY.md                   # This file
├── .github/
│   └── workflows/
│       └── deploy.yml                      # CI/CD pipeline
├── app/
│   └── api/
│       └── health/
│           └── route.ts                    # Health check endpoint
├── nginx/
│   └── nginx.conf                          # Nginx configuration
└── deployment/
    ├── README.md                           # Deployment overview
    ├── DEPLOYMENT.md                       # Complete guide
    ├── RUNBOOK.md                          # Operations manual
    └── scripts/
        ├── server-setup.sh                 # Server initialization
        ├── deploy.sh                       # Deployment script
        ├── rollback.sh                     # Rollback script
        └── setup-github-secrets.sh         # Secrets configuration

Total: 18 new/modified files
```

---

**Setup Complete! Ready for Production Deployment 🚀**

**Version**: 1.0.0
**Created**: November 2025
**Next Review**: Post-first deployment
