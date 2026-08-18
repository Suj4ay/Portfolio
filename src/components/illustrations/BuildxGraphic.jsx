import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function BuildxGraphic() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="w-full h-full min-h-[220px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px]"
      >
        {/* Background Graphic Card */}
        <rect
          x="10"
          y="10"
          width="380"
          height="220"
          rx="16"
          fill={isLight ? "#ffffff" : "#0d1322"}
          stroke={isLight ? "#e5dbcc" : "#1e293b"}
          strokeWidth="1.5"
        />

        {/* Title Bar */}
        <text x="30" y="38" fontFamily="monospace" fontSize="12" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"}>
          AI Value Index & Performance Radar
        </text>

        {/* Radar Hexagon Graphic */}
        <g transform="translate(100, 130)">
          {/* Outer Grid */}
          <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" stroke={isLight ? "#cbd5e1" : "#334155"} strokeWidth="1" fill="none" />
          <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" stroke={isLight ? "#cbd5e1" : "#334155"} strokeWidth="1" fill="none" />

          {/* AI Value Overlay */}
          <polygon
            points="0,-50 42,-20 30,25 0,35 -40,15 -30,-25"
            fill="url(#radarFill)"
            stroke="#06b6d4"
            strokeWidth="2"
          />

          <circle cx="0" cy="-50" r="4" fill="#06b6d4" />
          <circle cx="42" cy="-20" r="4" fill="#3b82f6" />
          <circle cx="30" cy="25" r="4" fill="#10b981" />
          <circle cx="0" cy="35" r="4" fill="#f59e0b" />
          <circle cx="-40" cy="15" r="4" fill="#8b5cf6" />
          <circle cx="-30" cy="-25" r="4" fill="#ec4899" />
        </g>

        {/* Trade Simulation Bar Chart Graphic */}
        <g transform="translate(230, 70)">
          <text x="0" y="0" fontFamily="monospace" fontSize="10" fill={isLight ? "#64748b" : "#94a3b8"}>
            Budget Optimization
          </text>
          
          <rect x="0" y="15" width="120" height="12" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="15" width="95" height="12" rx="4" fill="#06b6d4" />

          <rect x="0" y="38" width="120" height="12" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="38" width="110" height="12" rx="4" fill="#3b82f6" />

          <rect x="0" y="61" width="120" height="12" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="61" width="80" height="12" rx="4" fill="#10b981" />

          <rect x="0" y="84" width="120" height="12" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="84" width="105" height="12" rx="4" fill="#f59e0b" />
        </g>

        <defs>
          <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
