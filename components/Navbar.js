import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Globe, Palette, ChevronDown, ArrowRight } from 'lucide-react';

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
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-xl border-b border-white/5' : 'bg-black/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
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
                priority
              />
            </motion.div>
            <span className="text-base md:text-lg font-bold text-white group-hover:text-[#FF4500] transition-colors duration-300" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
              Meteor Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <span className={`${
                    isActive(item.href)
                      ? 'text-[#FF4500]'
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {/* Modern underline indicator */}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF4500] to-orange-400 transform transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#FF4500] transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Modern Floating Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Backdrop overlay */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)} />
            
            {/* Menu Card */}
            <motion.div 
              className="bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#FF4500] via-orange-400 to-pink-500" />
              
              <div className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            isActive(item.href)
                              ? 'text-white bg-gradient-to-r from-[#FF4500] to-orange-500 shadow-md'
                              : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2 pl-2 space-y-1">
                                {servicesSubmenu.map((service) => {
                                  const IconComponent = service.icon;
                                  return (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-[#FF4500]/5 transition-all duration-200 group"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setServicesOpen(false);
                                      }}
                                    >
                                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF4500]/10 to-orange-500/10 rounded-lg flex items-center justify-center group-hover:from-[#FF4500]/20 group-hover:to-orange-500/20 transition-all">
                                        <IconComponent size={16} className="text-[#FF4500]" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-xs font-semibold text-gray-800 group-hover:text-[#FF4500] transition-colors">
                                          {service.name}
                                        </h4>
                                      </div>
                                    </Link>
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
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          isActive(item.href)
                            ? 'text-white bg-gradient-to-r from-[#FF4500] to-orange-500 shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* CTA Button with modern style */}
                <motion.div 
                  className="pt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.05 + 0.1 }}
                >
                  <Link 
                    href="/contact" 
                    className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF4500] via-orange-500 to-pink-500 hover:shadow-xl transition-all duration-300 text-sm active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
              
              {/* Bottom fade effect */}
              <div className="h-2 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


