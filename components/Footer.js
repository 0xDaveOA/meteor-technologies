import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/meteor-technologies-ghana/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/p/1CYLBdDFr5/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/meteor_technologies' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '/services' },
    { name: 'AI Integration', href: '/services' },
    { name: 'SEO Optimization', href: '/services' },
    { name: 'Brand Design', href: '/services' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section - Full width on mobile */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 relative flex-shrink-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Meteor Technologies Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </motion.div>
              <span className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
                Meteor Technologies
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-powered web solutions for businesses worldwide. Building digital experiences that drive growth.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a href="mailto:meteortechnologies2@gmail.com" className="flex items-start space-x-3 text-gray-400 hover:text-white text-sm transition-colors group">
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-white" />
                <span className="break-all">meteortechnologies2@gmail.com</span>
              </a>
              <a href="tel:+233505677556" className="flex items-start space-x-3 text-gray-400 hover:text-white text-sm transition-colors group">
                <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-white" />
                <span>+233 505677556</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </div>
              
              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Send size={16} />
                  <span>Start Project</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              © {currentYear} Meteor Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


