import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { TrendingUp, Lock, Anchor, Shield } from 'lucide-react';

const EconomySection: React.FC = () => {
  return (
    <SectionWrapper id="economy" className="bg-black relative py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div>
          <div className="flex items-center gap-2 text-meridian-red font-mono text-xs tracking-widest mb-4">
            <Anchor size={14} />
            <span>IMMUTABLE_MARKETS</span>
          </div>
          
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white leading-none mb-6">
            The Hardened <br/>
            <span className="text-gray-700">Economy</span>
          </h2>
          
          <p className="text-xl text-white font-bold italic mb-8">
            "The market does not react to you. You survive within it."
          </p>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              In most simulations, the economy bends to the player's will. Buy enough stock, and the price jumps. Sell, and it crashes. 
              <span className="text-white"> We rejected this.</span>
            </p>
            <p>
              The FlekRn Engine simulates a hardened, heavy-weight global economy. It is non-reactive to individual player actions, behaving like a massive, unstoppable glacier. This creates a streamlined experience where the challenge isn't manipulating the system, but predicting its ruthless momentum.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
             <div className="border-l-2 border-meridian-red pl-4">
                <div className="text-white font-display font-bold uppercase text-lg mb-1">Streamlined</div>
                <div className="text-sm text-gray-500">No micro-management. Focus on macro trends and logistics.</div>
             </div>
             <div className="border-l-2 border-meridian-red pl-4">
                <div className="text-white font-display font-bold uppercase text-lg mb-1">Dynamic</div>
                <div className="text-sm text-gray-500">External forces shift the landscape constantly, forcing adaptation.</div>
             </div>
          </div>
        </div>

        {/* Right: Abstract Visual Representation */}
        <div className="relative">
            {/* Background Shape */}
            <div className="absolute top-10 -right-10 w-full h-full bg-meridian-red/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-sm shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <span className="font-mono text-xs text-gray-400">MARKET_RESISTANCE_INDEX</span>
                    <Lock size={16} className="text-meridian-red" />
                </div>

                {/* Graph Visualization */}
                <div className="flex items-end justify-between h-64 gap-2">
                    {[40, 45, 42, 60, 65, 62, 80, 85].map((h, i) => (
                        <div key={i} className="w-full relative group">
                            <div 
                                style={{ height: `${h}%` }} 
                                className={`w-full ${i > 5 ? 'bg-meridian-red' : 'bg-gray-700'} transition-all duration-500`}
                            ></div>
                            {/* The "Player" attempt - tiny and insignificant */}
                            {i === 4 && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                                    <span className="block text-[8px] font-mono text-gray-500">YOU</span>
                                    <div className="w-1 h-1 bg-white mx-auto rounded-full"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Annotation */}
                <div className="mt-6 flex items-center gap-3 p-3 bg-black/50 border border-white/5 rounded">
                    <Shield size={20} className="text-gray-400" />
                    <p className="font-mono text-xs text-gray-400">
                        SYSTEM_STATUS: <span className="text-white">NON-REACTIVE</span>. VOLUME TOO HIGH FOR MANIPULATION.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default EconomySection;