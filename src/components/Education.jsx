import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, School } from 'lucide-react';
import { educationData } from '../data/portfolioData';

import EducationGraphic from './illustrations/EducationGraphic';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & Academic Highlights
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal education foundation in Computer Science Engineering and high-school sciences.
          </p>
        </div>

        {/* Vector Academic Timeline Graphic */}
        <div className="max-w-xl mx-auto mb-10">
          <EducationGraphic />
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 text-left"
            >
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    {edu.id === 'cu' ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    {edu.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" /> Academic Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
