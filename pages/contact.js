import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Send,
  Zap,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Star,
  Globe,
  Heart,
  Target,
  Rocket
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import SEO from '../components/SEO';

export default function Contact() {
  const router = useRouter();
  const [state, handleSubmit] = useForm("xzzanwvw");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    budget: '',
    plan: '',
    message: ''
  });

  // Pre-fill plan if coming from services page
  useEffect(() => {
    if (router.query.plan) {
      setFormData(prev => ({
        ...prev,
        plan: router.query.plan
      }));
    }
  }, [router.query.plan]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'meteortechnologies2@gmail.com',
      action: 'mailto:meteortechnologies2@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+233 505677556',
      action: 'tel:+233505677556'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Chat with us instantly',
      action: 'https://wa.me/+233505677556?text=Hi, I need a website for my business'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Accra, Greater Accra Region, Ghana',
      action: '#'
    }
  ];

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail/E-commerce',
    'Professional Services',
    'Healthcare',
    'Education',
    'Real Estate',
    'Technology',
    'Non-profit',
    'Other'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Not sure yet'
  ];

  const plans = [
    { value: 'starter', label: 'Starter Package ($599)' },
    { value: 'professional', label: 'Professional Package ($1,299)' },
    { value: 'enterprise', label: 'Enterprise Package ($2,499)' },
    { value: 'custom', label: 'Custom Solution' }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically 1-4 weeks depending on complexity. Starter sites take 1-2 weeks, while custom applications may take 3-4 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All our packages include support ranging from 1-6 months, plus optional maintenance packages thereafter.'
    },
    {
      question: 'Can you help with hosting and domain setup?',
      answer: 'Absolutely. We handle all technical setup including domain registration, hosting configuration, and SSL certificates.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we serve clients across Ghana and internationally. We work remotely and can accommodate different time zones.'
    }
  ];

  // Structured data for contact page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Meteor Technologies",
    "description": "Contact us for your web development needs in Ghana",
    "url": "https://meteortechnologies.gh/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Meteor Technologies",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+233-XX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": "Ghana"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Meteor Technologies | Get Your Website Quote"
        description="Get in touch with Meteor Technologies for your web development needs. Free consultation and quote for personal portfolios and business websites in Ghana. Fast response, professional service."
        keywords="contact web developer Ghana, website quote, web development consultation, Meteor Technologies contact, personal portfolio consultation, business website quote Ghana"
        image="/images/og-image.jpg"
        canonicalUrl="https://meteortechnologies.gh/contact"
        structuredData={contactStructuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />

      {/* Modern Hero Section */}
      <section className="relative py-8 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Let's Connect
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Build Something
              <span className="block text-white">
                Amazing Together
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to take your business online? We're here to help you create a digital presence 
              that drives real results and grows your business.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#contact-form" 
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/+233505677556?text=Hi, I need a website for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Information */}
      <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Multiple Ways to Connect
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to connect with us. We're here to help bring your vision to life with personalized support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              // Special color scheme for WhatsApp
              const colorScheme = info.title === 'WhatsApp' 
                ? { bg: 'from-green-500 to-green-600', hover: 'hover:from-green-600 hover:to-green-700', icon: 'bg-green-100', text: 'text-green-600' }
                : [
                    { bg: 'from-blue-500 to-blue-600', hover: 'hover:from-blue-600 hover:to-blue-700', icon: 'bg-blue-100', text: 'text-blue-600' },
                    { bg: 'from-purple-500 to-purple-600', hover: 'hover:from-purple-600 hover:to-purple-700', icon: 'bg-purple-100', text: 'text-purple-600' },
                    { bg: 'from-orange-500 to-orange-600', hover: 'hover:from-orange-600 hover:to-orange-700', icon: 'bg-orange-100', text: 'text-orange-600' }
                  ][index > 1 ? index - 1 : index];
              
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 group-hover:border-gray-300 p-8 h-full relative">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-3 transition-opacity duration-500`}></div>
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-20 h-20 ${colorScheme.icon} rounded-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon className={`${colorScheme.text} group-hover:scale-110 transition-transform duration-300`} size={32} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {info.title}
                      </h3>
                      
                      <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <p className="text-gray-900 text-base font-semibold leading-relaxed">
                          {info.details}
                        </p>
                      </div>
                      
                      {info.action !== '#' && (
                        <motion.a
                          href={info.action}
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorScheme.bg} ${colorScheme.hover} text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                          target={info.action.startsWith('http') ? '_blank' : '_self'}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Contact Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                      )}
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.5
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section className="py-8 bg-gray-50" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
              <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                Start Your Project
              </motion.h2>
                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Tell us about your vision and we'll bring it to life.
                </motion.p>
              </div>
              
              {state.succeeded ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
                  </p>
                </motion.div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-100">
                  <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                          placeholder="meteortechnologies2@gmail.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                          placeholder="+233 505677556"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Type
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 text-sm sm:text-base"
                        >
                          <option value="">Select your industry</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 text-sm sm:text-base"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <label htmlFor="plan" className="block text-sm font-semibold text-gray-700 mb-2">
                          Interested Package
                        </label>
                        <select
                          id="plan"
                          name="plan"
                          value={formData.plan}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 text-sm sm:text-base"
                        >
                          <option value="">Select a package</option>
                          {plans.map((plan) => (
                            <option key={plan.value} value={plan.value}>{plan.label}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 text-gray-900 placeholder-gray-500 resize-vertical text-sm sm:text-base"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </motion.div>

                    {state.errors && state.errors.length > 0 && (
                      <motion.div
                        className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AlertCircle className="text-red-500 mt-0.5" size={20} />
                        <div>
                          <h4 className="font-semibold text-red-700 mb-1">Please fix the following errors:</h4>
                          <ul className="text-sm text-red-600 space-y-1">
                            {state.errors.map((error, index) => (
                              <li key={index}>• {error.message}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-black text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {state.submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Additional Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">We Review Your Request</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Our team analyzes your requirements and prepares a tailored proposal.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Schedule a Consultation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">We'll set up a call to discuss your project in detail and answer questions.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Receive Your Proposal</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Get a detailed proposal with timeline, pricing, and project roadmap.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Clock className="text-black" size={32} />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2">Quick Response Time</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="font-bold text-gray-900 mb-6">Frequently Asked Questions</h4>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">{faq.question}</h5>
                      <p className="text-gray-600 text-xs leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Location
              </motion.h3>
              
              <motion.div 
                className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="text-black" size={32} />
                  </motion.div>
                  <p className="text-gray-700 font-semibold">Accra, Greater Accra Region</p>
                  <p className="text-gray-600 text-sm">Ghana</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We're based in Accra but serve clients throughout Ghana and internationally through remote collaboration.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
