import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Layers, Database, Wrench, Cpu, Check, Filter } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

import SkillsGraphic from './illustrations/SkillsGraphic';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming': return Terminal;
      case 'frontend': return Layers;
      case 'backend': return Code;
      case 'database': return Database;
      case 'tools': return Wrench;
      case 'ai-ml-iot': return Cpu;
      default: return Code;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#070a12]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized technical competencies acquired through coursework, software projects, and hackathons.
          </p>
        </div>

        {/* Vector Skill Radar Graphic */}
        <div className="max-w-xl mx-auto mb-10">
          <SkillsGraphic />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 text-slate-200 text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 group/tag"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/tag:scale-125 transition-transform" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/40 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                    <span>{cat.skills.length} Technologies</span>
                    <span className="text-cyan-400/70">Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
