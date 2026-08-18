import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileDown, 
  Menu, 
  X, 
  Command, 
  ChevronRight,
  Code2,
  Sun,
  Moon
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenPalette }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'DSA', path: '/dsa' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Sujay-Mishra-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Sticky Header with Glassmorphism & Route Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'bg-[#faf6f0]/85 backdrop-blur-xl border-b border-[#e5dccf] shadow-md shadow-amber-950/5 py-3'
              : 'bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden shrink-0">
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full object-cover rounded-[9px] group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-bold text-lg tracking-tight group-hover:text-cyan-500 transition-colors ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                {personalData.name}
              </span>
              <span className={`text-[10px] font-mono font-medium tracking-wider uppercase ${
                isLight ? 'text-sky-600' : 'text-cyan-400'
              }`}>
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Route Navigation Bar */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isLight
              ? 'bg-white/80 border border-[#e2d9cc] shadow-md shadow-amber-950/5'
              : 'bg-slate-900/60 border border-slate-800/80'
          }`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? isLight
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 font-bold'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                      : isLight
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Cream Light Mode'}
              className={`p-2 rounded-xl border hover:scale-110 transition-all duration-200 ${
                isLight
                  ? 'bg-white border-[#e5dccf] text-amber-600 shadow-sm hover:bg-amber-50'
                  : 'bg-slate-900/80 border-slate-800 text-amber-400'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Command Palette trigger */}
            <button
              onClick={onOpenPalette}
              title="Command Palette (Ctrl + K)"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-200 ${
                isLight
                  ? 'bg-white border-[#e5dccf] text-slate-700 hover:text-sky-700 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40'
              }`}
            >
              <Command className={`w-3.5 h-3.5 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />
              <span className="hidden xl:inline text-[11px]">Cmd + K</span>
            </button>

            {/* Social Icons */}
            <div className={`flex items-center gap-1 border-r pr-3 ${
              isLight ? 'border-[#e5dccf]' : 'border-slate-800'
            }`}>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className={`p-2 rounded-lg transition-colors ${
                  isLight ? 'text-slate-700 hover:text-sky-700 hover:bg-slate-100' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className={`p-2 rounded-lg transition-colors ${
                  isLight ? 'text-slate-700 hover:text-sky-700 hover:bg-slate-100' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60'
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Download CTA */}
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                isLight ? 'bg-white border-[#e5dccf] text-amber-600' : 'bg-slate-900 border-slate-800 text-amber-400'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className={`p-2 rounded-lg border ${
                isLight ? 'bg-white border-[#e5dccf] text-sky-600' : 'bg-slate-900 border-slate-800 text-cyan-400'
              }`}
            >
              <Command className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`p-2.5 rounded-xl border transition-colors ${
                isLight ? 'bg-white border-[#e5dccf] text-slate-800' : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Route Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[65px] left-0 right-0 z-30 backdrop-blur-xl border-b px-6 py-6 lg:hidden shadow-2xl overflow-hidden ${
              isLight
                ? 'bg-[#faf6f0]/95 border-[#e2d9cc]'
                : 'bg-[#080c16]/95 border-slate-800'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                    isActive
                      ? isLight
                        ? 'bg-sky-100 text-sky-900 font-bold'
                        : 'bg-cyan-500/20 text-cyan-300 font-bold'
                      : isLight
                        ? 'text-slate-800 hover:text-sky-700 hover:bg-white'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.name} Page</span>
                  <ChevronRight className={`w-4 h-4 ${isLight ? 'text-slate-400' : 'text-slate-600'}`} />
                </NavLink>
              ))}

              <div className={`pt-4 border-t flex flex-col gap-3 ${
                isLight ? 'border-[#e2d9cc]' : 'border-slate-800'
              }`}>
                <button
                  onClick={handleResumeDownload}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border ${
                      isLight ? 'bg-white border-[#e5dccf] text-slate-800 hover:text-sky-600' : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                    }`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border ${
                      isLight ? 'bg-white border-[#e5dccf] text-slate-800 hover:text-sky-600' : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                    }`}
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
