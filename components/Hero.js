import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import SimpleTunnelBackground from './TunnelBackground';

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundClass = 'bg-black',
  children
}) => {
  return (
    <section className={`relative ${backgroundClass} overflow-hidden`}>
      {/* Simple Tunnel Background */}
      <SimpleTunnelBackground />
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto section-padding py-20 lg:py-32">
        <div className="text-center">
          {/* Badge/Announcement */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-[#FF4500]" size={16} />
            <span className="text-sm text-white font-medium">
              AI-Powered Web Development Studio
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title || (
              <>
                Launch Your Online Presence and Build Your Website with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-400">
                  Meteor Technologies
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-[#D3D3D3] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle || 'AI-powered websites for Ghanaian businesses and beyond. Modern, fast, and conversion-focused.'}
          </motion.p>

          {/* Description */}
          {description && (
            <motion.p
              className="text-base text-[#D3D3D3]/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href={primaryCTA?.href || '/contact'}
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>{primaryCTA?.text || 'Get Started'}</span>
              <ArrowRight size={20} />
            </Link>
            
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>{secondaryCTA.text}</span>
              </Link>
            )}
          </motion.div>

          {/* Additional Content */}
          {children && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--color-background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;


