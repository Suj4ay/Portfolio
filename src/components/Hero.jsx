import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  MessageSquare, 
  Sparkles, 
  Award, 
  Cpu, 
  Code2, 
  Layers
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import DeveloperShowcase from './DeveloperShowcase';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Sujay-Mishra-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Grid & Glow Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Hackathon Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-md transition-colors ${
                isLight
                  ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-amber-900/5'
                  : 'bg-slate-900/90 border-amber-500/30 text-amber-300 shadow-amber-950/20'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>🥇 1st Place Winner — BUILDX NSUT Delhi</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600">
                  {personalData.name}.
                </span>
              </h1>
            </motion.div>

            {/* Rotating Role Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-xl sm:text-2xl font-semibold h-10"
            >
              <span className={isLight ? 'text-slate-700' : 'text-slate-400'}>I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className={`border-b-2 pb-0.5 font-bold ${
                    isLight
                      ? 'text-sky-700 border-sky-600'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 border-cyan-400/80'
                  }`}
                >
                  {personalData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-base sm:text-lg max-w-2xl leading-relaxed font-normal ${
                isLight ? 'text-slate-800 font-medium' : 'text-slate-300'
              }`}
            >
              {personalData.headline}
            </motion.p>

            {/* Quick Fact Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium flex items-center gap-1.5 ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300'
              }`}>
                <Code2 className={`w-3.5 h-3.5 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} /> B.Tech CSE @ Chandigarh University
              </span>
              <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium flex items-center gap-1.5 ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-900 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> CGPA: 8.04
              </span>
            </motion.div>

            {/* Action Buttons (3 CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              {/* Primary CTA */}
              <button
                onClick={() => handleScroll('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleResumeDownload}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${
                  isLight
                    ? 'bg-white border-sky-400 text-sky-800 hover:bg-sky-50 shadow-sm'
                    : 'bg-slate-900/90 border-cyan-500/40 text-cyan-300 hover:bg-slate-800 hover:border-cyan-400'
                }`}
              >
                <FileDown className={`w-4 h-4 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />
                <span>Download Resume</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={() => handleScroll('contact')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 ${
                  isLight
                    ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-800/80'
                }`}
              >
                <MessageSquare className={`w-4 h-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`} />
                <span>Let's Connect</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual Element (Developer Profile Showcase with Image & Terminal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Badge Top Right: DSA + AI ML */}
            <div className={`hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xl backdrop-blur-md transition-colors ${
              isLight
                ? 'bg-white border-sky-300 text-sky-900 shadow-sky-900/10'
                : 'bg-[#0e1628]/95 border-cyan-500/40 text-cyan-300'
            }`}>
              <Cpu className={`w-4 h-4 ${isLight ? 'text-sky-600' : 'text-cyan-400'} animate-pulse`} />
              <span>DSA + AI ML</span>
            </div>

            {/* Floating Badge Bottom Left: React & Node.js */}
            <div className={`hidden sm:flex absolute -bottom-4 -left-2 z-20 items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xl backdrop-blur-md transition-colors ${
              isLight
                ? 'bg-white border-blue-300 text-blue-900 shadow-blue-900/10'
                : 'bg-[#0e1628]/95 border-blue-500/40 text-blue-300'
            }`}>
              <Layers className={`w-4 h-4 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} />
              <span>React & Node.js</span>
            </div>

            {/* Developer Profile Showcase Component */}
            <DeveloperShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
