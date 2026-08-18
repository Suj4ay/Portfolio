import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Cpu, Target, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { hackathonAchievements } from '../data/portfolioData';

import AchievementGraphic from './illustrations/AchievementGraphic';

export default function Achievements() {
  const achievement = hackathonAchievements[0];

  return (
    <section id="achievements" className="py-20 relative bg-[#070a12]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>HACKATHONS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Competitive technical victories and hackathon honors earned through software development.
          </p>
        </div>

        {/* Vector Victory Graphic */}
        <div className="max-w-xl mx-auto mb-10">
          <AchievementGraphic />
        </div>

        {/* Featured Achievement Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Ambient Gold Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-yellow-500/30 to-amber-600/30 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />

            <div className="relative glass-card p-6 sm:p-10 rounded-3xl border border-amber-500/40 bg-[#0b0e1a] text-left">
              {/* Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 text-amber-400 shrink-0 shadow-lg shadow-amber-950/40">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                      Flagship Competition Winner
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{achievement.location}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <span className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/25">
                    {achievement.rank}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-cyan-400" /> {achievement.teamName}
                  </span>
                </div>
              </div>

              {/* Grid Breakdown: Competition, Team, Project, Problem, Technical Approach, Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Competition & Team */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <Award className="w-4 h-4" /> Competition & Team
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-100">{achievement.title} — {achievement.location}</p>
                    <p className="text-xs text-slate-400">Team: <strong className="text-slate-200">{achievement.teamName}</strong></p>
                    <p className="text-xs text-slate-400">Project: <strong className="text-cyan-300">{achievement.projectTitle}</strong></p>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
                    <Target className="w-4 h-4" /> Problem Statement
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {achievement.problem}
                  </p>
                </div>

                {/* Technical Approach */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                    <Cpu className="w-4 h-4" /> Technical Approach
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {achievement.approach}
                  </p>
                </div>

                {/* Verified Victory Result */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" /> Final Result
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {achievement.result}
                  </p>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Officially Verified Hackathon Victory
                </span>
                <span>Team Apex Zero</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
