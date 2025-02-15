import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRocket, FaClock, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const FeatureItem = ({ feature }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-neon-green/60 shadow-2xl flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: feature.delay }}
    >
      <motion.div
        className="text-5xl text-neon-green mb-6"
        animate={{ rotate: inView ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { id: 1, title: 'Cognitive Architecture', description: 'Advanced reasoning and decision-making capabilities.', icon: <FaBrain />, delay: 0 },
    { id: 2, title: 'Hyper-Scale Performance', description: 'Unmatched processing speed and efficiency.', icon: <FaRocket />, delay: 0.2 },
    { id: 3, title: 'Real-Time Adaptation', description: 'Dynamic learning and evolution in real-time.', icon: <FaClock />, delay: 0.4 },
    { id: 4, title: 'Quantum Security', description: 'Unbreakable encryption and data protection.', icon: <FaShieldAlt />, delay: 0.6 },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Unleash Unprecedented Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-0">
        {features.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
