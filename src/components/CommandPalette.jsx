import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Trophy, 
  Cpu, 
  FileDown, 
  Mail, 
  X,
  ArrowRight,
  Sun,
  Moon,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function CommandPalette({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const navigateToPage = (path) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const commands = [
    {
      id: 'theme',
      label: theme === 'dark' ? 'Switch to Cream Light Mode' : 'Switch to Dark Mode',
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'home',
      label: 'Go to Home Page',
      category: 'Pages',
      icon: Home,
      action: () => navigateToPage('/')
    },
    {
      id: 'about',
      label: 'Go to About Page',
      category: 'Pages',
      icon: User,
      action: () => navigateToPage('/about')
    },
    {
      id: 'skills',
      label: 'Go to Skills Page',
      category: 'Pages',
      icon: Code,
      action: () => navigateToPage('/skills')
    },
    {
      id: 'projects',
      label: 'Go to Projects Page',
      category: 'Pages',
      icon: Briefcase,
      action: () => navigateToPage('/projects')
    },
    {
      id: 'education',
      label: 'Go to Education Page',
      category: 'Pages',
      icon: GraduationCap,
      action: () => navigateToPage('/education')
    },
    {
      id: 'dsa',
      label: 'Go to DSA & Algorithms Page',
      category: 'Pages',
      icon: Cpu,
      action: () => navigateToPage('/dsa')
    },
    {
      id: 'achievements',
      label: 'Go to Achievements Page',
      category: 'Pages',
      icon: Trophy,
      action: () => navigateToPage('/achievements')
    },
    {
      id: 'contact',
      label: 'Go to Contact Page',
      category: 'Pages',
      icon: Mail,
      action: () => navigateToPage('/contact')
    },
    {
      id: 'resume',
      label: 'Download Resume',
      category: 'Actions',
      icon: FileDown,
      action: () => downloadResume()
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      category: 'Social',
      icon: GithubIcon,
      action: () => window.open(personalData.socials.github, '_blank', 'noopener,noreferrer')
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      category: 'Social',
      icon: LinkedinIcon,
      action: () => window.open(personalData.socials.linkedin, '_blank', 'noopener,noreferrer')
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const downloadResume = () => {
    onClose();
    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Sujay-Mishra-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onKeyDown={handleKeyDown}
            className={`relative w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 border transition-all duration-300 ${
              isLight
                ? 'bg-white border-[#e5dccf] shadow-amber-950/20 text-slate-900'
                : 'bg-[#0d121e] border-cyan-500/30 shadow-cyan-950/40 text-slate-100'
            }`}
          >
            {/* Input Header */}
            <div className={`flex items-center px-4 border-b ${
              isLight ? 'bg-[#f8f5f0] border-[#e5dccf]' : 'bg-slate-900/50 border-slate-800/80'
            }`}>
              <Search className={`w-5 h-5 mr-3 shrink-0 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search page..."
                className={`w-full py-4 bg-transparent focus:outline-none text-sm sm:text-base font-medium ${
                  isLight ? 'text-slate-900 placeholder-slate-400' : 'text-slate-100 placeholder-slate-500'
                }`}
              />
              <button
                onClick={onClose}
                aria-label="Close command palette"
                className={`p-1 rounded-lg transition-colors ${
                  isLight ? 'text-slate-500 hover:text-slate-800 hover:bg-slate-200' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? isLight
                            ? 'bg-sky-100 text-sky-900 border border-sky-300 font-bold'
                            : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-200 border border-cyan-500/30'
                          : isLight
                            ? 'text-slate-700 hover:bg-slate-100 border border-transparent'
                            : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected
                              ? isLight ? 'bg-sky-600 text-white' : 'bg-cyan-500/20 text-cyan-300'
                              : isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800/60 text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{cmd.label}</p>
                          <span className={`text-[11px] ${isLight ? 'text-slate-500 font-medium' : 'text-slate-500'}`}>
                            {cmd.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected
                            ? isLight ? 'text-sky-700 translate-x-0.5' : 'text-cyan-400 translate-x-0.5'
                            : 'opacity-0'
                        }`}
                      />
                    </button>
                  );
                })
              ) : (
                <div className={`py-8 text-center text-sm ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className={`px-4 py-2.5 border-t flex items-center justify-between text-xs font-mono transition-colors ${
              isLight ? 'bg-[#f3ede2] border-[#e5dccf] text-slate-700' : 'bg-slate-900/80 border-slate-800 text-slate-400'
            }`}>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                    isLight ? 'bg-white border-[#d8cdbc] text-slate-800 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}>↑↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                    isLight ? 'bg-white border-[#d8cdbc] text-slate-800 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}>↵</kbd> select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className={`px-1.5 py-0.5 rounded border text-[10px] ${
                  isLight ? 'bg-white border-[#d8cdbc] text-slate-800 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'
                }`}>ESC</kbd> close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
