import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Modal from './Modal';

const Scene = () => {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1;
      sphereRef.current.rotation.x += delta * 0.05;
    }
  });

    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={150} depth={50} count={5000} factor={8} saturation={0} fade speed={2} />
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#29d9d5"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.5}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5}/>
      </>
    );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-6xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
        >
          AI Agents Evolved
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Harness the power of next-generation AI to redefine possibilities.
        </motion.p>

        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-0 bg-neon-blue rounded-full blur-2xl animate-pulse-glow" />
          <button
            className="relative z-10 bg-black/70 backdrop-blur-md px-16 py-5 rounded-full text-2xl font-bold border-2 border-neon-blue/50 hover:border-neon-purple/80 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Explore Now
          </button>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-4 text-neon-blue">Explore AI Agents</h2>
        <p className="text-gray-300 mb-6">Discover the capabilities of our advanced AI agents.  They can revolutionize your workflow, automate complex tasks, and provide unparalleled insights.</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Adaptive Learning</li>
          <li>Predictive Analysis</li>
          <li>Autonomous Task Management</li>
          <li>Quantum Security</li>
        </ul>
      </Modal>
    </section>
  );
};

export default Hero;
