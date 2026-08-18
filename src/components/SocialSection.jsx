import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Code, GitFork, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function SocialSection() {
  const socialCards = [
    {
      name: "GitHub",
      username: "Sujay Mishra on GitHub",
      url: personalData.socials.github,
      description: "Explore my source code repositories, hackathon projects, and algorithm implementations.",
      icon: GithubIcon,
      color: "text-slate-100 border-slate-700 bg-slate-900/90 hover:border-cyan-500/50"
    },
    {
      name: "LinkedIn",
      username: "Sujay Mishra on LinkedIn",
      url: personalData.socials.linkedin,
      description: "Connect professionally, view academic milestones, and collaborate on tech projects.",
      icon: LinkedinIcon,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10 hover:border-blue-400"
    },
    {
      name: "Email",
      username: personalData.socials.email,
      url: `mailto:${personalData.socials.email}`,
      description: "Send direct messages for opportunities, engineering queries, or project collaborations.",
      icon: Mail,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400"
    }
  ];

  return (
    <section className="py-16 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialCards.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mb-2">{social.username}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {social.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Social Connection</span>
                  <span className="text-cyan-400">Configurable URL</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
