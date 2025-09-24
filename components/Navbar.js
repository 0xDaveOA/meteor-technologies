import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Globe, Palette, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasSubmenu: true },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesSubmenu = [
    {
      name: 'Web Development',
      description: 'Personal Portfolios, Business Websites, Web Apps',
      icon: Globe,
      href: '/services#web-development'
    },
    {
      name: 'Brand & Design',
      description: 'UI/UX Design, Logo Design, Brand Guidelines',
      icon: Palette,
      href: '/services#brand-design'
    }
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-8 md:h-8 relative"
            >
              <Image
                src="/images/logo.png"
                alt="Meteor Technologies Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF4500] transition-colors" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
              Meteor Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#FF4500] bg-[#FF4500]/10'
                      : 'text-[#D3D3D3] hover:text-[#FF4500] hover:bg-white/5'
                  }`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#D3D3D3] hover:text-[#FF4500] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-0 sm:px-3 bg-white backdrop-blur-sm border-t-2 border-b-2 border-[#FF4500]/20 shadow-lg">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 border border-transparent hover:border-[#FF4500]/30 ${
                          isActive(item.href)
                            ? 'text-[#FF4500] bg-[#FF4500]/10 border-[#FF4500]/40 shadow-sm'
                            : 'text-gray-800 hover:text-[#FF4500] hover:bg-gray-50 hover:shadow-sm'
                        }`}
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-2 space-y-2">
                              {servicesSubmenu.map((service, serviceIndex) => {
                                const IconComponent = service.icon;
                                return (
                                  <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: serviceIndex * 0.1 }}
                                  >
                                    <Link
                                      href={service.href}
                                      className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-50 hover:bg-[#FF4500]/10 transition-all duration-300 group"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setServicesOpen(false);
                                      }}
                                    >
                                      <div className="flex-shrink-0 w-10 h-10 bg-[#FF4500]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FF4500]/20 transition-colors">
                                        <IconComponent size={24} className="text-[#FF4500]" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-base font-semibold text-gray-900 group-hover:text-[#FF4500] transition-colors">
                                          {service.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                          {service.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                <Link
                  href={item.href}
                      className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 border border-transparent hover:border-[#FF4500]/30 ${
                    isActive(item.href)
                          ? 'text-[#FF4500] bg-[#FF4500]/10 border-[#FF4500]/40 shadow-sm'
                          : 'text-gray-800 hover:text-[#FF4500] hover:bg-gray-50 hover:shadow-sm'
                  }`}
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                  )}
                  
                  {/* Feint separator line */}
                  {index < navigation.length - 1 && (
                    <div className="mx-4 my-2 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  )}
                </div>
              ))}
              
              {/* Separator before CTA button */}
              <div className="mx-4 my-3 h-px bg-gradient-to-r from-transparent via-[#FF4500]/50 to-transparent"></div>
              
              <div className="px-3 pt-2">
                <Link 
                  href="/contact" 
                  className="w-full text-center block px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-orange-400/30"
                  style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


