import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { FileSpreadsheet, Zap, Database, CheckCircle2 } from 'lucide-react';

const ModdingSection: React.FC = () => {
  return (
    <SectionWrapper id="modding" className="bg-meridian-dark relative py-32 border-t border-meridian-red/20">
      
      {/* Background Grid - Excel style hints */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '100px 40px'
      }} />

      {/* Narrative Line (Ending) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-meridian-red/50 to-transparent" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 text-meridian-red font-mono text-xs tracking-widest mb-4">
                <Database size={14} />
                <span>DATA_DRIVEN_ARCHITECTURE</span>
            </div>
            
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white leading-none mb-6">
                Modding <br/>
                <span className="text-outline-white text-transparent">Simplified</span>
            </h2>
            
            <p className="text-xl text-white font-bold italic mb-8 border-l-4 border-meridian-red pl-4">
                "Your experience, your rules."
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Forget complex Dev Kits and compiling code. The FlekRn Engine is designed to read raw data directly. 
                <span className="text-white font-bold"> If you can use Excel, you can mod this game.</span> 
                Define maps, item stats, and NPC logic entirely through CSV files.
            </p>

            <div className="grid gap-6">
                <FeatureRow 
                    icon={<FileSpreadsheet />} 
                    title="Spreadsheet Native" 
                    desc="Edit map data and logic using Google Sheets, Excel, or Notepad." 
                />
                <FeatureRow 
                    icon={<CheckCircle2 />} 
                    title="Zero Coding Required" 
                    desc="No C# or Lua knowledge needed. Just populate the rows and play." 
                />
                <FeatureRow 
                    icon={<Zap />} 
                    title="Instant Injection" 
                    desc="The engine parses CSVs at runtime to spawn objects and trigger events." 
                />
            </div>
        </div>

        {/* Right Visuals - The "Spreadsheet" Look */}
        <div className="relative order-1 lg:order-2">
            {/* Main Sheet Window */}
            <div className="bg-gray-900 border border-gray-700 rounded-sm overflow-hidden shadow-2xl relative">
                {/* Sheet Toolbar */}
                <div className="bg-gray-800 p-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-700 p-1 rounded"><FileSpreadsheet size={12} className="text-white"/></div>
                        <span className="text-[10px] font-mono text-gray-300">oakland_map_data.csv</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"/>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"/>
                    </div>
                </div>
                
                {/* Spreadsheet Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-800/50 font-mono text-[10px] text-gray-400">
                                <th className="p-2 border-r border-gray-700 w-8">#</th>
                                <th className="p-2 border-r border-gray-700">ENTITY_ID</th>
                                <th className="p-2 border-r border-gray-700">TYPE</th>
                                <th className="p-2 border-r border-gray-700">POS_X</th>
                                <th className="p-2 border-r border-gray-700">POS_Y</th>
                                <th className="p-2">BEHAVIOR</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-xs text-gray-300">
                            {/* Row 1 */}
                            <tr className="border-b border-gray-700/50 bg-meridian-red/10">
                                <td className="p-2 border-r border-gray-700 text-gray-500">1</td>
                                <td className="p-2 border-r border-gray-700">NPC_001</td>
                                <td className="p-2 border-r border-gray-700 text-flek-accent">DEALER_ARMS</td>
                                <td className="p-2 border-r border-gray-700">142.5</td>
                                <td className="p-2 border-r border-gray-700">55.0</td>
                                <td className="p-2">TRADE_AGGR</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="border-b border-gray-700/50">
                                <td className="p-2 border-r border-gray-700 text-gray-500">2</td>
                                <td className="p-2 border-r border-gray-700">LOOT_552</td>
                                <td className="p-2 border-r border-gray-700 text-flek-accent">RIFLE_AK47</td>
                                <td className="p-2 border-r border-gray-700">145.0</td>
                                <td className="p-2 border-r border-gray-700">55.0</td>
                                <td className="p-2">SPAWN_ON_TIMER</td>
                            </tr>
                             {/* Row 3 */}
                             <tr className="border-b border-gray-700/50">
                                <td className="p-2 border-r border-gray-700 text-gray-500">3</td>
                                <td className="p-2 border-r border-gray-700">EVT_99</td>
                                <td className="p-2 border-r border-gray-700 text-flek-accent">POLICE_RAID</td>
                                <td className="p-2 border-r border-gray-700">0.0</td>
                                <td className="p-2 border-r border-gray-700">0.0</td>
                                <td className="p-2">COND_HEAT_HIGH</td>
                            </tr>
                             {/* Cursor Row */}
                             <tr className="bg-white/5">
                                <td className="p-2 border-r border-gray-700 text-gray-500">4</td>
                                <td className="p-2 border-r border-gray-700 border border-meridian-red">|</td>
                                <td className="p-2 border-r border-gray-700"></td>
                                <td className="p-2 border-r border-gray-700"></td>
                                <td className="p-2 border-r border-gray-700"></td>
                                <td className="p-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Decorative Connection to Engine */}
            <div className="absolute -bottom-10 right-10 flex flex-col items-end">
                <div className="h-8 w-[1px] bg-meridian-red"></div>
                <div className="bg-meridian-red text-black text-xs font-bold px-3 py-1 font-display uppercase">
                    Direct_Ingest
                </div>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-white/5 border border-white/10 text-meridian-red rounded-sm">
            {icon}
        </div>
        <div>
            <h4 className="font-display font-bold text-white uppercase text-sm">{title}</h4>
            <p className="text-sm text-gray-500 leading-snug">{desc}</p>
        </div>
    </div>
);

export default ModdingSection;