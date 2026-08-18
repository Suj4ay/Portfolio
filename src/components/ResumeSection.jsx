import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumePath;
    link.download = 'Sujay-Mishra-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative bg-[#070a12]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-sky-500/30 to-blue-600/30 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />

          <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-[#0a0f1d] text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center shadow-lg shadow-cyan-950/40">
              <FileText className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
                Want to know more about my journey?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Download my resume for a complete overview of my education, projects, technical skills and achievements.
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Path notice */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Target File Path: <code className="text-slate-400">/public/Sujay-Mishra-Resume.pdf</code></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
