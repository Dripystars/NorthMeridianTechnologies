import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { DollarSign, BookOpen, ScrollText } from 'lucide-react';

const NarrativeSection: React.FC = () => {
  return (
    <SectionWrapper id="narrative" className="bg-meridian-dark relative py-32">
      
      {/* Background Textures */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center justify-center p-3 mb-8 bg-meridian-red/10 rounded-full">
            <DollarSign className="text-meridian-red" size={32} />
        </div>

        <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase mb-8">
            Narrative via <br />
            <span className="text-meridian-red">Raw Economic Power</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
            We don't need Artificial Intelligence to write your story. <br />
            <span className="font-bold text-white">We use the Ledger.</span>
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 border border-white/10 p-8 hover:border-meridian-red/50 transition-colors">
                <BookOpen className="text-meridian-red mb-4" size={24} />
                <h3 className="font-display font-bold text-white text-xl mb-3">No Scripts</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    There are no quest givers waiting for you. The "quest" creates itself when your supplier gets arrested and your bank loan is due in 24 hours. The drama is systemic, not scripted.
                </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 hover:border-meridian-red/50 transition-colors">
                <ScrollText className="text-meridian-red mb-4" size={24} />
                <h3 className="font-display font-bold text-white text-xl mb-3">Capital is Truth</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    In North Meridian titles, money isn't just a score—it's your agency. Your ability to affect the world is directly tied to your economic leverage. You don't speech-check your way out; you buy your way out.
                </p>
            </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/5">
             <p className="font-mono text-xs text-gray-500 tracking-[0.3em] uppercase">
                Dynamic Story Generation Engine &bull; Version 2.4 &bull; Human Emotion Protocol
             </p>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default NarrativeSection;