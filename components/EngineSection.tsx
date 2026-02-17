import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Hammer, Coins, BrainCircuit, Box, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Hammer size={32} />,
    title: "Unlimited Assembly",
    description: "A revolutionary crafting system allowing for item combination without restriction. If the parts fit, it works."
  },
  {
    icon: <Coins size={32} />,
    title: "Hardened Markets",
    description: "A rigid, global economic simulation. The market moves with the weight of nations, indifferent to your individual actions."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Advanced NPC Engine",
    description: "Autonomous agents with goal-oriented action planning. They don't just stand there; they live, trade, and compete."
  },
  {
    icon: <Box size={32} />,
    title: "Detailed Crafting",
    description: "Component-level simulation for every object in the world. True depth, not just stat changes."
  }
];

const EngineSection: React.FC = () => {
  return (
    <SectionWrapper id="engine" className="bg-meridian-dark relative min-h-[80vh] flex items-center">
      
      {/* The Meridian Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 text-flek-accent font-mono text-sm tracking-widest mb-4">
                <Cpu size={16} />
                <span>CORE_SYSTEMS</span>
            </div>
            
            <h2 className="font-display font-black text-5xl md:text-7xl mb-6 text-white uppercase leading-none">
                FlekRn <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">Engine</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                The backbone of North Meridian. A next-generation simulation architecture built for complexity, depth, and total player agency.
            </p>
        </div>

        {/* Open Grid Layout */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((feature, idx) => (
            <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group relative"
            >
                <div className="flex flex-col items-center text-center p-6 rounded-lg transition-colors hover:bg-white/5">
                    <div className="mb-6 p-4 bg-black border border-white/10 rounded-full text-flek-accent group-hover:text-white group-hover:bg-flek-accent/20 group-hover:border-flek-accent transition-all duration-300">
                        {feature.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm">{feature.description}</p>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EngineSection;