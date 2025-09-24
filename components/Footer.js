import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/meteor-technologies-ghana/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/p/1CYLBdDFr5/?mibextid=wwXIfr', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/meteor_technologies', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
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
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="space-y-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <Link href="/" className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-7 h-7 relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="Meteor Technologies Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </motion.div>
              <span className="text-xl font-bold text-white">
                Meteor Technologies
              </span>
            </Link>
            <p className="text-[#D3D3D3] mb-6 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AI-powered web development for individuals, local businesses and global businesses. 
              We create stunning, conversion-focused websites that boost your online presence.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className={`text-[#D3D3D3] ${social.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links and Services - Side by Side */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#D3D3D3] hover:text-[#FF4500] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-[#D3D3D3] hover:text-[#FF4500] transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#D3D3D3] text-sm">
                <Mail size={16} />
                <span>meteortechnologies2@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#D3D3D3] text-sm">
                <Phone size={16} />
                <span>+233 505677556</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#D3D3D3] text-sm">
                <MapPin size={16} />
                <span>Accra, Greater Accra Region, Ghana</span>
              </div>
            </div>
            <div className="mt-4 flex justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary text-sm">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#D3D3D3] text-sm">
              © {currentYear} Meteor Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-[#D3D3D3] hover:text-[#FF4500] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#D3D3D3] hover:text-[#FF4500] transition-colors duration-200"
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


