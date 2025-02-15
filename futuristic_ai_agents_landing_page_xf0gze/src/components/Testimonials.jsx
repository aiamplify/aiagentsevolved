import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { id: 1, quote: "Transformed our entire operation!", name: "Alex R.", position: "CEO, FutureTech Corp" },
    { id: 2, quote: "Efficiency gains beyond expectations.", name: "Samantha K.", position: "CTO, Innovate Solutions" },
    { id: 3, quote: "The future is now, thanks to these agents.", name: "Jordan M.", position: "COO, Quantum Dynamics" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
      <div className="flex justify-center">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl rounded-3xl p-10 w-full md:w-2/3 border border-white/10 shadow-2xl"
        >
          <p className="text-gray-300 italic text-xl text-center">"{testimonials[current].quote}"</p>
          <p className="text-neon-blue font-bold mt-6 text-center text-lg">{testimonials[current].name}</p>
          <p className="text-gray-400 text-center">{testimonials[current].position}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
