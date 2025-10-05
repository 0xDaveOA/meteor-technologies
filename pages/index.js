import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Search, 
  Zap, 
  ArrowRight, 
  Star,
  CheckCircle,
  Users,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Heart,
  Sparkles,
  Target,
  Rocket,
  Palette
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function Home() {
  const services = [
    {
      icon: '👤',
      title: 'Personal Portfolios',
      description: 'Showcase your skills, achievements, and projects with professional personal websites.',
      link: 'Learn more →'
    },
    {
      icon: '🏢',
      title: 'Company Websites',
      description: 'Modern, responsive, multi-page websites for growing brands.',
      link: 'Learn more →'
    },
    {
      icon: '💼',
      title: 'Web Apps',
      description: 'Interactive experiences powered by React and Next.js.',
      link: 'Learn more →'
    },
    {
      icon: '🎨',
      title: 'Brand & UI Design',
      description: 'Clean, consistent visuals for web and social media.',
      link: 'Learn more →'
    },
    {
      icon: '📊',
      title: 'SEO & Analytics',
      description: 'Technical SEO, performance, and insights to improve reach.',
      link: 'Learn more →'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Keep your site secure, fast, and always up-to-date.',
      link: 'Learn more →'
    }
  ];

  const portfolioItems = [
    {
      title: 'AutoSell Ghana',
      description: 'Static business website for automotive sales with modern design and lead generation features.',
      image: '/images/optimized/portfolio-1.webp',
      tech: ['HTML/CSS', 'JavaScript', 'AI Design'],
      results: 'Increased inquiries by 40%'
    },
    {
      title: 'FastTech CCTV Installations',
      description: 'Full-featured home security platform with CCTV monitoring, installation management, and customer portal.',
      image: '/images/optimized/portfolio-2.webp',
      tech: ['Next.js', 'React', 'Paystack API', 'Node.js', 'Tailwind CSS', 'JavaScript'],
      results: 'Currently in development phase'
    }
  ];


  const testimonials = [
    {
      name: 'Rodney T',
      business: 'AutoSell Ghana',
      content: 'Meteor Technologies transformed our online presence. Our website is now modern, fast, and brings in more customers than ever before.',
      rating: 5
    },
    {
      name: 'Mr. Osei',
      business: 'FastTech CCTV Installations',
      content: 'Professional service, beautiful design, and excellent support. They understood our vision and delivered beyond expectations.',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Meteor Technologies - AI-Powered Website Design Studio in Ghana</title>
        <meta 
          name="description" 
          content="Professional website design services in Ghana. We create modern, AI-powered websites for small businesses. Boost your online presence with Meteor Technologies." 
        />
        <meta name="keywords" content="website design Ghana, website design Accra, AI web development, Ghana web developers, small business websites" />
        <meta property="og:title" content="Meteor Technologies - AI-Powered Website Design Studio in Ghana" />
        <meta property="og:description" content="Professional website design services in Ghana. Modern, AI-powered websites for small businesses." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://meteortechnologies.gh" />
        <link rel="canonical" href="https://meteortechnologies.gh" />
      </Head>

      {/* Hero Section */}
      <Hero 
        title="Meteor Tech Builds Your Websites To Win Clients Fast"
        subtitle="We deliver AI-powered, mobile-first websites + marketing that drives sales for businesses and people."
        description="Professional websites that deliver results—from portfolios to enterprise solutions."
      />

      {/* Our Development Process - Innovative Timeline */}
      <section className="py-6 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="text-center mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Development Process
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A proven methodology that transforms your vision into a stunning, high-performance website
            </motion.p>
          </div>

          {/* Innovative Process Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Timeline Line with Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ee2b6c] via-primary to-accent"></div>
            
            <div className="space-y-8">
              {[
                { 
                  step: 1, 
                  title: 'Discovery & Planning', 
                  description: 'We dive deep into your business goals, target audience, and requirements to create the perfect strategy.',
                  icon: Target,
                  color: 'from-[#ee2b6c] to-pink-500',
                  details: ['Business Analysis', 'Target Audience Research', 'Competitor Analysis', 'Technical Requirements', 'Project Timeline']
                },
                { 
                  step: 2, 
                  title: 'Design & Prototyping', 
                  description: 'Our designers create stunning, user-friendly interfaces that reflect your brand and engage your audience.',
                  icon: Palette,
                  color: 'from-blue-500 to-cyan-500',
                  details: ['Wireframing', 'UI/UX Design', 'Brand Integration', 'Responsive Design', 'Interactive Prototypes']
                },
                { 
                  step: 3, 
                  title: 'Development & Coding', 
                  description: 'We build your website using cutting-edge technologies and best practices for optimal performance.',
                  icon: Code2,
                  color: 'from-green-500 to-emerald-500',
                  details: ['Frontend Development', 'Backend Integration', 'Database Setup', 'API Integration', 'Performance Optimization']
                },
                { 
                  step: 4, 
                  title: 'Testing & Launch', 
                  description: 'Rigorous testing ensures everything works perfectly before we launch your website to the world.',
                  icon: Rocket,
                  color: 'from-orange-500 to-red-500',
                  details: ['Quality Assurance', 'Cross-browser Testing', 'Mobile Testing', 'Performance Testing', 'Go Live']
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} lg:flex-row flex-col`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`relative ${index % 2 === 0 ? 'lg:mr-8 mr-0' : 'lg:ml-8 ml-0'} max-w-xs sm:max-w-sm w-full`}>
                    {/* Timeline Node with Icon */}
                    <motion.div 
                      className={`absolute ${index % 2 === 0 ? 'lg:-right-12 -right-6' : 'lg:-left-12 -left-6'} top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#ee2b6c] flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <phase.icon className="text-[#ee2b6c]" size={16} />
                    </motion.div>
                    
                    {/* Content Card */}
                    <motion.div 
                      className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      {/* Step Badge */}
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <div className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${phase.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                          Step {phase.step}
                        </div>
                        <div className="h-px bg-gradient-to-r from-[#ee2b6c] to-transparent flex-grow"></div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 group-hover:text-[#ee2b6c] transition-colors duration-300">
                        {phase.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {phase.description}
                      </p>
                      
                      {/* Details List */}
                      <ul className="space-y-1 sm:space-y-2">
                        {phase.details.map((detail, detailIndex) => (
                          <motion.li 
                            key={detail} 
                            className="flex items-center space-x-2 text-xs text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + detailIndex * 0.1 }}
                          >
                            <CheckCircle size={10} className="text-[#ee2b6c] flex-shrink-0" />
                            <span className="text-xs">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* Bottom Accent */}
                      <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-full"></div>
                    </motion.div>
                  </div>
              </motion.div>
            ))}
            </div>
            
            {/* Timeline End Point */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-6 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          {/* Innovative Header Design */}
          <div className="relative mb-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-full"></div>
                <span className="text-sm font-medium text-[#ee2b6c] uppercase tracking-wider">Our Expertise</span>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Services built to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee2b6c] via-primary to-accent">
                  convert
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                We craft fast, accessible, and SEO-optimized websites using Next.js and React. 
                From static landing pages to interactive apps, we help you grow locally and globally.
              </p>
              
              <Link 
                href="/services" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ee2b6c] to-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Explore All Services</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Services Grid - Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
            {services.map((service, index) => {
              // Define unique colors and shapes for each service
              const serviceStyles = [
                { 
                  gradient: 'from-blue-500 to-purple-600', 
                  shape: 'rounded-full',
                  borderColor: 'border-blue-100',
                  bgAccent: 'bg-blue-50/50'
                },
                { 
                  gradient: 'from-green-500 to-teal-600', 
                  shape: 'rounded-xl',
                  borderColor: 'border-green-100',
                  bgAccent: 'bg-green-50/50'
                },
                { 
                  gradient: 'from-pink-500 to-rose-600', 
                  shape: 'rounded-lg',
                  borderColor: 'border-pink-100',
                  bgAccent: 'bg-pink-50/50'
                },
                { 
                  gradient: 'from-orange-500 to-red-600', 
                  shape: 'rounded-2xl',
                  borderColor: 'border-orange-100',
                  bgAccent: 'bg-orange-50/50'
                },
                { 
                  gradient: 'from-indigo-500 to-blue-600', 
                  shape: 'rounded-full',
                  borderColor: 'border-indigo-100',
                  bgAccent: 'bg-indigo-50/50'
                },
                { 
                  gradient: 'from-emerald-500 to-green-600', 
                  shape: 'rounded-xl',
                  borderColor: 'border-emerald-100',
                  bgAccent: 'bg-emerald-50/50'
                }
              ];
              
              const style = serviceStyles[index % serviceStyles.length];
              
              return (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 ${style.borderColor} text-center backdrop-blur-sm relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                >
                  {/* Subtle Background Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${style.bgAccent} rounded-full blur-3xl -z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${style.gradient} ${style.shape} flex items-center justify-center mb-4 sm:mb-5 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <div className={`mt-6 w-16 h-1 bg-gradient-to-r ${style.gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-300`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-8 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Compact Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 mb-3">
                <span className="text-xs font-medium text-[#ee2b6c] uppercase tracking-wider">Portfolio</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Our Recent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee2b6c] to-primary">
                  Work
                </span>
              </h2>
              
              <p className="text-sm text-gray-400 mb-4 max-w-2xl mx-auto">
                See how we've helped businesses achieve their digital goals
              </p>
              
              <Link href="/portfolio" className="inline-flex items-center space-x-2 text-white text-sm hover:text-[#ee2b6c] transition-colors duration-300">
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Compact Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Compact Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Floating Status Badge */}
                    {item.results.includes('development') && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-[#ee2b6c] text-white text-xs font-medium rounded-full">
                        In Dev
                      </div>
                    )}
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#ee2b6c] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Compact Content */}
                  <div className="p-3 sm:p-4">
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{item.description}</p>
                    
                    {/* Compact Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 2 && (
                        <span className="px-2 py-0.5 bg-[#ee2b6c]/10 text-[#ee2b6c] text-xs rounded-full">
                          +{item.tech.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Compact Results */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 text-xs">{item.results}</span>
                      </div>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[#ee2b6c] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Split CTA Section */}
      <section className="relative overflow-hidden bg-black">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/20 via-black to-purple-900/20" />
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF4500]/30 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Split layout - desktop: side by side, mobile: stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Content Card */}
            <motion.div
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-[#FF4500]/20 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="text-[#FF4500]" size={18} />
                <span className="text-white text-sm font-semibold">Ready to Launch?</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Let's Build Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-400">
                  Digital Future
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                From concept to launch in weeks, not months. Get a modern, high-performance website that converts visitors into customers.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '2+', label: 'Projects' },
                  { value: '100%', label: 'Satisfaction' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {[
                  'Lightning-fast delivery',
                  'Mobile-first design',
                  'SEO optimized',
                  'Ongoing support'
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#FF4500] to-orange-400 flex items-center justify-center">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTA Card */}
            <motion.div
              className="bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Start Your Project Today
                </h3>
                
                <p className="text-white/90 mb-6 text-sm sm:text-base">
                  Get a free consultation and discover how we can transform your online presence.
                </p>

                {/* Primary CTA */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center space-x-2 bg-white text-[#FF4500] px-6 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
                  >
                    <Rocket size={20} />
                    <span>Get Started Free</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/portfolio"
                    className="w-full flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-300"
                  >
                    <Target size={20} />
                    <span>View Portfolio</span>
                  </Link>
                </motion.div>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-6 text-white/80 text-xs">
                    <div className="flex items-center space-x-1.5">
                      <Shield size={16} />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock size={16} />
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Award size={16} />
                      <span>Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


