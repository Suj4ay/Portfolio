import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, GitBranch, Zap, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { dsaTopics, dsaAlgorithms } from '../data/portfolioData';

import DsaGraphic from './illustrations/DsaGraphic';

export default function DsaSection() {
  const [selectedAlgo, setSelectedAlgo] = useState(null);

  return (
    <section id="dsa" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>ALGORITHMIC PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Data Structures & Algorithms
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Focused on computational thinking, algorithmic efficiency, and theoretical computer science.
          </p>
        </div>

        {/* Vector Algorithm Flowchart & Complexity Graphic */}
        <div className="max-w-xl mx-auto mb-10">
          <DsaGraphic />
        </div>

        {/* Topics Grid */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-slate-200 text-left mb-6 flex items-center gap-2 font-mono">
            <GitBranch className="w-4 h-4 text-purple-400" /> Core Topic Domains
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {dsaTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-card p-4 rounded-xl border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-200 text-left group"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 mb-2 group-hover:scale-125 transition-transform" />
                <h4 className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  {topic.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-1">{topic.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Algorithms Chips & Detail Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Algorithm Explorer</span>
              <h3 className="text-xl font-bold text-slate-100">Key Algorithms Implemented & Explored</h3>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              API-Ready Architecture
            </div>
          </div>

          {/* Algorithm Chips */}
          <div className="flex flex-wrap gap-2.5">
            {dsaAlgorithms.map((algo) => {
              const isSelected = selectedAlgo?.name === algo.name;
              return (
                <button
                  key={algo.name}
                  onClick={() => setSelectedAlgo(isSelected ? null : algo)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/25 scale-105'
                      : 'bg-slate-900/90 border border-slate-800 text-purple-300 hover:border-purple-500/40 hover:bg-slate-800'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{algo.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Algorithm Description Preview */}
          {selectedAlgo ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-start gap-3"
            >
              <Terminal className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-purple-300 font-mono">{selectedAlgo.name}</h4>
                <p className="text-xs text-slate-300 mt-1">{selectedAlgo.description}</p>
              </div>
            </motion.div>
          ) : (
            <p className="text-xs text-slate-400 italic">
              Click on any algorithm pill above to view its core computational mechanics.
            </p>
          )}

          {/* Future API Architecture Notice */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Platform API ready (LeetCode / GitHub Sync)
            </span>
            <span>No fabricated stats</span>
          </div>
        </div>
      </div>
    </section>
  );
}
