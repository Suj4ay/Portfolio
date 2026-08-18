import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code2, 
  Brain, 
  Layers, 
  Cpu, 
  Trophy, 
  GraduationCap, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const focusCards = [
    {
      title: "Software Development",
      description: "Engineering clean, structured, and scalable software applications.",
      icon: Code2,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Solving algorithmic challenges with optimal time and space complexity.",
      icon: Brain,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    },
    {
      title: "Full-Stack Development",
      description: "Building responsive frontends and reliable RESTful backend architectures.",
      icon: Layers,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    {
      title: "AI / Machine Learning",
      description: "Exploring predictive intelligence and data-driven decision optimization.",
      icon: Sparkles,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
      title: "Internet of Things (IoT)",
      description: "Integrating microcontrollers, MQTT messaging, and hardware alert systems.",
      icon: Cpu,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      title: "Hackathon Competitions",
      description: "Rapid prototyping and winning software competitions under tight deadlines.",
      icon: Trophy,
      color: "text-rose-400 border-rose-500/30 bg-rose-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#070a12]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Practical Solutions &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Exploring Technology
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Passionate about building real-world software, tackling algorithmic complexity, and collaborating on high-impact projects.
          </p>
        </div>

        {/* Narrative & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4" /> Student Profile
              </div>
              <p>
                I am a <strong className="text-slate-100 font-semibold">{personalData.degree}</strong> student at{' '}
                <strong className="text-cyan-300 font-semibold">{personalData.university}</strong>. My primary focus revolves around constructing reliable software systems, solving complex data structures and algorithm problems, and exploring modern technical domains.
              </p>
              <p>
                Whether it's building an AI-driven decision intelligence system for team roster optimization, designing an IoT-based emergency hardware node, or visualising topological graph algorithms, I enjoy bridging computational theory with practical software solutions.
              </p>
              <p>
                I actively test my skills in hackathons and coding competitions, where quick problem formulation, teamwork, and execution speed matter most.
              </p>
            </div>

            {/* University Tag Footer */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">{personalData.university}</h4>
                  <p className="text-xs text-slate-400">{personalData.degree}</p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                CGPA: {personalData.academicHighlights.cgpa}
              </div>
            </div>
          </motion.div>

          {/* Profile Showcase & Academic Snapshot Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {/* Developer Portrait Glass Card */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-4 relative overflow-hidden group">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-cyan-500/40 shadow-lg">
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-left space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  Developer Identity
                </span>
                <h4 className="text-base font-bold text-slate-100">{personalData.name}</h4>
                <p className="text-[11px] text-slate-400">B.Tech CSE Student & Software Builder</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1 relative overflow-hidden group text-left">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Undergraduate Metric</div>
              <div className="text-2xl font-extrabold text-slate-100">8.04 <span className="text-sm font-normal text-slate-400">/ 10</span></div>
              <div className="text-xs text-slate-400">Current CGPA at Chandigarh University</div>
              <div className="absolute top-3 right-3 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
                <GraduationCap className="w-10 h-10" />
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1 relative overflow-hidden group text-left">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Hackathon Victory</div>
              <div className="text-xl font-extrabold text-slate-100">🥇 1st Place Winner</div>
              <div className="text-xs text-slate-400">BUILDX by TRAE AI — NSUT, Delhi</div>
              <div className="absolute top-3 right-3 text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
                <Trophy className="w-10 h-10" />
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1 relative overflow-hidden group text-left">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">Secondary Education</div>
              <div className="text-xl font-extrabold text-slate-100">82% <span className="text-xs font-normal text-slate-400">(10th)</span> & 76% <span className="text-xs font-normal text-slate-400">(12th)</span></div>
              <div className="text-xs text-slate-400">DAV Public School, Patna</div>
              <div className="absolute top-3 right-3 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                <User className="w-10 h-10" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Focus Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-200 text-left flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" /> Current Technical Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 flex items-start gap-4 text-left group"
                >
                  <div className={`p-3 rounded-xl border ${card.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
