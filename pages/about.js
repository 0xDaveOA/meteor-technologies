import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Lightbulb, 
  Rocket, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function About() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Research & Strategy',
      description: 'We start by understanding your business, target audience, and goals to create a strategic plan.',
      details: [
        'Business analysis',
        'Competitor research',
        'User persona development',
        'Technical requirements'
      ]
    },
    {
      icon: Code2,
      title: 'Design & Development',
      description: 'Our team creates beautiful, functional designs and develops them using cutting-edge technologies.',
      details: [
        'UI/UX design',
        'Responsive development',
        'AI integration',
        'Performance optimization'
      ]
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We launch your website and provide ongoing support to ensure continued success.',
      details: [
        'Quality assurance',
        'SEO optimization',
        'Performance monitoring',
        'Ongoing maintenance'
      ]
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We leverage the latest technologies including AI to create cutting-edge solutions.',
      icon: Zap
    },
    {
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and tested thoroughly.',
      icon: Award
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as partners in their digital transformation.',
      icon: Users
    }
  ];

  const milestones = [
    { year: '2025', event: 'Founded Meteor Technologies' },
    { year: '2025', event: 'Completed first 10 projects' },
    { year: '2025', event: 'Integrated AI into our workflow' },
  ];

  return (
    <>
      <Head>
        <title>About Us - Meteor Technologies | AI-Powered Web Studio in Ghana</title>
        <meta 
          name="description" 
          content="Learn about Meteor Technologies, Ghana's leading AI-powered web development studio. We create modern, responsive websites for personal portfolios and business websites across Ghana and internationally." 
        />
        <meta name="keywords" content="about meteor technologies, Ghana web studio, AI web development team, web developers Ghana, personal portfolio websites, business websites Ghana, Accra web developers" />
        <meta property="og:title" content="About Us - Meteor Technologies | AI-Powered Web Studio" />
        <meta property="og:description" content="Learn about our team and mission to empower individuals and businesses with AI-powered web solutions for personal portfolios and company websites." />
        <meta property="og:image" content="https://meteortechnologies.gh/images/tech-pattern.jpg" />
        <meta property="og:url" content="https://meteortechnologies.gh/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Meteor Technologies" />
        <meta name="twitter:description" content="Learn about our team and mission to empower individuals and businesses with AI-powered web solutions." />
        <meta name="twitter:image" content="https://meteortechnologies.gh/images/tech-pattern.jpg" />
        <link rel="canonical" href="https://meteortechnologies.gh/about" />
      </Head>

      <Hero
        title="About Meteor Technologies"
        subtitle="Empowering Ghanaian businesses with AI-powered web solutions"
        description="Using cutting-edge AI integration, we've grown into premier website design and development company."
        primaryCTA={{ text: 'Our Services', href: '/services' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      {/* Our Story */}
      <section className="section-margin">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ee2b6c] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  Meteor Technologies was born from a simple vision: to help local and international Ghanaian businesses 
                  establish a powerful online presence that drives real results. What started as 
                  a passion project has evolved into a comprehensive web development company that works with the latest technologies.
                </p>
                <p>
                  Today, we combine traditional web development expertise with cutting-edge AI 
                  technologies to create exceptional websites. Our portfolio includes successful projects like autosellgh.com 
                  and numerous other businesses across Ghana and internationally.
                </p>
                <p>
                  We believe that every business, regardless of size, deserves a professional 
                  website. That's why we've made it our mission to provide accessible, 
                  high-quality web development services that deliver measurable results.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Work With Us</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/optimized/about-us.webp"
                  alt="Meteor Technologies - About Us"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-margin bg-background relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto section-padding py-8 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} delay={index * 0.2} className="bg-white border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-800">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-margin relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A proven methodology that delivers exceptional results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={step.title} delay={index * 0.2} className="bg-white border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary mr-2">{index + 1}</span>
                    <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                  </div>
                  <p className="text-gray-800 mb-6">{step.description}</p>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start space-x-3 text-sm text-gray-800">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-margin bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/optimized/abstract.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="max-w-7xl mx-auto section-padding py-8 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Key milestones in our growth and evolution
            </motion.p>
          </div>

          {/* Innovative Timeline Design */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ee2b6c] via-primary to-accent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'} max-w-md`}>
                    {/* Timeline Node */}
                    <div className={`absolute ${index % 2 === 0 ? '-right-12' : '-left-12'} top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#ee2b6c] flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-[#ee2b6c] rounded-full"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="px-3 py-1 bg-[#ee2b6c] text-white text-sm font-bold rounded-full">
                          {milestone.year}
                        </div>
                        <div className="h-px bg-gradient-to-r from-[#ee2b6c] to-transparent flex-grow"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">{milestone.event}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Timeline End Point */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-margin bg-black">
        <div className="max-w-7xl mx-auto section-padding py-16">
          <div className="text-center">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ee2b6c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Digital Journey?
            </motion.h2>
            <motion.p
              className="text-lg text-[#D3D3D3] mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's work together to create something amazing for your business
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


