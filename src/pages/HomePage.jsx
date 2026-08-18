import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Trophy, GraduationCap, Brain, Mail, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import { personalData } from '../data/portfolioData';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      {/* Main Hero Showcase */}
      <Hero />

      {/* Flagship Projects Section */}
      <FeaturedProjects />

      {/* Quick Explore Page Gateway Banner */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE SEPARATE SECTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Detailed Engineering Pages
            </h2>
            <p className="text-slate-400 text-sm">
              Navigate directly to dedicated pages for about me, skills, academic history, DSA algorithms, and contact options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Page Card */}
            <Link to="/about" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-cyan-300 transition-colors">About & Profile</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Discover Sujay's academic background at Chandigarh University, academic highlights, and technical focus domains.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View About Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Skills Page Card */}
            <Link to="/skills" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">Technical Skills</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Interactive radar matrix of C++, Python, Full-Stack Web Development, DBMS, and AI/ML tools.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Skills Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Education Page Card */}
            <Link to="/education" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-blue-300 transition-colors">Education History</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recruiter timeline detailing Chandigarh University (8.04 CGPA) and DAV Public School Patna.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Education Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* DSA Page Card */}
            <Link to="/dsa" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors">DSA & Algorithms</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Graph theory, BFS/DFS, Dijkstra, topological sorting, and time complexity infographics.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View DSA Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Achievements Page Card */}
            <Link to="/achievements" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-amber-300 transition-colors">Hackathons & Honors</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  🥇 1st Place Victory at BUILDX by TRAE AI — NSUT Delhi (Team Apex Zero).
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Achievements Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Contact Page Card */}
            <Link to="/contact" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group text-left flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-sky-300 transition-colors">Get In Touch</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct background message delivery targeting sujay.nandan23@gmail.com.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-mono text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
