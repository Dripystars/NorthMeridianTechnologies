import React, { useEffect } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Play, Map, Package, DollarSign, ShieldAlert, Target, Users, Hammer, FileSpreadsheet, Zap, Database, BookOpen, ScrollText } from 'lucide-react';

const GunRunnerPage: React.FC = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-meridian-dark min-h-screen pt-20">
      
      {/* 1. HERO */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-meridian-red/20">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/oakland_port/1920/1080?grayscale')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-meridian-dark via-meridian-dark/50 to-transparent" />
        
        <div className="relative z-10 text-center px-4">
            <div className="inline-flex items-center gap-2 border border-meridian-red px-4 py-1 text-meridian-red font-mono text-xs tracking-widest mb-6 bg-black/50 backdrop-blur-md">
                <Target size={12} /> PROJECT: GUN_RUNNER
            </div>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase text-white leading-none tracking-tight mb-4">
                GUN <span className="text-outline-red text stroke-2">RUNNER</span>
            </h1>
            <p className="font-mono text-gray-400 text-sm md:text-base tracking-[0.5em] uppercase max-w-2xl mx-auto">
                Tactical Logistics Simulator
            </p>
        </div>
      </div>

      {/* 2. STORY SECTION */}
      <SectionWrapper className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase mb-8">
                The Underground of <span className="text-meridian-red">Oakland</span>
            </h2>
            <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed space-y-6">
                <p>
                    The Underground of Oakland is a scary place. It is a city of sharp contrasts, comprised of all sorts of characters—from the filthy rich in their hill fortresses to the poorest unhoused in the shadow of the port.
                </p>
                <p>
                    It is a landscape defined by the clash of dystopian surveillance laws and the backroom deals of relaxed politicians. In this chaos, the line between legal logistics and criminal enterprise blurs.
                </p>
                <p className="text-white font-bold text-2xl pt-4">
                    The landscape is yours to shape.
                </p>
                <p className="text-sm font-mono text-gray-600 tracking-widest uppercase pt-8">
                    Will you bring order through supply, or chaos through scarcity?
                </p>
            </div>
        </div>
      </SectionWrapper>

      {/* 2.5 NARRATIVE MECHANICS (Moved from Main Page) */}
      <SectionWrapper className="bg-black relative py-32 border-b border-white/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            
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
                        In Gun Runner, money isn't just a score—it's your agency. Your ability to affect the world is directly tied to your economic leverage. You don't speech-check your way out; you buy your way out.
                    </p>
                </div>
            </div>
        </div>
      </SectionWrapper>

      {/* 3. GAMEPLAY IMAGES */}
      <section className="py-24 bg-meridian-dark relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] bg-white/20 flex-grow"></div>
                <h3 className="font-mono text-meridian-red text-sm tracking-widest uppercase">Visual Surveillance</h3>
                <div className="h-[1px] bg-white/20 flex-grow"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
                 {/* Image 1 */}
                 <div className="group relative aspect-video overflow-hidden border border-white/10">
                    <img src="https://picsum.photos/seed/gr_gameplay1/800/450?grayscale" alt="Gameplay 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-[10px] font-mono text-meridian-red uppercase">Inventory Management</div>
                 </div>
                 {/* Image 2 */}
                 <div className="group relative aspect-video overflow-hidden border border-white/10 md:col-span-2">
                    <img src="https://picsum.photos/seed/gr_gameplay2/1200/675?grayscale" alt="Gameplay 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-[10px] font-mono text-meridian-red uppercase">Tactical Map View</div>
                 </div>
                 {/* Image 3 */}
                 <div className="group relative aspect-video overflow-hidden border border-white/10 md:col-span-2">
                    <img src="https://picsum.photos/seed/gr_gameplay3/1200/675?grayscale" alt="Gameplay 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-[10px] font-mono text-meridian-red uppercase">Negotiation Interface</div>
                 </div>
                 {/* Image 4 */}
                 <div className="group relative aspect-video overflow-hidden border border-white/10">
                    <img src="https://picsum.photos/seed/gr_gameplay4/800/450?grayscale" alt="Gameplay 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-[10px] font-mono text-meridian-red uppercase">Workshop Assembly</div>
                 </div>
            </div>
        </div>
      </section>

      {/* 4. SYSTEMS BREAKDOWN */}
      <SectionWrapper className="py-24 bg-meridian-dark">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl text-white uppercase mb-16 text-center">System <span className="text-gray-600">Architecture</span></h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Economy */}
                <div className="bg-white/5 border border-white/10 p-8 hover:border-meridian-red transition-colors group">
                    <DollarSign className="text-gray-500 group-hover:text-meridian-red mb-6" size={40} />
                    <h3 className="font-display font-bold text-white text-xl uppercase mb-4">Hardened Economy</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Prices aren't static. A shipment intercepted by police in West Oakland drives up rifle prices in the East. Inflation eats profits. Tariffs bleed margins.
                    </p>
                    <ul className="text-xs text-gray-500 font-mono space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>DYNAMIC_PRICING</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>SUPPLY_CHAIN_SHOCKS</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>LAUNDERING_MECHANICS</li>
                    </ul>
                </div>

                {/* NPC Interactions */}
                <div className="bg-white/5 border border-white/10 p-8 hover:border-meridian-red transition-colors group">
                    <Users className="text-gray-500 group-hover:text-meridian-red mb-6" size={40} />
                    <h3 className="font-display font-bold text-white text-xl uppercase mb-4">NPC Agency</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Every character has a routine, a bank account, and a memory. Betray a contact, and they won't just forget. They will undercut your prices or hire muscle.
                    </p>
                    <ul className="text-xs text-gray-500 font-mono space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>AUTONOMOUS_AGENTS</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>LONG_TERM_MEMORY</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>FACTION_ALLEGIANCE</li>
                    </ul>
                </div>

                {/* Crafting */}
                <div className="bg-white/5 border border-white/10 p-8 hover:border-meridian-red transition-colors group">
                    <Hammer className="text-gray-500 group-hover:text-meridian-red mb-6" size={40} />
                    <h3 className="font-display font-bold text-white text-xl uppercase mb-4">Modular Crafting</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        No arbitrary levels. If you have the receiver, the barrel, and the pin, you can build it. Scavenge parts, 3D print mods, or import military hardware.
                    </p>
                    <ul className="text-xs text-gray-500 font-mono space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>PHYSICS_BASED_ASSEMBLY</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>3D_PRINTING_TECH</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-meridian-red"></div>PART_COMPATIBILITY_CHECK</li>
                    </ul>
                </div>
            </div>
        </div>
      </SectionWrapper>

      {/* 5. MODDING BREAKDOWN */}
      <section className="py-24 bg-gray-900 border-t border-white/10 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div>
                    <div className="flex items-center gap-2 text-meridian-red font-mono text-xs tracking-widest mb-4">
                        <Database size={14} />
                        <span>OPEN_ARCHITECTURE</span>
                    </div>
                    
                    <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-6">
                        Mod Your <br/>
                        <span className="text-gray-500">Empire</span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Gun Runner is built on the FlekRn Engine's "Spreadsheet Native" philosophy. You don't need to be a coder to change the rules of the city.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <FileSpreadsheet className="text-green-500 shrink-0" size={24} />
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm">Data-Driven Design</h4>
                                <p className="text-sm text-gray-500">Edit item stats, spawn rates, and economic variables directly in CSV files.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Zap className="text-yellow-500 shrink-0" size={24} />
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm">Hot-Reloading</h4>
                                <p className="text-sm text-gray-500">Tweak values while the game is running to see instant results.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Representation of Modding */}
                <div className="bg-black border border-gray-700 p-1 rounded-sm shadow-2xl font-mono text-xs">
                    <div className="bg-gray-800 text-gray-400 px-3 py-2 flex justify-between">
                        <span>items_rifles.csv</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="p-4 text-green-400 overflow-x-auto">
                        <table className="w-full text-left opacity-80">
                            <thead>
                                <tr className="text-gray-500 border-b border-gray-700">
                                    <th className="pb-2">ID</th>
                                    <th className="pb-2">NAME</th>
                                    <th className="pb-2">BASE_PRICE</th>
                                    <th className="pb-2">ILLEGAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800">
                                    <td className="py-2">WPN_001</td>
                                    <td>Pistol_9mm</td>
                                    <td>$450</td>
                                    <td>FALSE</td>
                                </tr>
                                <tr className="border-b border-gray-800 bg-white/5">
                                    <td className="py-2">WPN_002</td>
                                    <td>Rifle_AR</td>
                                    <td>$1200</td>
                                    <td>TRUE</td>
                                </tr>
                                <tr className="border-b border-gray-800">
                                    <td className="py-2">WPN_003</td>
                                    <td>SMG_Tac</td>
                                    <td>$850</td>
                                    <td>TRUE</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-4 text-gray-500 animate-pulse">_Cursor_Active</div>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default GunRunnerPage;