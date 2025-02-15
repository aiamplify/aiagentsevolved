import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import Modal from './Modal';

const AgentMesh = ({ isHovered }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 4]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color={isHovered ? "#9b51e0" : "#29d9d5"}
        attach="material"
        distort={isHovered ? 0.7 : 0.4}
        speed={isHovered ? 3 : 1.5}
        roughness={0.6}
      />
    </Icosahedron>
  );
};

const AgentCard3D = ({ agent }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-neon-blue/60 shadow-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent opacity-50" />

      <motion.div
        className="relative z-10"
        animate={isHovered ? { y: -15 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 350 }}
      >
        <div className="mb-6 h-56 w-full rounded-2xl overflow-hidden">
          <Canvas camera={{ fov: 45, position: [0, 0, 5] }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <AgentMesh isHovered={isHovered} />
          </Canvas>
        </div>

        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          {agent.name}
        </h3>

        <p className="text-gray-300 mb-8">{agent.description}</p>

        <motion.button
          className="w-full py-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-neon-blue/40 hover:border-neon-purple/70 transition-all duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          <span className="relative z-10">Engage</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500" />
        </motion.button>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-4 text-neon-blue">{agent.name} - Details</h2>
        <p className="text-gray-300 mb-6">
          {agent.name} is a cutting-edge AI agent designed for {agent.description}.
        </p>
        <p className="text-gray-300">
          Key Features:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <p className="text-gray-300">
          Contact us to learn more about integrating {agent.name} into your workflow.
        </p>
      </Modal>
    </motion.div>
  );
};

export default AgentCard3D;
