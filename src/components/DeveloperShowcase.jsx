import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Terminal, Sparkles, Award, GraduationCap, Cpu, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import TerminalWindow from './TerminalWindow';
import { useTheme } from '../context/ThemeContext';

export default function DeveloperShowcase() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeView, setActiveView] = useState('profile'); // 'profile' | 'terminal'

  return (
    <div className="relative w-full">
      {/* View Switcher Controls */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs font-mono backdrop-blur-md transition-all ${
          isLight
            ? 'bg-white/90 border-[#e5dccf] shadow-sm'
            : 'bg-slate-900/80 border-slate-800'
        }`}>
          <button
            onClick={() => setActiveView('profile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeView === 'profile'
                ? isLight
                  ? 'bg-sky-600 text-white font-bold shadow-md'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Developer Profile</span>
          </button>
          <button
            onClick={() => setActiveView('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeView === 'terminal'
                ? isLight
                  ? 'bg-sky-600 text-white font-bold shadow-md'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal Preview</span>
          </button>
        </div>

        {/* Live Status Pill */}
        <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium ${
          isLight
            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
            : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
        }`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for Roles</span>
        </div>
      </div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {activeView === 'profile' ? (
          <motion.div
            key="profile-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
              isLight
                ? 'bg-white border-[#e5dccf] shadow-xl shadow-amber-950/5'
                : 'bg-[#0a0f1d] border-cyan-500/30 shadow-2xl shadow-cyan-950/40'
            }`}
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center gap-6 text-left relative z-10">
              {/* Profile Image Container with Animated Glowing Gradient Border */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/90 text-cyan-300 text-[10px] font-mono font-bold border border-cyan-500/30">
                    Sujay Mishra
                  </span>
                </div>
              </div>

              {/* Developer Details & Metrics */}
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className={`text-xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                    {personalData.name}
                  </h3>
                  <p className={`text-xs font-mono font-medium ${isLight ? 'text-sky-700' : 'text-cyan-400'}`}>
                    Computer Science Engineer & Developer
                  </p>
                </div>

                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Specializing in Full-Stack Web Development, Data Structures & Algorithms, and AI-Driven Software Systems.
                </p>

                {/* Quick Highlights Pills */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className={`p-2 rounded-xl border text-[11px] font-mono flex items-center gap-2 ${
                    isLight ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  }`}>
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate font-semibold">1st Place BUILDX</span>
                  </div>

                  <div className={`p-2 rounded-xl border text-[11px] font-mono flex items-center gap-2 ${
                    isLight ? 'bg-sky-50 border-sky-200 text-sky-900' : 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                  }`}>
                    <GraduationCap className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span className="truncate font-semibold">CGPA: 8.04</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                    isLight ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    C++ / DSA
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                    isLight ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    React + Node
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                    isLight ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    Python / AI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="terminal-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TerminalWindow />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
