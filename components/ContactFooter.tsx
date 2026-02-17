import React from 'react';
import { ArrowUp } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t-4 border-meridian-red pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        
        {/* Main Content - Centered */}
        <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-display font-black text-3xl text-white mb-6">
                NORTH <span className="text-meridian-red">MERIDIAN</span>
            </h2>
            <p className="text-gray-500 max-w-lg leading-relaxed">
                Pushing the boundaries of what's possible in digital simulation. 
                We build the tools that build worlds.
            </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <p>&copy; {new Date().getFullYear()} NORTH MERIDIAN TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-meridian-red">PRIVACY</a>
                <a href="#" className="hover:text-meridian-red">TERMS</a>
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 text-meridian-red hover:text-white"
                >
                    TOP <ArrowUp size={14} />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;