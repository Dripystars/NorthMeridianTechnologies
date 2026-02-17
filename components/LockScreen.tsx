import React, { useState } from 'react';
import { Lock, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassword = 'GunRunnerv2.2';
    
    // Case sensitive check
    if (password.trim() === validPassword) {
      setSuccess(true);
      setTimeout(() => {
        onUnlock();
      }, 800); // Short delay to show success state
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-meridian-dark relative overflow-hidden z-50">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80" />
      
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Header */}
        <div className="text-center mb-10">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {success ? (
                    <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-6" />
                ) : (
                    <Lock className="w-16 h-16 text-meridian-red mx-auto mb-6 opacity-80" />
                )}
            </motion.div>
            
            <h1 className="font-display font-bold text-3xl text-white tracking-[0.2em] mb-2">
                {success ? "ACCESS GRANTED" : "RESTRICTED ACCESS"}
            </h1>
            <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                North Meridian Gateway v4.0
            </p>
        </div>

        {/* Input Form */}
        {!success && (
            <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="relative"
            >
                <div className="relative group">
                    <div className={`absolute -inset-0.5 rounded-sm blur opacity-30 transition duration-200 ${error ? 'bg-red-600' : 'bg-meridian-red group-hover:opacity-70'}`} />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(false);
                        }}
                        placeholder="ENTER PASSCODE"
                        className={`relative w-full bg-black border-2 ${error ? 'border-red-600 text-red-500 placeholder-red-900' : 'border-gray-800 text-white focus:border-meridian-red'} px-6 py-4 font-mono text-center text-lg tracking-[0.3em] outline-none transition-all placeholder:text-gray-800 rounded-sm`}
                        autoFocus
                    />
                </div>
                
                <button 
                    type="submit"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-meridian-red transition-colors"
                >
                    <ArrowRight size={24} />
                </button>
            </motion.form>
        )}

        {/* Status Messages */}
        <div className="h-12 mt-6 flex items-center justify-center font-mono text-xs tracking-widest">
            {error && (
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-500"
                >
                    <AlertCircle size={14} />
                    <span>INVALID_CREDENTIALS</span>
                </motion.div>
            )}
            {success && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 flex items-center gap-2"
                >
                    <span>DECRYPTING SESSION...</span>
                </motion.div>
            )}
        </div>
      </div>

       {/* Footer ID */}
       <div className="absolute bottom-8 w-full text-center">
           <span className="font-mono text-[10px] text-gray-800 tracking-[0.5em]">
                TERMINAL_ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}
           </span>
       </div>
    </div>
  );
};

export default LockScreen;