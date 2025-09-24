# Meteor Technologies Portfolio Website

A modern, professional portfolio website for Meteor Technologies - AI-powered web development services in Ghana and internationally. Built with Next.js 14, featuring a dark theme, conversion-focused design, and mobile-first approach.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by pixelpoint.io
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Fast loading with Next.js 14 and optimized assets
- **SEO Optimized**: Comprehensive SEO setup with meta tags and structured data
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **Animations**: Smooth Framer Motion animations and interactions
- **Contact Forms**: Formspree integration for contact form submissions
- **Analytics Ready**: Google Analytics setup included

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: Formspree
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
meteor-technologies-portfolio/
├── components/           # Reusable React components
│   ├── Navbar.js        # Navigation component
│   ├── Footer.js        # Footer component
│   ├── Layout.js        # Main layout wrapper
│   ├── Hero.js          # Hero section component
│   ├── Card.js          # Card component
│   ├── Modal.js         # Modal component
│   └── FloatingCTA.js   # Floating call-to-action
├── pages/               # Next.js pages
│   ├── _app.js          # App component with global settings
│   ├── _document.js     # Document component for SEO
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── services.js      # Services page
│   ├── portfolio.js     # Portfolio page
│   ├── blog.js          # Blog page
│   └── contact.js       # Contact page
├── styles/              # Styling files
│   └── globals.css      # Global styles and Tailwind imports
├── public/              # Static assets
│   └── images/          # Image assets
└── README.md           # Project documentation
```

## 🎨 Design System

### Colors
- **Background**: `#0c0c0e` (Dark primary)
- **Foreground**: `#ebebf0` (Near white)
- **Primary**: `#3b82f6` (Blue-500)
- **Accent**: `#22c55e` (Emerald-500)
- **Orange CTA**: `#FF4500` (Orange-red)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: 48px (hero), 24px (subheadings), 16px (body), 14px (footer)

### Spacing
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Margins**: `my-8 sm:my-12 lg:my-16`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/meteor-technologies-portfolio.git
   cd meteor-technologies-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Formspree Form ID (replace with your actual form ID)
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   
   # Google Analytics ID (replace with your actual GA4 ID)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Configuration

### Contact Form Setup
1. Sign up for a [Formspree](https://formspree.io/) account
2. Create a new form and get your form ID
3. Replace `"your-formspree-id"` in `pages/contact.js` with your actual form ID
4. Update the environment variable `NEXT_PUBLIC_FORMSPREE_ID`

### Google Analytics Setup
1. Create a Google Analytics 4 property
2. Get your measurement ID (starts with G-)
3. Replace `GA_MEASUREMENT_ID` in `pages/_app.js` with your actual ID
4. Update the environment variable `NEXT_PUBLIC_GA_ID`

### WhatsApp Integration
Update the WhatsApp links in the following files with your actual phone number:
- `components/FloatingCTA.js`
- `pages/contact.js`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to production**
   ```bash
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard**
   - Go to your project settings in Vercel
   - Add the environment variables from your `.env.local` file

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and deploy automatically
- **AWS Amplify**: Use the Amplify console for deployment
- **Traditional Hosting**: Build with `npm run build` and upload the `out` folder

## 🔧 Customization

### Updating Content
- **Company Information**: Update contact details in `components/Footer.js` and `pages/contact.js`
- **Services**: Modify service offerings in `pages/services.js`
- **Portfolio**: Add your projects in `pages/portfolio.js`
- **Blog Posts**: Update blog content in `pages/blog.js`

### Styling Changes
- **Colors**: Update CSS custom properties in `styles/globals.css`
- **Fonts**: Change font imports in `styles/globals.css`
- **Layout**: Modify spacing and breakpoints in `tailwind.config.js`

### Adding New Pages
1. Create a new file in the `pages` directory
2. Follow the existing page structure with SEO meta tags
3. Update navigation links in `components/Navbar.js`

## 📱 Mobile Optimization

The website is built with a mobile-first approach:
- Responsive grid layouts
- Touch-friendly interactive elements
- Optimized images and performance
- Mobile-specific navigation patterns

## ♿ Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color ratios (4.5:1 minimum)
- Semantic HTML structure
- Focus indicators for interactive elements

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD) for search engines
- Canonical URLs
- Optimized page titles and descriptions
- XML sitemap (auto-generated by Next.js)

## 📊 Performance

- Next.js Image component for optimized images
- Lazy loading for images and components
- Minified CSS and JavaScript
- Efficient bundle splitting
- Core Web Vitals optimized

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed: `npm install`
   - Check for TypeScript errors if using TypeScript
   - Verify all imports are correct

2. **Styling Issues**
   - Make sure Tailwind CSS is properly configured
   - Check for conflicting CSS rules
   - Verify responsive breakpoints

3. **Form Submission Issues**
   - Confirm Formspree ID is correct
   - Check network requests in browser dev tools
   - Verify CORS settings if applicable

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Visit [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support with this project:
- Email: info@meteortechnologies.gh
- Website: [meteortechnologies.gh](https://meteortechnologies.gh)
- WhatsApp: +233 XX XXX XXXX

---

Built with ❤️ by [Meteor Technologies](https://meteortechnologies.gh) - AI-Powered Web Development in Ghana


