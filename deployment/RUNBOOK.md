# Jordan-AI Operations Runbook

Quick reference guide for common operational tasks and emergency procedures.

## Quick Links

- **Production Site**: https://jordan-ai.com
- **Health Check**: https://jordan-ai.com/api/health
- **GitHub Actions**: https://github.com/YOUR_USERNAME/jordanai-company-site/actions
- **Cloudflare Dashboard**: https://dash.cloudflare.com

---

## Common Tasks

### Deploy to Production

**Automatic (Recommended)**:
```bash
# Push to main branch
git push origin main

# Or trigger manually
gh workflow run deploy.yml
```

**Manual**:
```bash
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
bash deployment/scripts/deploy.sh
```

### Check Application Status

```bash
# From local machine
curl https://jordan-ai.com/api/health

# On server
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
docker-compose ps
docker-compose logs --tail=50 jordan-ai
```

### View Logs

```bash
# Real-time logs
docker-compose logs -f jordan-ai

# Last 100 lines
docker-compose logs --tail=100 jordan-ai

# Nginx access logs
sudo tail -f /var/log/nginx/jordan-ai.access.log

# Nginx error logs
sudo tail -f /var/log/nginx/jordan-ai.error.log
```

### Restart Services

```bash
# Restart application container
docker-compose restart jordan-ai

# Restart all containers
docker-compose restart

# Restart Nginx
sudo systemctl restart nginx

# Full rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Update Environment Variables

```bash
ssh deploy@YOUR_SERVER_IP

# Edit environment file
sudo nano /opt/jordan-ai/.env

# Restart to apply changes
cd /opt/jordan-ai
docker-compose restart
```

---

## Emergency Procedures

### 🚨 Site Down - Quick Recovery

**1. Check if containers are running:**
```bash
ssh deploy@YOUR_SERVER_IP
docker-compose ps
```

**2. If containers are down, start them:**
```bash
cd /opt/jordan-ai
docker-compose up -d
```

**3. If containers are up but not responding:**
```bash
docker-compose restart jordan-ai
```

**4. Check logs for errors:**
```bash
docker-compose logs --tail=100 jordan-ai
```

**5. If still down, rollback:**
```bash
bash deployment/scripts/rollback.sh
```

### 🔄 Rollback to Previous Version

**Automated rollback:**
```bash
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
bash deployment/scripts/rollback.sh
```

This will:
- Stop current containers
- Restore previous deployment backup
- Restart containers
- Verify health

**Manual rollback:**
```bash
cd /opt/jordan-ai

# Find available backups
ls -lh /opt/backups/jordan-ai/

# Restore specific backup
BACKUP_FILE="backup-20250110-143000.tar.gz"
docker-compose down
tar -xzf /opt/backups/jordan-ai/$BACKUP_FILE -C /opt/jordan-ai
docker-compose up -d
```

### 🔒 Security Incident Response

**1. Block malicious IP immediately:**
```bash
# Via UFW
sudo ufw deny from MALICIOUS_IP

# Via Cloudflare (preferred)
# Go to: Security → Tools → IP Access Rules
# Add IP block rule
```

**2. Review recent access logs:**
```bash
sudo tail -n 500 /var/log/nginx/jordan-ai.access.log | grep "MALICIOUS_IP"
```

**3. Check for suspicious activity:**
```bash
# Failed authentication attempts
sudo tail -n 100 /var/log/auth.log

# Docker container logs
docker-compose logs --tail=200 | grep -i "error\|fail\|attack"
```

**4. Rotate sensitive credentials:**
```bash
# Update on server
sudo nano /opt/jordan-ai/.env
# Update in GitHub Secrets
gh secret set RESEND_API_KEY --body "new_api_key"
```

**5. Force new deployment:**
```bash
cd /opt/jordan-ai
docker-compose down
docker-compose up -d --build
```

### 💾 Database/Data Recovery

*Note: Current setup is stateless. For future database integration:*

```bash
# Export data
docker-compose exec DATABASE_CONTAINER pg_dump -U user database > backup.sql

# Import data
docker-compose exec -T DATABASE_CONTAINER psql -U user database < backup.sql
```

### 🔐 SSL Certificate Issues

**Check certificate status:**
```bash
sudo certbot certificates
```

**Force renewal:**
```bash
sudo certbot renew --force-renewal
sudo systemctl reload nginx
```

**If renewal fails:**
```bash
# Stop Nginx temporarily
sudo systemctl stop nginx

# Request new certificate (standalone mode)
sudo certbot certonly --standalone -d jordan-ai.com -d www.jordan-ai.com

# Restart Nginx
sudo systemctl start nginx
```

---

## Monitoring & Alerts

### Health Check Endpoints

```bash
# Application health
curl https://jordan-ai.com/api/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2025-01-10T12:00:00.000Z",
  "uptime": 123456,
  "environment": "production",
  "version": "1.0.0"
}
```

### Performance Monitoring

```bash
# Container resource usage
docker stats jordan-ai-web

# System resources
ssh deploy@YOUR_SERVER_IP
htop

# Disk space
df -h

# Memory usage
free -h
```

### Nginx Metrics

```bash
# Connection statistics
sudo ss -s

# Active connections
sudo netstat -an | grep :443 | wc -l

# Request rate (last minute)
sudo tail -n 1000 /var/log/nginx/jordan-ai.access.log | grep "$(date +'%d/%b/%Y:%H:%M')" | wc -l
```

---

## Maintenance Procedures

### Weekly Tasks

**1. Check disk space:**
```bash
ssh deploy@YOUR_SERVER_IP
df -h
```

**2. Review logs for errors:**
```bash
docker-compose logs --tail=500 | grep -i error
sudo tail -n 500 /var/log/nginx/jordan-ai.error.log
```

**3. Clean up old Docker images:**
```bash
docker image prune -a -f
docker volume prune -f
```

### Monthly Tasks

**1. Update system packages:**
```bash
ssh root@YOUR_SERVER_IP
apt update && apt upgrade -y
```

**2. Review security logs:**
```bash
sudo tail -n 1000 /var/log/fail2ban.log
sudo tail -n 1000 /var/log/auth.log | grep "Failed password"
```

**3. Test SSL certificate auto-renewal:**
```bash
sudo certbot renew --dry-run
```

**4. Backup critical files:**
```bash
cd /opt/jordan-ai
tar -czf ~/monthly-backup-$(date +%Y%m).tar.gz \
  docker-compose.yml \
  .env \
  nginx/ \
  deployment/
```

**5. Review and rotate old backups:**
```bash
# Keep only last 10 backups
ls -t /opt/backups/jordan-ai/backup-*.tar.gz | tail -n +11 | xargs rm -f
```

### Quarterly Tasks

**1. Security audit:**
```bash
# Check for outdated packages
sudo apt list --upgradable

# Review firewall rules
sudo ufw status verbose

# Check fail2ban status
sudo fail2ban-client status
```

**2. Performance review:**
```bash
# Analyze Nginx logs
sudo goaccess /var/log/nginx/jordan-ai.access.log -o report.html

# Docker resource usage over time
docker stats --no-stream
```

**3. SSL certificate health:**
```bash
sudo certbot certificates
openssl s_client -connect jordan-ai.com:443 -servername jordan-ai.com < /dev/null 2>/dev/null | openssl x509 -noout -dates
```

---

## Troubleshooting Playbooks

### Playbook 1: High CPU Usage

```bash
# 1. Check which process is consuming CPU
ssh deploy@YOUR_SERVER_IP
htop

# 2. Check Docker container stats
docker stats

# 3. If jordan-ai container is high, check logs
docker-compose logs --tail=200 jordan-ai

# 4. Restart container if needed
docker-compose restart jordan-ai

# 5. If persistent, consider scaling
# (Future: add more containers with load balancer)
```

### Playbook 2: Out of Disk Space

```bash
# 1. Check disk usage
df -h

# 2. Find large files
du -h / | sort -rh | head -n 20

# 3. Clean Docker resources
docker system prune -a -f --volumes

# 4. Clean old backups
rm -f /opt/backups/jordan-ai/backup-*.tar.gz.old

# 5. Rotate logs manually
sudo logrotate -f /etc/logrotate.d/nginx

# 6. Check if more storage needed
# (Resize volume or upgrade server plan)
```

### Playbook 3: Slow Response Times

```bash
# 1. Check system load
ssh deploy@YOUR_SERVER_IP
uptime
htop

# 2. Check Nginx connection queue
sudo ss -s

# 3. Check Docker container health
docker-compose ps
curl http://localhost:3000/api/health

# 4. Review Nginx logs for errors
sudo tail -n 100 /var/log/nginx/jordan-ai.error.log

# 5. Test from different locations
# Use: https://tools.keycdn.com/performance

# 6. Check Cloudflare cache hit rate
# Dashboard → Analytics → Traffic
```

### Playbook 4: SSL/TLS Errors

```bash
# 1. Verify certificate is valid
sudo certbot certificates

# 2. Check Cloudflare SSL mode
# Dashboard → SSL/TLS → Overview
# Should be: "Full (strict)"

# 3. Test SSL configuration
curl -vI https://jordan-ai.com

# 4. Check Nginx configuration
sudo nginx -t

# 5. Review SSL logs
sudo grep -i ssl /var/log/nginx/error.log | tail -n 50

# 6. Force certificate renewal if needed
sudo certbot renew --force-renewal
sudo systemctl reload nginx
```

### Playbook 5: GitHub Actions Deployment Fails

```bash
# 1. Check workflow logs
gh run list
gh run view --log

# 2. Test SSH connection locally
ssh -i ~/.ssh/jordan-ai-deploy deploy@YOUR_SERVER_IP

# 3. Verify GitHub secrets are set
gh secret list

# 4. Check server deployment logs
ssh deploy@YOUR_SERVER_IP
cd /opt/jordan-ai
cat deployment.log

# 5. Run manual deployment to debug
bash deployment/scripts/deploy.sh

# 6. If persistent, re-add SSH key
# (See DEPLOYMENT.md → GitHub Configuration)
```

---

## Contact Information

### On-Call Rotation
- **Primary**: Shaylee Jordan - shaylee@jordan-ai.com - +972 054 972 8712
- **Backup**: TBD

### Service Providers
- **Hosting**: Hetzner - https://console.hetzner.cloud
- **DNS**: Cloudflare - https://dash.cloudflare.com
- **Email API**: Resend - https://resend.com
- **Repository**: GitHub - https://github.com/YOUR_USERNAME/jordanai-company-site

### Escalation Path
1. Check this runbook for common issues
2. Review deployment logs and health checks
3. Attempt automatic rollback if needed
4. Contact primary on-call engineer
5. If unavailable, contact backup

---

## Useful Commands Cheat Sheet

```bash
# Quick status check
ssh deploy@SERVER_IP 'cd /opt/jordan-ai && docker-compose ps && curl -s http://localhost:3000/api/health'

# Full restart
ssh deploy@SERVER_IP 'cd /opt/jordan-ai && docker-compose restart'

# View live logs
ssh deploy@SERVER_IP 'cd /opt/jordan-ai && docker-compose logs -f --tail=50'

# Check last deployment time
ssh deploy@SERVER_IP 'cd /opt/jordan-ai && git log -1 --format="%ar - %s"'

# Test from external location
curl -w "@curl-format.txt" -o /dev/null -s https://jordan-ai.com

# Disk space alert
ssh deploy@SERVER_IP 'df -h | grep -E "Filesystem|/dev/sda"'

# Active connections count
ssh deploy@SERVER_IP 'sudo ss -tan | grep :443 | grep ESTABLISHED | wc -l'

# Memory usage
ssh deploy@SERVER_IP 'free -h'

# Container uptime
ssh deploy@SERVER_IP 'docker ps --format "table {{.Names}}\t{{.Status}}"'
```

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-01-10 | Initial runbook created | Claude |

---

**Document Version**: 1.0.0
**Last Updated**: November 2025
**Next Review**: February 2025
