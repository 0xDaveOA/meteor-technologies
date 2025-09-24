import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Main CTA Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#FF4500] hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open contact options"
            >
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Expanded Options */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 min-w-[200px]"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-[#FF4500] hover:bg-orange-600 text-white text-center py-2 px-4 rounded-md transition-colors duration-200"
                      onClick={() => setIsExpanded(false)}
                    >
                      Request Quote
                    </Link>
                    <a
                      href="https://wa.me/+233505677556?text=Hi, I need a website for my business"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md transition-colors duration-200"
                      onClick={() => setIsExpanded(false)}
                    >
                      WhatsApp Chat
                    </a>
                    <Link
                      href="tel:+233505677556"
                      className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md transition-colors duration-200"
                      onClick={() => setIsExpanded(false)}
                    >
                      Call Now
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;


