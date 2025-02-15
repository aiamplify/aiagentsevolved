import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-12 text-center text-gray-400"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p>&copy; 2024 AI Agents Evolved. All rights reserved.</p>
      <div className="mt-6">
        <a href="#" className="mx-4 text-neon-blue hover:text-neon-purple transition duration-300">Twitter</a>
        <a href="#" className="mx-4 text-neon-blue hover:text-neon-purple transition duration-300">LinkedIn</a>
        <a href="#" className="mx-4 text-neon-blue hover:text-neon-purple transition duration-300">Facebook</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
