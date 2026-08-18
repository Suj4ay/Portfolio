import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Cpu } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function TerminalWindow() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile.json');
  const [copied, setCopied] = useState(false);

  const isLight = theme === 'light';

  const profileJsonRaw = `{
  "developer": "${personalData.name}",
  "university": "${personalData.university}",
  "degree": "${personalData.degree}",
  "academic": {
    "cgpa": ${personalData.academicHighlights.cgpa},
    "class10": "${personalData.academicHighlights.class10}",
    "class12": "${personalData.academicHighlights.class12}"
  },
  "focus": [
    "Full-Stack Software Development",
    "Data Structures & Algorithms",
    "AI/ML Decision Intelligence",
    "IoT Systems"
  ],
  "status": "Ready for Engineering Challenges"
}`;

  const buildxCodeRaw = `// Flagship Hackathon Victory — BUILDX (NSUT Delhi)
class RosterOptimizer {
  constructor(salaryCap = 120.0) {
    this.salaryCap = salaryCap;
    this.players = [];
  }

  calculateValueIndex(player) {
    const perfScore = player.runs * 0.4 + player.wickets * 25.0;
    return perfScore / Math.max(player.contractCost, 1.0);
  }

  solveSquadOptimization() {
    // Dynamic programming budget-constrained optimizer
    return this.players.sort((a, b) => 
      this.calculateValueIndex(b) - this.calculateValueIndex(a)
    );
  }
}`;

  const currentRawSnippet = activeTab === 'profile.json' ? profileJsonRaw : buildxCodeRaw;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentRawSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full rounded-2xl overflow-hidden font-mono text-xs sm:text-sm border transition-all duration-300 ${
      isLight
        ? 'bg-white border-[#e5dccf] shadow-xl shadow-amber-950/5'
        : 'bg-[#0a0f1d] border-cyan-500/30 shadow-2xl shadow-cyan-950/40'
    }`}>
      {/* Terminal Top Window Bar */}
      <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors ${
        isLight ? 'bg-[#f3ede2] border-[#e5dccf]' : 'bg-[#0e1526] border-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className={`ml-2 text-xs font-sans font-medium flex items-center gap-1.5 ${
            isLight ? 'text-slate-700' : 'text-slate-400'
          }`}>
            <Terminal className={`w-3.5 h-3.5 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />
            sujay@dev-box:~
          </span>
        </div>

        {/* Code Tabs */}
        <div className={`flex items-center gap-1 p-1 rounded-lg border ${
          isLight ? 'bg-white border-[#e5dccf]' : 'bg-slate-900/80 border-slate-800'
        }`}>
          <button
            onClick={() => setActiveTab('profile.json')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-sans font-medium transition-all ${
              activeTab === 'profile.json'
                ? isLight
                  ? 'bg-sky-100 text-sky-800 border border-sky-300 font-bold'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            profile.json
          </button>
          <button
            onClick={() => setActiveTab('RosterOptimizer.js')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-sans font-medium transition-all ${
              activeTab === 'RosterOptimizer.js'
                ? isLight
                  ? 'bg-sky-100 text-sky-800 border border-sky-300 font-bold'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            RosterOptimizer.js
          </button>
        </div>

        {/* Copy Snippet Button */}
        <button
          onClick={handleCopy}
          className={`p-1.5 rounded-lg border transition-colors ${
            isLight
              ? 'bg-white border-[#e5dccf] text-slate-700 hover:text-sky-700 hover:bg-slate-50'
              : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-cyan-300 hover:bg-slate-800'
          }`}
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Content Body with High-Contrast Syntax Highlighting */}
      <div className={`p-4 sm:p-5 overflow-x-auto text-left leading-relaxed max-h-[320px] ${
        isLight ? 'bg-white text-slate-900' : 'bg-[#0a0f1d] text-slate-100'
      }`}>
        <div className={`flex items-center gap-2 mb-3 font-bold text-xs ${
          isLight ? 'text-sky-700' : 'text-cyan-400'
        }`}>
          <span className={isLight ? 'text-emerald-700' : 'text-emerald-400'}>$</span> cat {activeTab}
          <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-amber-400'} animate-pulse`} />
        </div>

        <pre className={`font-mono text-xs sm:text-sm tracking-wide whitespace-pre-wrap ${
          isLight ? 'text-slate-900 font-medium' : 'text-slate-200'
        }`}>
          {activeTab === 'profile.json' ? (
            <>
              {`{\n`}
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"developer"</span>: <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"{personalData.name}"</span>,\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"university"</span>: <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"{personalData.university}"</span>,\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"degree"</span>: <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"{personalData.degree}"</span>,\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"academic"</span>: {`{\n`}
              {`    `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"cgpa"</span>: <span className={isLight ? 'text-purple-700 font-bold' : 'text-emerald-400'}>{personalData.academicHighlights.cgpa}</span>,\n
              {`    `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"class10"</span>: <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"{personalData.academicHighlights.class10}"</span>,\n
              {`    `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"class12"</span>: <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"{personalData.academicHighlights.class12}"</span>\n
              {`  }`},\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"focus"</span>: [\n
              {`    `}
              <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"Full-Stack Software Development"</span>,\n
              {`    `}
              <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"Data Structures & Algorithms"</span>,\n
              {`    `}
              <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"AI/ML Decision Intelligence"</span>,\n
              {`    `}
              <span className={isLight ? 'text-amber-800' : 'text-amber-300'}>"IoT Systems"</span>\n
              {`  }`},\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-semibold' : 'text-cyan-400'}>"status"</span>: <span className={isLight ? 'text-emerald-700 font-bold' : 'text-emerald-300'}>"Ready for Engineering Challenges"</span>\n
              {`}`}
            </>
          ) : (
            <>
              <span className={isLight ? 'text-slate-500 italic' : 'text-slate-500 italic'}>
                // Flagship Hackathon Victory — BUILDX (NSUT Delhi)
              </span>
              {`\n`}
              <span className={isLight ? 'text-purple-700 font-bold' : 'text-purple-400'}>class</span>{' '}
              <span className={isLight ? 'text-sky-700 font-bold' : 'text-cyan-300'}>RosterOptimizer</span> {`{\n`}
              {`  `}
              <span className={isLight ? 'text-purple-700 font-bold' : 'text-purple-400'}>constructor</span>(salaryCap = <span className={isLight ? 'text-emerald-700 font-bold' : 'text-amber-400'}>120.0</span>) {`{\n`}
              {`    `}
              <span className={isLight ? 'text-rose-700' : 'text-rose-300'}>this</span>.salaryCap = salaryCap;\n
              {`    `}
              <span className={isLight ? 'text-rose-700' : 'text-rose-300'}>this</span>.players = [];\n
              {`  }`}\n\n
              {`  `}
              <span className={isLight ? 'text-sky-700 font-bold' : 'text-cyan-400'}>calculateValueIndex</span>(player) {`{\n`}
              {`    `}
              <span className={isLight ? 'text-purple-700 font-bold' : 'text-purple-400'}>const</span> perfScore = player.runs * <span className={isLight ? 'text-emerald-700 font-bold' : 'text-amber-400'}>0.4</span> + player.wickets * <span className={isLight ? 'text-emerald-700 font-bold' : 'text-amber-400'}>25.0</span>;\n
              {`    `}
              <span className={isLight ? 'text-purple-700 font-bold' : 'text-purple-400'}>return</span> perfScore / Math.max(player.contractCost, <span className={isLight ? 'text-emerald-700 font-bold' : 'text-amber-400'}>1.0</span>);\n
              {`  }`}\n
              {`}`}
            </>
          )}
        </pre>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className={`px-4 py-2 border-t flex items-center justify-between text-[11px] transition-colors ${
        isLight ? 'bg-[#f3ede2] border-[#e5dccf] text-slate-700' : 'bg-[#070b14] border-slate-800 text-slate-400'
      }`}>
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Vite + React 19 Active
        </span>
        <span className="flex items-center gap-2 font-mono font-medium">
          <Cpu className={`w-3.5 h-3.5 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} /> UTF-8 | 1st Place BUILDX
        </span>
      </div>
    </div>
  );
}
