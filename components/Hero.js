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

      <div className="relative h-screen flex items-end">
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12 text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title || "Websites That Win Clients Fast"}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle || "AI-powered, mobile-first websites + marketing that drives sales"}
          </motion.p>
          
          <motion.a
            href="#contact"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Get Started →
          </motion.a>
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


