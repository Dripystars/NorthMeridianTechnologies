import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Play, Map, Package, DollarSign, ShieldAlert } from 'lucide-react';

const GameSection: React.FC = () => {
  return (
    <SectionWrapper id="games" className="bg-meridian-dark relative py-32">
      
      {/* Narrative Line Continuing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-white/5 to-transparent" />

      {/* Subtle Background Map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img 
            src="https://picsum.photos/seed/oaklandmap/1920/1080?grayscale" 
            alt="Map Data" 
            className="w-full h-full object-cover mix-blend-overlay" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Clean Header */}
        <div className="text-center mb-24 relative">
            <span className="inline-block mb-4 text-meridian-red text-xs font-bold uppercase tracking-[0.3em]">
                Simulation_V1.0
            </span>
            <h2 className="font-display font-black text-6xl md:text-9xl uppercase text-white leading-none tracking-tight">
                GUN <span className="text-outline-red text">RUNNER</span>
            </h2>
            <div className="mt-6 font-mono text-gray-500 text-sm tracking-widest">
                OAKLAND, CA &bull; THE BAY AREA
            </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
            
            {/* Visuals - Cleaned up (No HUD overlays) */}
            <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-meridian-red/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-video bg-black shadow-2xl overflow-hidden rounded-sm border border-white/5">
                    <img 
                        src="https://picsum.photos/seed/warehouse/1280/720" 
                        alt="Gun Runner Environment" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    
                    {/* Minimal Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button className="w-16 h-16 bg-meridian-red text-white flex items-center justify-center hover:scale-110 transition-transform">
                            <Play fill="white" size={24} />
                        </button>
                    </div>
                </div>
                <p className="mt-4 text-center font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    Pre-Alpha Environmental Footage
                </p>
            </div>

            {/* Context - More Open Typography */}
            <div className="flex flex-col space-y-10 order-1 lg:order-2">
                <div>
                    <h3 className="font-display text-3xl text-white mb-4">Underground or Legitimate?</h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        Navigate the morally gray economy of firearms distribution in a living, breathing Oakland. 
                        Every deal matters. Every contact counts.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <Package className="text-meridian-red mt-1" size={24} />
                        <div>
                            <h4 className="font-display font-bold text-white uppercase text-sm mb-1">Logistics</h4>
                            <p className="text-sm text-gray-500">Import shipments and manage inventory through the Port.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <DollarSign className="text-meridian-red mt-1" size={24} />
                        <div>
                            <h4 className="font-display font-bold text-white uppercase text-sm mb-1">Economy</h4>
                            <p className="text-sm text-gray-500">Prices fluctuate based on street tension, police presence, and supply.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <ShieldAlert className="text-meridian-red mt-1" size={24} />
                        <div>
                            <h4 className="font-display font-bold text-white uppercase text-sm mb-1">Risk</h4>
                            <p className="text-sm text-gray-500">Pay your taxes and stay clean, or run dark and face the consequences.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button className="px-8 py-4 border border-meridian-red text-meridian-red font-display font-bold uppercase hover:bg-meridian-red hover:text-black transition-all flex items-center gap-2">
                        Enter The Market <Map size={18} />
                    </button>
                </div>
            </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default GameSection;