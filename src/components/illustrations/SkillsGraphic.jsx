import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SkillsGraphic() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[350px]"
      >
        {/* Background Card */}
        <rect
          x="5"
          y="5"
          width="370"
          height="190"
          rx="14"
          fill={isLight ? "#ffffff" : "#0c111e"}
          stroke={isLight ? "#e5dccf" : "#1e293b"}
          strokeWidth="1.5"
        />

        {/* Title */}
        <text x="20" y="28" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"}>
          Technical Stack & Skill Proficiency Matrix
        </text>

        {/* Radar Graphic */}
        <g transform="translate(100, 115)">
          <polygon points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25" stroke={isLight ? "#cbd5e1" : "#334155"} strokeWidth="1" fill="none" />
          <polygon points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17" stroke={isLight ? "#cbd5e1" : "#334155"} strokeWidth="1" fill="none" />
          
          {/* Active Overlay Polygon */}
          <polygon
            points="0,-42 36,-15 25,20 0,30 -35,12 -28,-20"
            fill="url(#skillFill)"
            stroke="#0284c7"
            strokeWidth="2"
          />

          <circle cx="0" cy="-42" r="3.5" fill="#0284c7" />
          <circle cx="36" cy="-15" r="3.5" fill="#06b6d4" />
          <circle cx="25" cy="20" r="3.5" fill="#10b981" />
          <circle cx="0" cy="30" r="3.5" fill="#f59e0b" />
          <circle cx="-35" cy="12" r="3.5" fill="#8b5cf6" />
          <circle cx="-28" cy="-20" r="3.5" fill="#ec4899" />

          {/* Labels */}
          <text x="0" y="-55" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0369a1" : "#7dd3fc"} textAnchor="middle">C++ / DSA</text>
          <text x="50" y="-15" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"} textAnchor="start">React</text>
          <text x="32" y="32" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#047857" : "#34d399"} textAnchor="start">Node.js</text>
          <text x="0" y="42" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#b45309" : "#fbbf24"} textAnchor="middle">SQL/DBMS</text>
          <text x="-40" y="20" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#6d28d9" : "#c084fc"} textAnchor="end">Python</text>
          <text x="-34" y="-22" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#be185d" : "#f472b6"} textAnchor="end">AI/ML</text>
        </g>

        {/* Skill Bars Graphic */}
        <g transform="translate(225, 45)">
          <text x="0" y="10" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#64748b" : "#94a3b8"}>
            Core Strength Metrics
          </text>

          {/* Bar 1 */}
          <text x="0" y="28" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>C++ & DSA</text>
          <rect x="0" y="32" width="130" height="8" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="32" width="115" height="8" rx="4" fill="#0284c7" />

          {/* Bar 2 */}
          <text x="0" y="52" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>Full-Stack Web</text>
          <rect x="0" y="56" width="130" height="8" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="56" width="105" height="8" rx="4" fill="#06b6d4" />

          {/* Bar 3 */}
          <text x="0" y="76" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>DBMS & SQL</text>
          <rect x="0" y="80" width="130" height="8" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="80" width="100" height="8" rx="4" fill="#10b981" />

          {/* Bar 4 */}
          <text x="0" y="100" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>AI/ML & IoT</text>
          <rect x="0" y="104" width="130" height="8" rx="4" fill={isLight ? "#f1f5f9" : "#1e293b"} />
          <rect x="0" y="104" width="90" height="8" rx="4" fill="#f59e0b" />
        </g>

        <defs>
          <linearGradient id="skillFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
