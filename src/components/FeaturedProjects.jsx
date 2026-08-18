import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Award, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ChevronRight,
  Database,
  Cpu,
  GitFork,
  BookOpen
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import BuildxGraphic from './illustrations/BuildxGraphic';
import IotGraphic from './illustrations/IotGraphic';
import DagGraphic from './illustrations/DagGraphic';
import InventoryGraphic from './illustrations/InventoryGraphic';




export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const flagshipProject = projectsData.find(p => p.flagship);
  const otherProjects = projectsData.filter(p => !p.flagship);

  return (
    <section id="projects" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software engineering projects spanning AI decision engines, database management, IoT hardware, and graph algorithms.
          </p>
        </div>

        {/* ==================================================== */}
        {/* FLAGSHIP PROJECT CARD (Special Visual Emphasis) */}
        {/* ==================================================== */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 relative group"
          >
            {/* Glowing Backdrop Border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/40 via-cyan-500/50 to-blue-600/40 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />

            <div className="relative glass-card p-6 sm:p-10 rounded-3xl border border-cyan-500/40 bg-[#0a0f1e] overflow-hidden text-left">
              {/* Top Banner Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-amber-950/40">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>FLAGSHIP HACKATHON WINNER</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {flagshipProject.context}
                  </span>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold font-mono">
                  {flagshipProject.achievement}
                </div>
              </div>

              {/* Title & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {flagshipProject.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {flagshipProject.features.slice(0, 4).map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium flex items-center gap-2"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Algorithmic & Problem Focus Card with Custom Graphic */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-2 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <BuildxGraphic />
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-left">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" /> Decision Intelligence Engine
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Computes player <strong className="text-cyan-300">Value Index</strong>, simulates trade dynamics, and solves squad budget constraints in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>

                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>

                <span className="text-xs text-slate-500 font-mono">
                  Team Apex Zero • BUILDX NSUT
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================================================== */}
        {/* OTHER FEATURED PROJECTS GRID */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-[11px] font-mono">
                    {project.context}
                  </span>
                  {project.id === 'task-prerequisite-planner' && (
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
                      DAG / Graph Theory
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Project Graphic Illustration */}
                <div className="mb-5 p-1 rounded-xl bg-slate-900/40 border border-slate-800/80 overflow-hidden">
                  {project.id === 'inventory-management' && <InventoryGraphic />}
                  {project.id === 'iot-alarm-system' && <IotGraphic />}
                  {project.id === 'task-prerequisite-planner' && <DagGraphic />}
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-5">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links & Tech Stack */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
