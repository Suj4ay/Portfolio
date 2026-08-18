import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Command, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer({ onOpenPalette }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070d] py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-cyan-500/40">
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-200 text-sm">{personalData.name}</p>
              <p className="text-[11px] text-slate-500">{personalData.degree} @ {personalData.university}</p>
            </div>
          </div>

          {/* Center Page Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <Link to="/" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/skills" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link to="/projects" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link to="/education" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Education</Link>
            <Link to="/dsa" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">DSA</Link>
            <Link to="/achievements" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Achievements</Link>
            <Link to="/contact" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          {/* Right Back to Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPalette}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span><kbd className="text-cyan-300">Ctrl + K</kbd></span>
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>© {new Date().getFullYear()} Sujay Mishra. All rights reserved.</span>
          <span>B.Tech CSE — Chandigarh University</span>
        </div>
      </div>
    </footer>
  );
}
