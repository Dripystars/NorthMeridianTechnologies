import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Target, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-meridian-dark">
      {/* Background Ambience - Reduced opacity for cleaner look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-meridian-dark opacity-90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* THE LOGO - Updated with 'M' */}
        <motion.div 
            style={{ scale, opacity }}
            className="relative w-64 h-64 md:w-96 md:h-96 mb-12 flex items-center justify-center"
        >
            {/* Outer Rings */}
            <div className="absolute inset-0 border-[4px] border-meridian-red rounded-full opacity-80" />
            
            {/* Rotating Ring */}
            <motion.div 
                style={{ rotate }}
                className="absolute inset-8 border border-dashed border-meridian-red/30 rounded-full" 
            />

            {/* N M T Letters */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4 mb-2 font-display font-black text-6xl md:text-8xl text-white tracking-tighter">
                     <span>N</span>
                     {/* The Central M */}
                     <span className="text-meridian-red scale-110 inline-block">M</span>
                     <span>T</span>
                </div>
                <div className="h-0.5 w-32 bg-meridian-red/50" />
                <span className="mt-4 font-mono text-xs md:text-sm tracking-[0.5em] text-meridian-red uppercase">
                    North Meridian
                </span>
            </div>
            
            {/* Decorative Crosshairs - Minimal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-meridian-dark px-2 text-meridian-red"><Target size={12}/></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-meridian-dark px-2 text-meridian-red"><Target size={12}/></div>
        </motion.div>

        {/* Narrative Text */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl px-6"
        >
            <p className="font-mono text-meridian-red text-xs uppercase tracking-widest mb-6">
                <MapPin size={12} className="inline mr-1" /> HQ: Oakland, CA
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight mb-8">
                Building Worlds <br /> Without Limits
            </h1>
            <p className="text-gray-400 font-sans text-sm md:text-lg leading-relaxed max-w-lg mx-auto">
                Architects of the <span className="text-white font-bold">FlekRn Engine</span>. 
                <span className="block mt-2">Pioneering the next generation of economic simulation and emergent narrative.</span>
            </p>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-700"
        >
            <ChevronDown size={24} className="text-meridian-red" />
        </motion.div>
      </div>
      
      {/* The Meridian Line */}
      <div className="absolute bottom-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-meridian-red/50" />
    </section>
  );
};

export default Hero;