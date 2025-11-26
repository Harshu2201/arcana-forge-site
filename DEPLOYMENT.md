# Netlify Deployment Guide

This portfolio website is optimized for Netlify deployment with automatic builds and continuous deployment.

## Quick Deploy to Netlify

### Method 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` or higher
   
   *(These are already configured in `netlify.toml`)*

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://random-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   # Initialize the site
   netlify init
   
   # Deploy to production
   netlify deploy --prod
   ```

## Custom Domain Setup

1. Go to your site's **Domain settings** in Netlify
2. Click "Add custom domain"
3. Enter your domain name
4. Follow Netlify's instructions to update your DNS settings

## Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables (e.g., API keys)
3. Redeploy the site

## Build Configuration

The `netlify.toml` file includes:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache settings for assets

## Performance Optimizations

This site includes:
- ✅ Code splitting and lazy loading
- ✅ Optimized images
- ✅ Asset caching (1 year for static assets)
- ✅ Security headers
- ✅ SPA routing support

## Troubleshooting

### Build Fails
- Check Node version is 18 or higher
- Clear build cache in Netlify UI
- Verify all dependencies are in `package.json`

### 404 Errors on Routes
- Verify `_redirects` file is in the `public` folder
- Check that SPA redirect rule is working

### Slow Initial Load
- Enable Netlify's asset optimization
- Consider enabling Netlify CDN

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests create deploy previews
- Failed builds won't affect production

## Cost

Netlify's free tier includes:
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic SSL certificates
- Deploy previews
- Form submissions

Perfect for this portfolio site! 🚀
