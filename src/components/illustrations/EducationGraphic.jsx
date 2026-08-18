import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function EducationGraphic() {
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
        <text x="20" y="28" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"}>
          Academic Roadmap & Progress Timeline
        </text>

        {/* Timeline Connecting Line */}
        <line x1="60" y1="90" x2="320" y2="90" stroke={isLight ? "#cbd5e1" : "#334155"} strokeWidth="2" strokeDasharray="4 4" />
        <line x1="60" y1="90" x2="220" y2="90" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="3" />

        {/* Node 1: DAV Class 10 */}
        <g transform="translate(60, 90)">
          <circle cx="0" cy="0" r="14" fill={isLight ? "#f0f9ff" : "#0c4a6e"} stroke={isLight ? "#0284c7" : "#38bdf8"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#0369a1" : "#7dd3fc"} textAnchor="middle">10th</text>
          <text x="0" y="-22" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"} textAnchor="middle">82%</text>
          <text x="0" y="28" fontFamily="monospace" fontSize="8" fill={isLight ? "#64748b" : "#94a3b8"} textAnchor="middle">DAV Patna</text>
        </g>

        {/* Node 2: DAV Class 12 */}
        <g transform="translate(160, 90)">
          <circle cx="0" cy="0" r="14" fill={isLight ? "#f0fdf4" : "#064e3b"} stroke={isLight ? "#059669" : "#34d399"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#047857" : "#6ee7b7"} textAnchor="middle">12th</text>
          <text x="0" y="-22" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"} textAnchor="middle">76%</text>
          <text x="0" y="28" fontFamily="monospace" fontSize="8" fill={isLight ? "#64748b" : "#94a3b8"} textAnchor="middle">Science Stream</text>
        </g>

        {/* Node 3: Chandigarh University B.Tech CSE */}
        <g transform="translate(280, 90)">
          <circle cx="0" cy="0" r="18" fill={isLight ? "#fffbeb" : "#78350f"} stroke={isLight ? "#d97706" : "#fbbf24"} strokeWidth="2.5" />
          <text x="0" y="4" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#b45309" : "#fef08a"} textAnchor="middle">B.Tech</text>
          <text x="0" y="-26" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill={isLight ? "#b45309" : "#fbbf24"} textAnchor="middle">8.04 CGPA</text>
          <text x="0" y="32" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"} textAnchor="middle">Chandigarh Univ</text>
        </g>
      </svg>
    </div>
  );
}
