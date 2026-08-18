import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c101c] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#0e1424] border-b border-slate-800">
            <div className="flex items-center gap-3">
              {project.flagship && (
                <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Award className="w-5 h-5" />
                </span>
              )}
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Case Study & Technical Details</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-left text-slate-300 text-sm leading-relaxed">
            {/* Context & Achievement */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Event / Platform</span>
                <span className="font-semibold text-slate-200">{project.context}</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Achievement</span>
                <span className="font-bold text-amber-400">{project.achievement}</span>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> The Problem Challenge
                </h4>
                <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-slate-300">
                  {project.fullProblem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> The Technical Solution
                </h4>
                <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-slate-300">
                  {project.fullSolution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Key Engineering Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#0e1424] border-t border-slate-800 flex items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
