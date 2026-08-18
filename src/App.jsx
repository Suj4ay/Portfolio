import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import { useCommandPalette } from './hooks/useCommandPalette';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import DsaPage from './pages/DsaPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const { isOpen, openPalette, closePalette } = useCommandPalette();
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200 flex flex-col justify-between">
      {/* Command Palette Keyboard Overlay */}
      <CommandPalette isOpen={isOpen} onClose={closePalette} />

      {/* Sticky Navigation Header */}
      <Navbar onOpenPalette={openPalette} />

      {/* Multi-Page Route Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/dsa" element={<DsaPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onOpenPalette={openPalette} />
    </div>
  );
}
