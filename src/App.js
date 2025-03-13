import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/scene';
import { ServiceCard } from './components/ServiceCard';
import { ContactForm } from './components/ContactForm';
import { motion } from 'framer-motion';
import {
  Palette,
  Smartphone,
  Globe,
  Layout,
  PenTool,
  Camera,
  Video,
  Share2,
  MessageSquare,
  Lightbulb,
  Menu,
  Github,
  ArrowDown,
} from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Creating stunning, responsive websites that captivate and convert.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Developing unique brand identities that leave lasting impressions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Crafting intuitive mobile experiences for modern users.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Delivering visually compelling designs that tell your story.',
  },
  {
    icon: Globe,
    title: 'UI/UX Design',
    description: 'Building user-centered interfaces that delight and engage.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: "Capturing moments that showcase your brand's essence.",
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Creating dynamic video content that brings ideas to life.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Designing engaging content for social media success.',
  },
  {
    icon: MessageSquare,
    title: 'Content Strategy',
    description: 'Developing content that resonates with your audience.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Design',
    description: 'Pushing boundaries with cutting-edge design solutions.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-poppins">Growatt</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <a
                href="https://github.com"
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-6xl font-bold font-poppins leading-tight mb-6">
                Transforming Ideas into
                <span className="text-gradient"> Visual Excellence</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Elevating brands through innovative design solutions since 2010
              </p>
              <button className="button-gradient px-8 py-3 rounded-lg font-medium">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-poppins mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of design services to help your business stand out in the digital landscape.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-poppins mb-4">Get in Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Contact us for a free consultation.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default App;