# Deployment Guide - Meteor Technologies Portfolio

This guide covers how to deploy the Meteor Technologies portfolio website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/meteor-technologies-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In your Vercel project dashboard:
   - Go to Settings → Environment Variables
   - Add the following:
     ```
     NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
     NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
     ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

## 🌐 Custom Domain Setup

### On Vercel:
1. Go to your project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate will be automatically provisioned

## 📧 Formspree Setup

1. **Create Formspree Account**
   - Visit [formspree.io](https://formspree.io)
   - Sign up for a free account

2. **Create Form**
   - Click "New Form"
   - Name it "Contact Form"
   - Copy the form ID (looks like: `abc123def`)

3. **Update Code**
   - Replace `"your-formspree-id"` in `pages/contact.js`
   - Or use environment variable `NEXT_PUBLIC_FORMSPREE_ID`

4. **Test Form**
   - Submit a test message
   - Check Formspree dashboard for submissions

## 📊 Google Analytics Setup

1. **Create GA4 Property**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get measurement ID (starts with G-)

2. **Update Configuration**
   - Replace `GA_MEASUREMENT_ID` in `pages/_app.js`
   - Or use environment variable `NEXT_PUBLIC_GA_ID`

## 🌍 Alternative Deployment Platforms

### Netlify

1. **Connect Repository**
   ```bash
   # Build command
   npm run build
   
   # Publish directory
   out
   ```

2. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the same variables as Vercel

3. **Deploy Settings**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "out"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### AWS Amplify

1. **Connect Repository**
   - Visit AWS Amplify Console
   - Connect your GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: out
       files:
         - '**/*'
   ```

### Traditional Hosting (cPanel, etc.)

1. **Build for Static Export**
   ```bash
   # Add to next.config.js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build and Upload**
   ```bash
   npm run build
   # Upload the 'out' folder to your hosting provider
   ```

## 🔧 Environment Variables Reference

Create a `.env.local` file with these variables:

```env
# Required
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional
NEXT_PUBLIC_SITE_URL=https://meteortechnologies.gh
NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
```

## 📱 WhatsApp Integration

Update WhatsApp links in these files:
- `components/FloatingCTA.js` (line ~45)
- `pages/contact.js` (line ~90)

Replace `+233XXXXXXXXX` with your actual WhatsApp Business number.

## 🖼️ Image Setup

1. **Add Real Images**
   - Replace placeholder images in `public/images/`
   - Optimize images for web (WebP format recommended)
   - Maintain aspect ratios specified in components

2. **Required Images**
   - `og-image.jpg` (1200x630px for social sharing)
   - `logo.png` (company logo)
   - Portfolio project screenshots
   - Blog featured images

## 🔍 SEO Configuration

1. **Update Meta Tags**
   - Replace placeholder content in each page
   - Update company information
   - Add relevant keywords for your market

2. **Google Search Console**
   - Add your domain to Search Console
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Monitor search performance

## 🚨 Pre-Launch Checklist

- [ ] All environment variables configured
- [ ] Contact form tested and working
- [ ] Google Analytics tracking verified
- [ ] All placeholder content replaced
- [ ] Images optimized and uploaded
- [ ] WhatsApp links updated
- [ ] SSL certificate active
- [ ] Mobile responsiveness tested
- [ ] Page load speeds optimized
- [ ] SEO meta tags completed
- [ ] Social media links updated

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Environment Variables Not Working**
   - Ensure variables start with `NEXT_PUBLIC_`
   - Restart development server after adding variables
   - Check Vercel dashboard for production variables

3. **Form Submissions Not Working**
   - Verify Formspree form ID
   - Check browser network tab for errors
   - Ensure form action points to correct endpoint

4. **Images Not Loading**
   - Check image paths are correct
   - Verify images exist in `public/images/`
   - For external hosting, update `next.config.js` domains

### Performance Optimization

1. **Image Optimization**
   ```javascript
   // Use Next.js Image component
   import Image from 'next/image'
   
   <Image
     src="/images/example.jpg"
     alt="Description"
     width={800}
     height={600}
     priority // For above-the-fold images
   />
   ```

2. **Bundle Analysis**
   ```bash
   # Install bundle analyzer
   npm install --save-dev @next/bundle-analyzer
   
   # Analyze bundle
   ANALYZE=true npm run build
   ```

## 📞 Support

If you need help with deployment:
- Check the troubleshooting section above
- Review platform-specific documentation
- Contact: info@meteortechnologies.gh

---

**Happy Deploying! 🚀**


