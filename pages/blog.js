import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { subscribeToNewsletter, getSubscriberCount } from '../lib/supabase';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  Tag,
  Search,
  Mail,
  CheckCircle,
  Rocket,
  Star,
  TrendingUp,
  Globe,
  Heart,
  Sparkles,
  ExternalLink,
  BookOpen,
  Share2,
  ThumbsUp
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import SEO from '../components/SEO';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: '🚀 From Vision to Reality: Meteor Technologies Ghana\'s First Milestone',
      excerpt: 'At Meteor Technologies Ghana, we believe in empowering small businesses and individuals with digital tools that are fast, functional, and future-ready. Our journey began with a bold promise: to deliver AI-powered websites that meet real-world needs—quickly and beautifully.',
      content: 'At Meteor Technologies Ghana, we believe in empowering small businesses and individuals with digital tools that are fast, functional, and future-ready. Our journey began with a bold promise: to deliver AI-powered websites that meet real-world needs—quickly and beautifully. But this mission goes beyond code. It\'s about unlocking opportunity—especially for young Africans ready to build, innovate, and lead. Artificial Intelligence isn\'t just a buzzword—it\'s a catalyst for transformation. Across Africa, AI is enabling young entrepreneurs to launch scalable businesses, deliver smarter services, and solve local challenges with global-grade tools. We\'re proud to spotlight our first major delivery—AutoSell Ltd, a mobile-first car listing platform built for Ghana\'s automotive market. Developed using pure HTML and CSS, and enhanced with AI-driven design logic, AutoSell was crafted to be responsive across devices, visually intuitive for buyers and sellers, integrated with WhatsApp and social media for seamless communication, and optimized for visibility through Facebook and Instagram promotions. The result? A satisfied client whose vision was fully realized. AutoSell now connects hundreds of buyers and sellers across Ghana, with over 50+ cars listed and growing.',
      date: '2024-09-22',
      readTime: '8 min read',
      category: 'Success Story',
      tags: ['AI', 'Web Development', 'Ghana', 'Success', 'AutoSell'],
      featured: true,
      externalLink: 'https://www.linkedin.com/pulse/from-vision-reality-meteor-technologies-ghanas-n879f?utm_source=share&utm_medium=member_ios&utm_campaign=share_via',
      likes: 47,
      shares: 12
    },
    {
      id: 2,
      title: 'The Future of AI in Web Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing web development and what it means for businesses in Ghana.',
      content: 'Artificial Intelligence is no longer a futuristic concept—it\'s here, transforming how we build websites...',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Technology',
      tags: ['AI', 'Web Development', 'Future Tech'],
      featured: true
    },
    {
      id: 3,
      title: 'Building an Online Presence for Ghana Businesses',
      excerpt: 'A comprehensive guide to establishing a strong digital footprint for local businesses in Ghana.',
      content: 'In today\'s digital age, having an online presence is crucial for business success in Ghana...',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Business',
      tags: ['Online Presence', 'Ghana Business', 'Digital Marketing'],
      featured: false
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why It Matters in Africa',
      excerpt: 'Understanding the importance of mobile-first design approach for African markets and user behavior.',
      content: 'With mobile internet usage dominating across Africa, mobile-first design isn\'t just recommended...',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Design',
      tags: ['Mobile Design', 'UX', 'Africa'],
      featured: false
    },
    {
      id: 5,
      title: 'SEO Strategies for Ghanaian Websites',
      excerpt: 'Local SEO techniques that work specifically for businesses targeting the Ghanaian market.',
      content: 'Search Engine Optimization for Ghanaian businesses requires understanding local search patterns...',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'SEO',
      tags: ['SEO', 'Local Search', 'Ghana'],
      featured: false
    },
    {
      id: 6,
      title: 'E-commerce Trends in West Africa',
      excerpt: 'Exploring the growing e-commerce landscape and opportunities for businesses in West Africa.',
      content: 'E-commerce is experiencing unprecedented growth across West Africa, driven by increasing internet penetration...',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'E-commerce',
      tags: ['E-commerce', 'West Africa', 'Trends'],
      featured: false
    },
    {
      id: 7,
      title: 'Website Performance Optimization Tips',
      excerpt: 'Essential techniques to make your website load faster and perform better for users.',
      content: 'Website performance directly impacts user experience, search rankings, and conversion rates...',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Speed'],
      featured: false
    }
  ];

  const categories = ['All', 'Success Story', 'Technology', 'Business', 'Design', 'SEO', 'E-commerce', 'Performance'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  // Load subscriber count on component mount
  useEffect(() => {
    const loadSubscriberCount = async () => {
      const count = await getSubscriberCount();
      setSubscriberCount(count);
    };
    loadSubscriberCount();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setSubscribed(true);
        setEmail('');
        // Update subscriber count
        const newCount = await getSubscriberCount();
        setSubscriberCount(newCount);
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Structured data for blog page
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Meteor Technologies Blog",
    "description": "Web development insights, AI integration tips, and success stories from Ghana",
    "url": "https://meteortechnologies.gh/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Meteor Technologies"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Meteor Technologies"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Meteor Technologies"
      }
    }))
  };

  return (
    <>
      <SEO
        title="Blog - Meteor Technologies | Web Development Insights & Success Stories"
        description="Read our latest insights on web development, AI technology, and digital business strategies. Success stories, tips and trends for personal portfolios and business websites in Ghana."
        keywords="web development blog, AI technology, Ghana business tips, SEO strategies, mobile design, e-commerce trends, personal portfolio tips, business website success stories"
        image="/images/og-image.jpg"
        canonicalUrl="https://meteortechnologies.gh/blog"
        structuredData={blogStructuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ]}
      />

      <Hero
        title="Our Blog"
        subtitle="Insights, tips, and trends in web development and digital business"
        description="Stay ahead of the curve with expert insights on AI, web development, and growing your business online in Ghana and beyond."
        primaryCTA={{ text: 'Subscribe to Newsletter', href: '#newsletter' }}
        secondaryCTA={{ text: 'Latest Posts', href: '#posts' }}
      />

      {/* Hero Success Story Section */}
      <section className="relative py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="px-4 py-2 bg-[#ee2b6c]/20 text-[#ee2b6c] text-sm font-medium rounded-full">
                  Success Story
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                From Vision to Reality: 
                <span className="block bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] bg-clip-text text-transparent">
                  Our First Milestone
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                At Meteor Technologies Ghana, we believe in empowering small businesses and individuals with digital tools that are fast, functional, and future-ready. Our journey began with a bold promise: to deliver AI-powered websites that meet real-world needs—quickly and beautifully.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">50+ Cars Listed</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Growing Platform</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Ghana Market</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/pulse/from-vision-reality-meteor-technologies-ghanas-n879f?utm_source=share&utm_medium=member_ios&utm_campaign=share_via"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white font-semibold rounded-lg hover:from-[#ee2b6c]/90 hover:to-[#FF4500]/90 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read Full Article
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Story
                </button>
              </div>
            </motion.div>

            {/* Logo and Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                    {/* Car Icon */}
                    <div className="relative z-10">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M5 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/>
                        <path d="M3 12h1.5l1.5-3h9l1.5 3H21v3h-1.5l-1.5-3h-9l-1.5 3H3v-3z" fill="currentColor"/>
                        <path d="M6 9h12v2H6V9z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-500"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">AutoSell Ltd</h3>
                    <p className="text-gray-300">Mobile-first car listing platform</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ee2b6c]">50+</div>
                        <div className="text-sm text-gray-400">Cars Listed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#FF4500]">100%</div>
                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ee2b6c] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FF4500] rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50" id="posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Articles
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Stay updated with the latest insights, trends, and success stories from our team
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ee2b6c] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-[#ee2b6c] hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-[#ee2b6c] hover:text-[#FF4500] font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Filter & Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={14} />
                        <span className="text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ee2b6c] transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#ee2b6c] hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {post.externalLink ? (
                    <a
                      href={post.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#ee2b6c]/90 hover:to-[#FF4500]/90 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Read Article</span>
                    </a>
                  ) : (
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#ee2b6c]/90 hover:to-[#FF4500]/90 transition-all duration-300 transform hover:scale-105"
                    >
                      <BookOpen size={16} />
                      <span>Read Article</span>
                    </Link>
                  )}

                  {/* Social Stats for External Posts */}
                  {post.externalLink && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp size={14} />
                          <span className="text-xs">{post.likes || 0}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 size={14} />
                          <span className="text-xs">{post.shares || 0}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">LinkedIn</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" id="newsletter">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="px-4 py-2 bg-[#ee2b6c]/20 text-[#ee2b6c] text-sm font-medium rounded-full">
                Newsletter
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stay Updated with 
              <span className="block bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] bg-clip-text text-transparent">
                Our Latest Insights
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get the latest insights on web development, AI technology, and business growth 
              delivered straight to your inbox. Join our community of innovators and entrepreneurs.
            </p>

            {!subscribed ? (
              <motion.form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ee2b6c] focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white font-semibold rounded-lg hover:from-[#ee2b6c]/90 hover:to-[#FF4500]/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail size={20} />
                  <span>{isLoading ? 'Subscribing...' : 'Subscribe'}</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                className="flex items-center justify-center space-x-3 text-green-400 bg-green-400/10 px-8 py-4 rounded-lg border border-green-400/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={24} />
                <span className="text-lg font-semibold">Thank you for subscribing!</span>
              </motion.div>
            )}

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>{subscriberCount}+ subscribers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Latest Articles */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                </div>

                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-xl flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="px-3 py-1 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] text-white text-xs font-medium rounded-full">
                                {post.category}
                              </span>
                              {post.featured && (
                                <div className="flex items-center space-x-1 text-yellow-500">
                                  <Star size={12} />
                                  <span className="text-xs font-medium">Featured</span>
                                </div>
                              )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ee2b6c] transition-colors cursor-pointer line-clamp-2">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                              {post.excerpt.substring(0, 150)}...
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Calendar size={12} />
                                  <span>{formatDate(post.date)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock size={12} />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              
                              {post.externalLink ? (
                                <a
                                  href={post.externalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1 text-[#ee2b6c] hover:text-[#FF4500] font-semibold text-sm transition-colors"
                                >
                                  <span>Read Article</span>
                                  <ExternalLink size={14} />
                                </a>
                              ) : (
                                <Link
                                  href={`/blog/${post.id}`}
                                  className="inline-flex items-center space-x-1 text-[#ee2b6c] hover:text-[#FF4500] font-semibold text-sm transition-colors"
                                >
                                  <span>Read Article</span>
                                  <ArrowRight size={14} />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-full flex items-center justify-center">
                    <Tag className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Web Development', 'Ghana Business', 'SEO', 'Mobile Design', 'E-commerce', 'Performance', 'Success Story'].map((tag) => (
                    <span key={tag} className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gradient-to-r hover:from-[#ee2b6c] hover:to-[#FF4500] hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                className="bg-gradient-to-br from-[#ee2b6c] to-[#FF4500] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Need Help with Your Website?</h3>
                  </div>
                  
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Get expert advice and professional web development services tailored to your business needs. Let's build something amazing together.
                  </p>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center space-x-2 w-full bg-white text-[#ee2b6c] font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ee2b6c] to-[#FF4500] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Blog Stats</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Articles</span>
                    <span className="text-2xl font-bold text-[#ee2b6c]">{blogPosts.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Featured Posts</span>
                    <span className="text-2xl font-bold text-[#FF4500]">{featuredPosts.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Categories</span>
                    <span className="text-2xl font-bold text-gray-900">{categories.length - 1}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


