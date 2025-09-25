import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Search, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  ShoppingCart,
  BarChart,
  Palette,
  Shield,
  Clock,
  Rocket,
  Target,
  Award,
  Heart,
  Sparkles,
  TrendingUp,
  Users,
  Lightbulb,
  Wrench,
  Layers
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import SEO from '../components/SEO';

export default function Services() {
  const pricingTiers = [
    {
      name: 'Personal Portfolio',
      subtitle: 'Perfect for professionals, freelancers, and creatives',
      description: 'Showcase your skills, achievements, and projects with a stunning personal website',
      features: [
        'Skills & achievements showcase',
        'Project gallery with case studies',
        'Resume/CV integration',
        'Contact & hire me forms',
        'Social media integration',
        'SEO optimization for personal branding',
        'Mobile-first responsive design',
        '1 month support & updates'
      ],
      popular: false,
      icon: Globe,
      deliveryTime: '1-2 weeks'
    },
    {
      name: 'Company Website',
      subtitle: 'Most popular choice for growing businesses',
      description: 'Multi-page website with CMS and advanced features',
      features: [
        'Up to 8 pages',
        'Next.js with Content Management',
        'Advanced SEO optimization',
        'Blog functionality',
        'Performance optimization',
        'Custom animations',
        '3 months support',
        'Ghana market targeting'
      ],
      popular: true,
      icon: Zap,
      deliveryTime: '2-3 weeks'
    },
    {
      name: 'Web Application',
      subtitle: 'For businesses needing custom solutions',
      description: 'Full-featured web app with AI integration and custom functionality',
      features: [
        'Custom React/Next.js app',
        'AI integration capabilities',
        'Database integration',
        'User authentication',
        'Advanced analytics',
        'API integrations',
        '6 months support',
        'Priority support & training'
      ],
      popular: false,
      icon: BarChart,
      deliveryTime: '3-4 weeks'
    }
  ];

  const personalPortfolioFeatures = [
    {
      icon: Users,
      title: 'Professional Branding',
      description: 'Create a strong personal brand that stands out to employers and clients.',
      features: ['Personal Logo Design', 'Brand Colors & Typography', 'Professional Headshots', 'Consistent Visual Identity']
    },
    {
      icon: Award,
      title: 'Skills & Achievements',
      description: 'Highlight your expertise, certifications, and career milestones effectively.',
      features: ['Skills Matrix', 'Certification Display', 'Awards & Recognition', 'Career Timeline']
    },
    {
      icon: Code2,
      title: 'Project Showcase',
      description: 'Display your best work with detailed case studies and live demos.',
      features: ['Project Galleries', 'Case Study Pages', 'Live Demo Links', 'Code Repository Links']
    },
    {
      icon: Target,
      title: 'Career Focus',
      description: 'Optimized for job applications, freelance opportunities, and networking.',
      features: ['Resume Integration', 'Downloadable CV', 'Contact Forms', 'Social Proof']
    }
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: 'Brand & UI Design',
      description: 'Clean, consistent visuals for web and social media that represent your brand perfectly.',
      features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design', 'Social Media Graphics']
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Technical SEO, performance optimization, and insights to improve your online reach.',
      features: ['Keyword Research', 'On-Page SEO', 'Performance Optimization', 'Google Analytics Setup']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store with payment processing and inventory management.',
      features: ['Payment Gateway Integration', 'Product Management', 'Order Tracking', 'Customer Accounts']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure your website works perfectly on all devices with mobile-first design.',
      features: ['Responsive Design', 'Mobile-First Approach', 'Touch Optimization', 'Cross-Platform Testing']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your website secure and up-to-date with our ongoing maintenance services.',
      features: ['SSL Certificates', 'Regular Updates', 'Security Monitoring', 'Backup Solutions']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track your website performance and make data-driven decisions for growth.',
      features: ['Performance Monitoring', 'Custom Dashboards', 'User Behavior Analysis', 'Conversion Tracking']
    }
  ];

  const whyChooseUs = [
    {
      title: 'AI-Powered Development',
      description: 'We leverage artificial intelligence to create smarter, more efficient websites.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of the Ghanaian market and business landscape.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Ongoing Support',
      description: 'Comprehensive support and maintenance to keep your site running smoothly.',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Structured data for services page
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services for personal portfolios and business websites in Ghana",
    "provider": {
      "@type": "Organization",
      "name": "Meteor Technologies",
      "url": "https://meteortechnologies.gh"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ghana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": pricingTiers.map(tier => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tier.name,
          "description": tier.description
        },
        "availability": "https://schema.org/InStock"
      }))
    },
    "serviceType": "Web Development",
    "category": "Technology Services"
  };

  return (
    <>
      <SEO
        title="Web Development Services - Meteor Technologies | Personal Portfolios & Business Websites"
        description="Professional web development services in Ghana. Create stunning personal portfolios and business websites with our AI-powered development studio. Affordable pricing, fast delivery."
        keywords="web development services Ghana, personal portfolio websites, business websites Ghana, website design pricing, Ghana web developers, affordable websites Ghana, Accra web development"
        image="/images/og-image.jpg"
        canonicalUrl="https://meteortechnologies.gh/services"
        structuredData={servicesStructuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />

      <Hero
        title="Web Development Services"
        subtitle="Personal Portfolios & Business Websites"
        description="Whether you're a professional looking to showcase your skills or a business needing an online presence, we create stunning websites that get results. From personal portfolios to enterprise solutions."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      {/* Modern Pricing Tiers - Glass Morphism */}
      <section className="section-margin bg-black relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #ee2b6c 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)`,
            backgroundSize: '600px 600px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto section-padding py-6 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee2b6c] to-primary">
                Perfect Package
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              No hidden fees, no surprises. All packages include hosting setup, basic training, and ongoing support.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative flex-1 max-w-xs px-6 py-6 flex flex-col backdrop-blur-sm border rounded-xl shadow-xl ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-[#ee2b6c]/30 scale-105 ring-2 ring-[#ee2b6c]/20' 
                    : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700/50'
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: tier.popular ? 1.05 : 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: tier.popular ? 1.08 : 1.03 }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <motion.div 
                    className="absolute -top-4 right-4 px-4 py-2 text-xs font-semibold rounded-full bg-[#ee2b6c] text-white shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-light text-white mb-1 tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/70">
                    {tier.subtitle}
                  </p>
                </div>


                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>

                {/* Features List */}
                <ul className="flex flex-col gap-2 text-xs text-white/90 mb-6 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + featureIndex * 0.1 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#ee2b6c] flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Delivery Time */}
                <div className="flex items-center justify-center space-x-2 mb-4 text-xs text-white/70">
                  <Clock size={14} />
                  <span>Delivery: {tier.deliveryTime}</span>
                </div>

                {/* CTA Button */}
                <motion.div
                  className="mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={`/contact?plan=${tier.name.toLowerCase()}`}
                    className={`w-full py-2 rounded-lg font-semibold text-xs transition-all duration-300 text-center block ${
                      tier.popular 
                        ? 'bg-[#ee2b6c] hover:bg-[#ee2b6c]/90 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    Get {tier.name} Quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white/70 mb-4 text-base">Need a custom solution?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Request Custom Quote</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

        {/* Why Choose Us */}
        <section className="section-margin">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Meteor Technologies?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-105 transition-all duration-300"
                >
                  {/* Custom Stylized Icon Design */}
                  <div className="relative w-full h-full">
                    {/* AI-Powered Development - Brain/Neural Network Icon */}
                    {reason.title === 'AI-Powered Development' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl transform rotate-12"></div>
                        <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 rounded-xl transform -rotate-6"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 via-orange-300 to-red-300 rounded-lg transform rotate-3"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-2 left-3 w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                      </div>
                    )}
                    
                    {/* Local Expertise - Target/Map Icon */}
                    {reason.title === 'Local Expertise' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-2xl"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-green-300 via-emerald-400 to-teal-400 rounded-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-white/60 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white/40 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    )}
                    
                    {/* Fast Delivery - Rocket Icon */}
                    {reason.title === 'Fast Delivery' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-2xl transform -rotate-12"></div>
                        <div className="absolute inset-1 bg-gradient-to-br from-blue-300 via-cyan-400 to-blue-500 rounded-xl transform rotate-6"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-blue-200 via-cyan-300 to-blue-400 rounded-lg transform -rotate-3"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-8 bg-white/20 rounded-t-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-6 bg-white/30 rounded-t-full"></div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/40 rounded-full"></div>
                      </div>
                    )}
                    
                    {/* Ongoing Support - Wrench/Support Icon */}
                    {reason.title === 'Ongoing Support' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 rounded-2xl"></div>
                        <div className="absolute inset-1 bg-gradient-to-br from-purple-300 via-pink-400 to-purple-500 rounded-xl"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-purple-200 via-pink-300 to-purple-400 rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/30 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Floating Particles - Keep these */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.8, 0.4],
                      y: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.5 + 0.5
                    }}
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ee2b6c] group-hover:to-primary transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="text-white text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Portfolio Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Perfect for Personal Branding
            </motion.h2>
            <motion.p
              className="text-lg text-gray-800 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Whether you're a developer, designer, writer, or any professional, we'll create a portfolio 
              that showcases your unique skills and helps you stand out to employers and clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {personalPortfolioFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Additional Services - Modern Grid */}
      <section className="section-margin bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ee2b6c 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto section-padding py-6 relative z-10">
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ee2b6c]/20 to-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="text-[#ee2b6c]" size={16} />
              <span className="text-white font-medium text-sm">Specialized Services</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Additional Services
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Extend your website's capabilities with our specialized services designed to boost your online presence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
              >
                {/* Service Card */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700/50 rounded-2xl p-8 h-full flex flex-col shadow-2xl group-hover:shadow-[#ee2b6c]/20 transition-all duration-500 overflow-hidden">
                  {/* Animated Background Glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#ee2b6c]/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Icon Section */}
                  <motion.div 
                    className="relative mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ee2b6c]/20 via-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[#ee2b6c]/30 transition-all duration-500">
                      <service.icon className="text-3xl text-[#ee2b6c] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Floating particles */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ee2b6c] group-hover:to-primary transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center space-x-3 text-sm text-white/90 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      >
                        <CheckCircle size={16} className="text-[#ee2b6c] flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <motion.div
                    className="mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center space-x-2 text-[#ee2b6c] hover:text-white font-semibold transition-all duration-300 group-hover:translate-x-2"
                    >
                      <span>Learn More</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </Link>
                  </motion.div>
                  
                  {/* Bottom Accent Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Corner Accents */}
                  <motion.div 
                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#ee2b6c]/20 to-transparent rounded-bl-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-margin bg-black">
        <div className="max-w-7xl mx-auto section-padding py-16">
          <div className="text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-lg text-[#D3D3D3] mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's discuss your project and find the perfect solution for your business needs
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center space-x-2">
                <span>View Our Work</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


