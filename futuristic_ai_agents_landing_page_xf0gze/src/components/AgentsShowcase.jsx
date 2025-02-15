import React from 'react';
import AgentCard3D from './AgentCard';

const AgentsShowcase = () => {
  const agents = [
    { id: 1, name: 'Nexus Prime', description: 'Adaptive learning and strategic decision-making.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Quantum Leap', description: 'Predictive analysis and real-time data processing.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Nova Genesis', description: 'Autonomous task management and workflow optimization.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Discover Our Elite AI Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
        {agents.map((agent) => (
          <AgentCard3D key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default AgentsShowcase;
