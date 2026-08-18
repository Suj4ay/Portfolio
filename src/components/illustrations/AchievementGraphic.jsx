import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function AchievementGraphic() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="w-full h-full min-h-[180px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 380 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[350px]"
      >
        {/* Background Card */}
        <rect
          x="5"
          y="5"
          width="370"
          height="170"
          rx="14"
          fill={isLight ? "#ffffff" : "#0c111e"}
          stroke={isLight ? "#e5dccf" : "#1e293b"}
          strokeWidth="1.5"
        />

        {/* Title */}
        <text x="20" y="28" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={isLight ? "#d97706" : "#fbbf24"}>
          BUILDX by TRAE AI — NSUT Delhi Victory
        </text>

        {/* Gold Trophy Visual Graphic */}
        <g transform="translate(60, 50)">
          {/* Trophy Cup */}
          <path d="M 10 10 L 50 10 L 45 45 C 45 55 15 55 15 45 Z" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="1.5" />
          {/* Handles */}
          <path d="M 10 18 C 0 18 0 35 13 38" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <path d="M 50 18 C 60 18 60 35 47 38" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Stem & Base */}
          <rect x="26" y="52" width="8" height="18" fill="#d97706" />
          <rect x="16" y="70" width="28" height="12" rx="3" fill="#78350f" stroke="#b45309" strokeWidth="1" />
          {/* Gold Star */}
          <polygon points="30,22 33,28 40,29 35,34 36,41 30,37 24,41 25,34 20,29 27,28" fill="#ffffff" />
        </g>

        {/* Victory Details Box */}
        <g transform="translate(145, 50)">
          <rect x="0" y="0" width="210" height="95" rx="10" fill={isLight ? "#fffbeb" : "#1e1708"} stroke={isLight ? "#fde68a" : "#92400e"} strokeWidth="1" />
          
          <text x="15" y="24" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={isLight ? "#b45309" : "#fef08a"}>
            🥇 1st Place Winner
          </text>
          <text x="15" y="42" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"}>
            Team Apex Zero (NSUT, Delhi)
          </text>
          <text x="15" y="60" fontFamily="monospace" fontSize="9" fill={isLight ? "#64748b" : "#94a3b8"}>
            Project: AI Roster Optimiser
          </text>
          <text x="15" y="78" fontFamily="monospace" fontSize="9" fill={isLight ? "#047857" : "#34d399"}>
            ★ ML Prediction & Trade Solver
          </text>
        </g>

        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
