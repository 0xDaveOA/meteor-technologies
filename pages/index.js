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
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, serviceSchema, localBusinessSchema, reviewSchema } from '../lib/structuredData';

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
      <SEO
        title="Meteor Technologies - AI-Powered Website Design Studio in Ghana"
        description="Professional website design services in Ghana. We create modern, AI-powered websites for small businesses. Boost your online presence with Meteor Technologies. Fast delivery, affordable pricing."
        keywords="website design Ghana, website design Accra, AI web development, Ghana web developers, small business websites, personal portfolio websites, affordable web design Ghana, professional websites Accra"
        url="https://meteortechnologies.gh"
        structuredData={[
          organizationSchema,
          websiteSchema,
          serviceSchema,
          localBusinessSchema,
          reviewSchema(testimonials)
        ]}
      />

      {/* Hero Section */}
      <Hero 
        title="Meteor Tech Builds Your Websites To Win Clients Fast"
        subtitle="We deliver AI-powered, mobile-first websites + marketing that drives sales for businesses and people."
        description="Whether you're a professional looking to stand out to employers or a business needing an online presence, we create websites that get results. From personal portfolios to enterprise solutions."
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              // Define unique colors and shapes for each service
              const serviceStyles = [
                { 
                  gradient: 'from-blue-500 to-purple-600', 
                  shape: 'rounded-full',
                  hoverGlow: 'hover:shadow-blue-500/25'
                },
                { 
                  gradient: 'from-green-500 to-teal-600', 
                  shape: 'rounded-xl',
                  hoverGlow: 'hover:shadow-green-500/25'
                },
                { 
                  gradient: 'from-pink-500 to-rose-600', 
                  shape: 'rounded-lg',
                  hoverGlow: 'hover:shadow-pink-500/25'
                },
                { 
                  gradient: 'from-orange-500 to-red-600', 
                  shape: 'rounded-2xl',
                  hoverGlow: 'hover:shadow-orange-500/25'
                },
                { 
                  gradient: 'from-indigo-500 to-blue-600', 
                  shape: 'rounded-full',
                  hoverGlow: 'hover:shadow-indigo-500/25'
                },
                { 
                  gradient: 'from-emerald-500 to-green-600', 
                  shape: 'rounded-xl',
                  hoverGlow: 'hover:shadow-emerald-500/25'
                }
              ];
              
              const style = serviceStyles[index % serviceStyles.length];
              
              return (
              <div
                key={service.title}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                >
                  {/* Enhanced Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${style.gradient} ${style.shape} flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${style.hoverGlow} shadow-lg`}>
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    </div>
                    
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base font-semibold text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {service.description}
                    </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-4 bg-black relative overflow-hidden">
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
          {/* Innovative Header with Stats */}
          <div className="relative mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Header Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎯</span>
                  </div>
                  <span className="text-sm font-medium text-[#ee2b6c] uppercase tracking-wider">Portfolio</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee2b6c] to-primary">
                    Work
                  </span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-6">
                  See how we've helped businesses across Ghana and internationally achieve their digital goals.
                </p>
                
                <Link href="/portfolio" className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  <span>View All Projects</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              
              {/* Right: Mini Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {[
                  { number: '2+', label: 'Active Projects', color: 'from-[#ee2b6c] to-primary' },
                  { number: '100%', label: 'Client Satisfaction', color: 'from-primary to-accent' }
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Innovative Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Image with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Status Badge */}
                    {item.results.includes('development') && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#ee2b6c] text-white text-xs font-medium rounded-full">
                        In Development
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ee2b6c]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-lg font-semibold mb-2">View Case Study</div>
                        <div className="w-12 h-0.5 bg-white mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-black group-hover:text-[#ee2b6c] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#ee2b6c] to-primary rounded-lg flex items-center justify-center">
                        <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Tech Stack with Modern Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="px-3 py-1 bg-[#ee2b6c]/10 text-[#ee2b6c] text-xs rounded-full font-medium">
                          +{item.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Results with Icon */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-accent font-medium text-sm">{item.results}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4 bg-background relative overflow-hidden">
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
          <div className="text-center mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Modern Testimonial Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-8 h-full flex flex-col shadow-2xl group-hover:shadow-[#ee2b6c]/20 transition-all duration-500 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#ee2b6c]/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-[#ee2b6c]/20 to-primary/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <span className="text-[#ee2b6c] text-lg">"</span>
                  </motion.div>
                  
                  {/* Stars */}
                  <div className="flex items-start space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <Star className="text-yellow-400 fill-current" size={20} />
                      </motion.div>
                  ))}
                </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 mb-8 italic text-lg leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="mt-auto relative z-10">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-[#ee2b6c] to-primary rounded-full flex items-center justify-center text-white font-bold text-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {testimonial.name.charAt(0)}
                      </motion.div>
                <div>
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.business}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ee2b6c] to-primary rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#ee2b6c]/10 to-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ee2b6c]/20 to-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="text-[#ee2b6c]" size={20} />
              <span className="text-white font-medium">Ready to Transform Your Business?</span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee2b6c] via-primary to-accent">
                Amazing
              </span>{' '}
              Together
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join 50+ successful businesses who chose Meteor Technologies for their digital transformation. 
              From concept to launch, we handle everything.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#ee2b6c] to-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[#ee2b6c]/30 transition-all duration-300"
                >
                  <Rocket size={24} />
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center space-x-3 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <Target size={24} />
                <span>View Our Work</span>
              </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={20} />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-blue-400" size={20} />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


