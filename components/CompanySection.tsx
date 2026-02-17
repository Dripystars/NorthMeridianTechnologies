import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { MapPin, Shield, Users, UserCheck, Cpu } from 'lucide-react';

const CompanySection: React.FC = () => {
  return (
    <SectionWrapper id="company" className="bg-meridian-dark relative py-32 border-t border-white/10">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-meridian-red/5 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header & Location */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
            <div>
                <div className="flex items-center gap-2 text-meridian-red font-mono text-xs tracking-widest mb-2">
                    <MapPin size={14} />
                    <span>HEADQUARTERS EST. 2024</span>
                </div>
                <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-none">
                    North <span className="text-gray-700">Meridian</span>
                </h2>
            </div>
            <div className="text-right mt-6 md:mt-0">
                <p className="font-display font-bold text-2xl text-white uppercase">Oakland, CA</p>
                <p className="font-mono text-xs text-gray-500 tracking-widest">SECTOR 7 // INDUSTRIAL DISTRICT</p>
            </div>
        </div>

        {/* The Origin Story */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-5">
                <h3 className="font-display text-3xl text-white mb-6 uppercase border-l-4 border-meridian-red pl-6">
                    Forged by <br/> Sheer Will
                </h3>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                    <strong className="text-white">North Meridian Technologies</strong> didn't start in a boardroom. It started with a lone engineer staring at a screen, exhausted by an industry that had lost its way.
                </p>
                <p>
                    We were tired of "Triple-A" giants treating players like metrics, wallets, and engagement tools. We were sick of games that felt like second jobs.
                </p>
                <p>
                    The mission was simple but brutal: build a simulation engine that respects the player's intelligence. No hand-holding. No predatory loops. Just raw, unadulterated systems depth. It took years of obsession and isolation, but we built it.
                </p>
            </div>
        </div>

        {/* IP & Licensing Grid */}
        <div className="bg-gray-900/50 border border-white/5 p-8 md:p-12">
            <div className="mb-10 text-center">
                 <h3 className="font-display font-bold text-2xl text-white uppercase tracking-widest mb-2">
                    Intellectual Property & Rights
                 </h3>
                 <div className="h-1 w-24 bg-meridian-red mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                
                {/* Card 1: The Engine */}
                <div className="relative p-6 border border-white/5 bg-black hover:border-meridian-red/50 transition-colors group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-meridian-red transition-colors"></div>
                    <Cpu className="text-gray-500 group-hover:text-white mb-4 transition-colors" size={32} />
                    <h4 className="font-display font-bold text-white text-lg mb-3">FlekRn Engine</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        The core architecture is proprietary. The FlekRn Engine is the heart of our capability and is strictly <span className="text-white">IP Protected</span>. Redistribution or reverse engineering of the core binary is prohibited.
                    </p>
                </div>

                {/* Card 2: Multiplayer */}
                <div className="relative p-6 border border-white/5 bg-black hover:border-meridian-red/50 transition-colors group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-meridian-red transition-colors"></div>
                    <Users className="text-gray-500 group-hover:text-white mb-4 transition-colors" size={32} />
                    <h4 className="font-display font-bold text-white text-lg mb-3">Multiplayer</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        To ensure integrity and fair play in our competitive environment, multiplayer access requires adherence to a standard industry license. This allows us to enforce anti-cheat and maintain a balanced economy.
                    </p>
                </div>

                {/* Card 3: Singleplayer */}
                <div className="relative p-6 border border-white/5 bg-black hover:border-meridian-red/50 transition-colors group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-green-500 transition-colors"></div>
                    <div className="flex justify-between items-start">
                        <UserCheck className="text-gray-500 group-hover:text-green-500 mb-4 transition-colors" size={32} />
                        <Shield className="text-green-900 group-hover:text-green-500 transition-colors" size={16} />
                    </div>
                    <h4 className="font-display font-bold text-white text-lg mb-3">Singleplayer</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        We believe in ownership. For our single-player experience, <span className="text-white font-bold">once you own the game, that copy is yours</span>. No always-online requirements. No revocable access. It belongs to you.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default CompanySection;