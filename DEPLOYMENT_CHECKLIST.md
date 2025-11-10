# 🚀 Jordan-AI Deployment Checklist

Use this checklist to ensure all steps are completed for a successful production deployment.

## Pre-Deployment

### Infrastructure Preparation
- [ ] Hetzner VPS provisioned (Ubuntu 22.04 or Debian 11+)
  - [ ] At least 1 vCPU, 2GB RAM
  - [ ] Root SSH access confirmed
  - [ ] Server IP address noted: `___________________`

### Domain & DNS
- [ ] Domain registered: `jordan-ai.com`
- [ ] Cloudflare account created
- [ ] Domain added to Cloudflare
- [ ] Nameservers updated to Cloudflare (wait 24-48h for propagation)

### Credentials & Secrets
- [ ] Resend account created
- [ ] Resend API key obtained: `re_________________`
- [ ] GitHub repository access confirmed
- [ ] GitHub CLI (`gh`) installed and authenticated locally
  ```bash
  gh --version
  gh auth status
  ```

### Local Setup
- [ ] SSH key pair generated for deployment
  ```bash
  ssh-keygen -t ed25519 -f ~/.ssh/jordan-ai-deploy
  ```
- [ ] Private key location noted: `~/.ssh/jordan-ai-deploy`
- [ ] Public key saved: `~/.ssh/jordan-ai-deploy.pub`

---

## Server Setup

### Initial Configuration
- [ ] SSH into server as root
  ```bash
  ssh root@YOUR_SERVER_IP
  ```
- [ ] Download server setup script
  ```bash
  wget https://raw.githubusercontent.com/YOUR_USERNAME/jordanai-company-site/main/deployment/scripts/server-setup.sh
  chmod +x server-setup.sh
  ```
- [ ] Run server setup script
  ```bash
  sudo bash server-setup.sh
  ```
- [ ] Verify installations:
  - [ ] Docker installed: `docker --version`
  - [ ] Docker Compose installed: `docker-compose --version`
  - [ ] Nginx installed: `nginx -v`
  - [ ] Certbot installed: `certbot --version`
  - [ ] Deploy user created: `id deploy`
  - [ ] Firewall enabled: `sudo ufw status`

### SSH Access
- [ ] Add public key to deploy user
  ```bash
  # On server
  sudo nano /home/deploy/.ssh/authorized_keys
  # Paste public key, save (Ctrl+X, Y, Enter)
  ```
- [ ] Set correct permissions
  ```bash
  sudo chown deploy:deploy /home/deploy/.ssh/authorized_keys
  sudo chmod 600 /home/deploy/.ssh/authorized_keys
  ```
- [ ] Test SSH connection from local machine
  ```bash
  ssh -i ~/.ssh/jordan-ai-deploy deploy@YOUR_SERVER_IP
  ```
- [ ] SSH connection successful ✅

### Environment Variables
- [ ] Create environment file on server
  ```bash
  sudo nano /opt/jordan-ai/.env
  ```
- [ ] Add required variables:
  ```env
  NODE_ENV=production
  RESEND_API_KEY=re_your_actual_key
  NEXT_PUBLIC_SITE_URL=https://jordan-ai.com
  NEXT_PUBLIC_APP_VERSION=1.0.0
  ```
- [ ] Save and verify
  ```bash
  sudo cat /opt/jordan-ai/.env
  ```

---

## GitHub Configuration

### Repository Secrets
- [ ] Navigate to project directory
  ```bash
  cd /Users/shakedyarden/MyProjects/jordanai-company-site
  ```
- [ ] Run GitHub secrets setup script
  ```bash
  ./deployment/scripts/setup-github-secrets.sh
  ```
- [ ] Or manually set secrets:
  ```bash
  gh secret set HETZNER_HOST --body "YOUR_SERVER_IP"
  gh secret set HETZNER_USER --body "deploy"
  gh secret set HETZNER_SSH_KEY < ~/.ssh/jordan-ai-deploy
  gh secret set RESEND_API_KEY --body "re_your_key"
  ```
- [ ] Verify secrets are set
  ```bash
  gh secret list
  ```
- [ ] Confirm all 4 secrets present:
  - [ ] HETZNER_HOST
  - [ ] HETZNER_USER
  - [ ] HETZNER_SSH_KEY
  - [ ] RESEND_API_KEY

---

## First Deployment

### Manual Deployment Test
- [ ] SSH to server as deploy user
  ```bash
  ssh deploy@YOUR_SERVER_IP
  ```
- [ ] Navigate to project directory
  ```bash
  cd /opt/jordan-ai
  ```
- [ ] Clone repository
  ```bash
  git clone https://github.com/YOUR_USERNAME/jordanai-company-site.git .
  ```
- [ ] Run first deployment
  ```bash
  bash deployment/scripts/deploy.sh
  ```
- [ ] Wait for deployment to complete (5-10 minutes)
- [ ] Check container status
  ```bash
  docker-compose ps
  ```
- [ ] Container is running ✅
- [ ] Test health endpoint
  ```bash
  curl http://localhost:3000/api/health
  ```
- [ ] Health check returns status "healthy" ✅

---

## Nginx & SSL Configuration

### Nginx Setup
- [ ] Copy Nginx configuration
  ```bash
  sudo cp /opt/jordan-ai/nginx/nginx.conf /etc/nginx/sites-available/jordan-ai.com
  ```
- [ ] Create symlink to sites-enabled
  ```bash
  sudo ln -s /etc/nginx/sites-available/jordan-ai.com /etc/nginx/sites-enabled/
  ```
- [ ] Remove default site (if present)
  ```bash
  sudo rm /etc/nginx/sites-enabled/default
  ```
- [ ] Test Nginx configuration
  ```bash
  sudo nginx -t
  ```
- [ ] Nginx configuration test successful ✅

### SSL Certificate
- [ ] Request SSL certificate from Let's Encrypt
  ```bash
  sudo certbot --nginx -d jordan-ai.com -d www.jordan-ai.com --non-interactive --agree-tos -m shaylee@jordan-ai.com
  ```
- [ ] Certificate obtained successfully ✅
- [ ] Verify certificate
  ```bash
  sudo certbot certificates
  ```
- [ ] Reload Nginx
  ```bash
  sudo systemctl reload nginx
  ```

### Test SSL
- [ ] Test HTTPS locally
  ```bash
  curl -I https://jordan-ai.com
  ```
- [ ] Returns 200 OK ✅
- [ ] Test in browser: `https://jordan-ai.com`
- [ ] Site loads with valid SSL ✅

---

## Cloudflare Configuration

### DNS Records
- [ ] Log into Cloudflare dashboard
- [ ] Navigate to DNS settings for jordan-ai.com
- [ ] Add/update A record for root domain:
  - Type: `A`
  - Name: `@`
  - Content: `YOUR_SERVER_IP`
  - Proxy status: `Proxied` (orange cloud)
  - TTL: `Auto`
- [ ] Add/update A record for www:
  - Type: `A`
  - Name: `www`
  - Content: `YOUR_SERVER_IP`
  - Proxy status: `Proxied` (orange cloud)
  - TTL: `Auto`

### SSL/TLS Settings
- [ ] Go to SSL/TLS → Overview
- [ ] Set encryption mode to: `Full (strict)`
- [ ] Go to SSL/TLS → Edge Certificates
- [ ] Verify "Always Use HTTPS" is enabled
- [ ] Verify "Automatic HTTPS Rewrites" is enabled

### Security Settings
- [ ] Go to Security → Settings
- [ ] Security Level: `Medium` or higher
- [ ] Challenge Passage: `24 hours`
- [ ] Browser Integrity Check: `Enabled`

### Performance Settings
- [ ] Go to Speed → Optimization
- [ ] Auto Minify: Enable `JavaScript`, `CSS`, `HTML`
- [ ] Brotli: `Enabled`

### Verify DNS Propagation
- [ ] Wait 5-10 minutes for DNS propagation
- [ ] Test DNS resolution:
  ```bash
  nslookup jordan-ai.com
  dig jordan-ai.com
  ```
- [ ] DNS resolves to server IP ✅

---

## Production Verification

### Site Accessibility
- [ ] Visit `https://jordan-ai.com` in browser
- [ ] Site loads correctly ✅
- [ ] SSL certificate valid (green padlock) ✅
- [ ] No mixed content warnings ✅

### Health Check
- [ ] Test health endpoint:
  ```bash
  curl https://jordan-ai.com/api/health
  ```
- [ ] Returns JSON with:
  - [ ] `status: "healthy"`
  - [ ] `timestamp` present
  - [ ] `uptime` present
  - [ ] `environment: "production"`
  - [ ] `version` present

### Functionality Tests
- [ ] Navigate through all sections (Header, Hero, About, Services, Process, Contact)
- [ ] Test navigation menu scroll behavior
- [ ] Test "Book a Discovery Call" CTA button
- [ ] Test contact form submission:
  - [ ] Fill out all fields
  - [ ] Submit form
  - [ ] Verify success message
  - [ ] Check email received at shaylee@jordan-ai.com
- [ ] Test on mobile device (responsive design)
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)

---

## Automated Deployment Setup

### GitHub Actions Test
- [ ] Make a small change to the code (e.g., update README)
- [ ] Commit and push to main branch
  ```bash
  git add .
  git commit -m "Test automated deployment"
  git push origin main
  ```
- [ ] Go to GitHub Actions: `https://github.com/YOUR_USERNAME/jordanai-company-site/actions`
- [ ] Verify workflow triggered ✅
- [ ] Wait for workflow to complete (3-5 minutes)
- [ ] Workflow completed successfully ✅
- [ ] Verify deployment:
  ```bash
  curl https://jordan-ai.com/api/health
  ```
- [ ] Site updated with latest changes ✅

---

## Security Verification

### Firewall
- [ ] Check UFW status on server
  ```bash
  sudo ufw status verbose
  ```
- [ ] Verify only ports 22, 80, 443 are open ✅

### Fail2ban
- [ ] Check fail2ban status
  ```bash
  sudo systemctl status fail2ban
  ```
- [ ] Fail2ban is active ✅

### SSL Security
- [ ] Test SSL configuration: https://www.ssllabs.com/ssltest/
- [ ] Grade A or higher ✅

### Security Headers
- [ ] Test security headers: https://securityheaders.com
- [ ] Check for:
  - [ ] Strict-Transport-Security
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] X-XSS-Protection
  - [ ] Referrer-Policy

### Rate Limiting
- [ ] Test rate limiting on contact form:
  ```bash
  for i in {1..10}; do curl -X POST https://jordan-ai.com/api/contact; done
  ```
- [ ] Should see 429 errors after 5 requests ✅

---

## Monitoring Setup (Optional)

### Health Check Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Monitor: `https://jordan-ai.com/api/health`
- [ ] Check interval: 5 minutes
- [ ] Alert email: `shaylee@jordan-ai.com`

### Log Monitoring
- [ ] Set up log aggregation (optional)
- [ ] Configure alerts for errors
- [ ] Set up disk space alerts (>80% usage)

---

## Documentation Review

### Team Onboarding
- [ ] Review [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)
- [ ] Read [deployment/DEPLOYMENT.md](deployment/DEPLOYMENT.md)
- [ ] Familiarize with [deployment/RUNBOOK.md](deployment/RUNBOOK.md)
- [ ] Bookmark GitHub Actions page
- [ ] Save emergency contacts

---

## Post-Deployment

### Communication
- [ ] Notify stakeholders that site is live
- [ ] Share production URL: `https://jordan-ai.com`
- [ ] Provide access to monitoring dashboards

### Backup Verification
- [ ] Check backups directory on server
  ```bash
  ls -lh /opt/backups/jordan-ai/
  ```
- [ ] Verify first backup was created ✅

### Testing Rollback
- [ ] Test rollback procedure (in maintenance window)
  ```bash
  ssh deploy@YOUR_SERVER_IP
  cd /opt/jordan-ai
  bash deployment/scripts/rollback.sh
  ```
- [ ] Rollback works correctly ✅
- [ ] Redeploy to latest version

### Schedule Maintenance
- [ ] Set weekly reminder: Check logs and disk space
- [ ] Set monthly reminder: Update system packages
- [ ] Set quarterly reminder: Security audit
- [ ] Add to calendar: SSL renewal check (every 3 months)

---

## 🎉 Deployment Complete!

### Success Criteria
- [x] Site accessible at `https://jordan-ai.com`
- [x] SSL certificate valid
- [x] All sections functional
- [x] Contact form works
- [x] Automated deployment works
- [x] Health checks passing
- [x] Security measures in place

### Key Information to Save

**Server Access:**
- Server IP: `___________________`
- SSH User: `deploy`
- SSH Key: `~/.ssh/jordan-ai-deploy`

**Important URLs:**
- Production Site: `https://jordan-ai.com`
- Health Check: `https://jordan-ai.com/api/health`
- GitHub Actions: `https://github.com/YOUR_USERNAME/jordanai-company-site/actions`
- Cloudflare Dashboard: `https://dash.cloudflare.com`

**Emergency Contacts:**
- Primary: Shaylee Jordan - shaylee@jordan-ai.com - +972 054 972 8712

**Emergency Procedures:**
- Rollback: `ssh deploy@SERVER_IP 'cd /opt/jordan-ai && bash deployment/scripts/rollback.sh'`
- View logs: `ssh deploy@SERVER_IP 'cd /opt/jordan-ai && docker-compose logs -f'`
- Restart: `ssh deploy@SERVER_IP 'cd /opt/jordan-ai && docker-compose restart'`

---

## Next Steps

1. **Monitor the first 24 hours** - Watch for any issues
2. **Review logs daily** for the first week
3. **Test rollback procedure** during a maintenance window
4. **Set up monitoring alerts** (if not done already)
5. **Document any issues** and solutions in RUNBOOK.md
6. **Schedule regular maintenance** as per operations manual

---

**Checklist Version**: 1.0.0
**Last Updated**: November 2025

Print this checklist and check off items as you complete them!
