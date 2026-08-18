import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function HeroGraphic() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[480px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="heroGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cardGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cardGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f4eee1" stopOpacity="0.95" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#06b6d4" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Tech Circuit Ring */}
        <circle
          cx="250"
          cy="200"
          r="160"
          stroke={isLight ? "rgba(160, 140, 110, 0.2)" : "rgba(6, 182, 212, 0.15)"}
          strokeWidth="2"
          strokeDasharray="8 8"
          className="animate-spin"
          style={{ animationDuration: '40s' }}
        />

        {/* Secondary Inner Ring */}
        <circle
          cx="250"
          cy="200"
          r="120"
          stroke={isLight ? "rgba(6, 182, 212, 0.25)" : "rgba(59, 130, 246, 0.2)"}
          strokeWidth="1.5"
        />

        {/* Central Developer Workspace Card */}
        <rect
          x="100"
          y="80"
          width="300"
          height="240"
          rx="20"
          fill={isLight ? "url(#cardGradLight)" : "url(#cardGradDark)"}
          stroke={isLight ? "#d9cb77" : "#1e293b"}
          strokeWidth="2"
          filter="url(#shadow)"
        />

        {/* Window Top Controls */}
        <circle cx="130" cy="105" r="5" fill="#f43f5e" />
        <circle cx="145" cy="105" r="5" fill="#eab308" />
        <circle cx="160" cy="105" r="5" fill="#10b981" />

        <line
          x1="100"
          y1="125"
          x2="400"
          y2="125"
          stroke={isLight ? "#e5dbcc" : "#1e293b"}
          strokeWidth="1"
        />

        {/* Code Visual Lines & Graph Nodes */}
        <rect x="130" y="145" width="80" height="8" rx="4" fill="#06b6d4" />
        <rect x="220" y="145" width="50" height="8" rx="4" fill={isLight ? "#cbd5e1" : "#334155"} />

        <rect x="130" y="165" width="140" height="8" rx="4" fill={isLight ? "#94a3b8" : "#475569"} />
        <rect x="130" y="185" width="100" height="8" rx="4" fill="#3b82f6" />

        {/* Interactive Neural AI Graph Nodes */}
        <g transform="translate(280, 160)">
          <line x1="20" y1="20" x2="60" y2="40" stroke="#06b6d4" strokeWidth="2" />
          <line x1="20" y1="60" x2="60" y2="40" stroke="#3b82f6" strokeWidth="2" />
          <line x1="60" y1="40" x2="100" y2="20" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="60" y1="40" x2="100" y2="60" stroke="#06b6d4" strokeWidth="2" />

          <circle cx="20" cy="20" r="7" fill="#06b6d4" />
          <circle cx="20" cy="60" r="7" fill="#3b82f6" />
          <circle cx="60" cy="40" r="9" fill="#8b5cf6" />
          <circle cx="100" cy="20" r="7" fill="#10b981" />
          <circle cx="100" cy="60" r="7" fill="#f59e0b" />
        </g>

        {/* Floating Badge 1: 1st Place */}
        <g transform="translate(60, 250)">
          <rect
            x="0"
            y="0"
            width="120"
            height="40"
            rx="12"
            fill={isLight ? "#ffffff" : "#0d1322"}
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text x="60" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#f59e0b" textAnchor="middle">
            🥇 BUILDX 1st Place
          </text>
        </g>

        {/* Floating Badge 2: Full-Stack */}
        <g transform="translate(320, 60)">
          <rect
            x="0"
            y="0"
            width="120"
            height="40"
            rx="12"
            fill={isLight ? "#ffffff" : "#0d1322"}
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
          <text x="60" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#06b6d4" textAnchor="middle">
            ⚡ Full-Stack & AI
          </text>
        </g>
      </svg>
    </div>
  );
}
