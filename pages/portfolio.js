import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Zap,
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  BarChart,
  X,
  Star,
  Award,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Play
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Modal from '../components/Modal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AutoSell Ghana',
      category: 'Business Website',
      description: 'A modern, conversion-focused website for Ghana\'s premier automotive sales company.',
      shortDescription: 'Professional automotive sales website with lead generation features.',
      image: '/images/optimized/portfolio-1.webp',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'AI Integration'],
      features: [
        'Responsive design across all devices',
        'Lead generation contact forms',
        'Vehicle showcase gallery',
        'SEO optimized for local search',
        'Fast loading performance',
        'WhatsApp integration'
      ],
      results: [
        'Increased online inquiries by 40%',
        'Improved search rankings for key terms',
        'Enhanced brand credibility',
        'Mobile traffic increased by 60%'
      ],
      liveUrl: 'https://autosellgh.com',
      githubUrl: null,
      testimonial: {
        content: 'Meteor Technologies delivered exactly what we needed. Our online presence has never been stronger.',
        author: 'Rodney T, AutoSell Ghana'
      },
      duration: '2 weeks',
      client: 'AutoSell Ghana',
      rating: 5
    },
    {
      id: 2,
      title: 'FastTech CCTV Installations',
      category: 'Web Application',
      status: 'In Development',
      description: 'Comprehensive home security platform with CCTV monitoring, installation management, and customer portal.',
      shortDescription: 'Home security platform with advanced monitoring and management features.',
      image: '/images/optimized/portfolio-2.webp',
      technologies: ['Next.js', 'React', 'Paystack API', 'Node.js', 'Tailwind CSS', 'TypeScript'],
      features: [
        'CCTV installation booking system',
        'Real-time monitoring dashboard',
        'Customer portal access',
        'Service scheduling system',
        'Payment integration with Paystack',
        'Mobile-responsive design'
      ],
      results: [
        'Currently in development phase',
        'Expected launch: Q4 2025',
        'Advanced security features planned',
        'Full mobile optimization in progress'
      ],
      liveUrl: null,
      githubUrl: null,
      testimonial: {
        content: 'We are excited about the innovative features being developed. The progress so far looks very promising.',
        author: 'FastTech CCTV Team'
      },
      duration: '6 weeks',
      client: 'FastTech CCTV',
      rating: 5
    },
  ];

  const categories = ['All', 'Business Website', 'Web Application'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);


  return (
    <>
      <Head>
        <title>Portfolio - Meteor Technologies | Personal Portfolios & Business Websites</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful web development projects. See how we've helped individuals create stunning personal portfolios and businesses build their online presence in Ghana." 
        />
        <meta name="keywords" content="web development portfolio Ghana, personal portfolio examples, business websites Ghana, website showcase, Ghana web design, Accra web development" />
        <meta property="og:title" content="Portfolio - Meteor Technologies | Our Best Work" />
        <meta property="og:description" content="Explore our portfolio of successful web development projects for personal portfolios and business websites in Ghana." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://meteortechnologies.gh/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Meteor Technologies" />
        <meta name="twitter:description" content="Explore our portfolio of successful web development projects for personal portfolios and business websites." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://meteortechnologies.gh/portfolio" />
      </Head>

      {/* Modern Hero Section */}
      <section className="relative py-8 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
                <Award className="w-4 h-4 mr-2" />
                Our Best Work
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Portfolio of
              <span className="block text-white">
                Excellence
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover how we've transformed businesses across Ghana with cutting-edge web solutions. 
              Each project tells a story of innovation, performance, and client success.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg shadow-black/25'
                    : 'bg-white text-gray-600 hover:bg-black/10 hover:text-black border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-black/20">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-6 h-6 ml-1" />
                        </div>
                        <div className="text-lg font-semibold mb-1">View Details</div>
                        <div className="text-sm opacity-90">Click to explore</div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      {project.status === 'In Development' ? (
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                          In Development
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-black/10 text-black text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 ml-4">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Key Result */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {project.results[0]}
                        </span>
                        <div className="flex items-center space-x-2">
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-black hover:bg-black/10 rounded-lg transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} />
                            </a>
                          ) : project.status === 'In Development' ? (
                            <span className="text-orange-500 text-xs font-medium">Coming Soon</span>
                          ) : null}
                          <ArrowRight className="text-black group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        size="lg"
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Project Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 bg-black/10 text-black text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.status === 'In Development' ? (
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full">
                      In Development
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">
                      Completed
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedProject.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {selectedProject.client}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(selectedProject.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Results Achieved</h4>
                  <ul className="space-y-3">
                    {selectedProject.results.map((result, index) => (
                      <motion.li 
                        key={result} 
                        className="flex items-start space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm italic mb-2 leading-relaxed">"{selectedProject.testimonial.content}"</p>
                        <p className="text-gray-400 text-xs font-medium">— {selectedProject.testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Live Site
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Start Similar Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* Modern CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ready to Get Started?
              </span>
            </motion.div>
            
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Join Our
              <span className="block text-white">
                Success Stories?
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's create something amazing for your business. Every project starts with a conversation, 
              and every conversation leads to success.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25"
              >
                Start Your Project
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                View Our Services
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


