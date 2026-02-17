import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { ArrowRight, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProject: React.FC = () => {
  return (
    <SectionWrapper id="featured" className="bg-meridian-dark relative py-32 border-t border-white/5">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-900/50 border border-white/5 p-8 md:p-12 hover:border-meridian-red/30 transition-colors duration-500">
            
            {/* Image / Visual */}
            <div className="w-full md:w-1/2 relative group overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-meridian-red/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                    src="https://picsum.photos/seed/gunrunner_teaser/800/600?grayscale" 
                    alt="Gun Runner Teaser" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-left">
                <div className="flex items-center gap-2 text-meridian-red font-mono text-xs tracking-widest mb-4">
                    <Crosshair size={14} />
                    <span>CURRENTLY IN DEVELOPMENT</span>
                </div>
                
                <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none mb-6">
                    Gun Runner
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    The debut title powered by the FlekRn Engine. An unforgiving simulation of logistics, risk, and underground economics set in a hyper-realistic Bay Area.
                </p>

                <Link 
                    to="/gun-runner"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-meridian-red hover:text-white transition-all group"
                >
                    View Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProject;