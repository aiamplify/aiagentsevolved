import React from 'react';
import Hero from './components/Hero';
import AgentsShowcase from './components/AgentsShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
        <AgentsShowcase />
        <Features />
        <Testimonials />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
