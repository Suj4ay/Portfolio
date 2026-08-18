import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function DagGraphic() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="w-full h-full min-h-[160px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[300px]"
      >
        {/* Background Card */}
        <rect
          x="5"
          y="5"
          width="310"
          height="150"
          rx="14"
          fill={isLight ? "#ffffff" : "#0c111e"}
          stroke={isLight ? "#e5dccf" : "#1e293b"}
          strokeWidth="1.5"
        />

        {/* Title */}
        <text x="20" y="25" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#7c3aed" : "#a855f7"}>
          DAG Topological Dependency Graph
        </text>

        {/* Edges */}
        <line x1="60" y1="80" x2="140" y2="50" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="60" y1="80" x2="140" y2="110" stroke={isLight ? "#7c3aed" : "#a855f7"} strokeWidth="2" />
        <line x1="140" y1="50" x2="240" y2="80" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="2" />
        <line x1="140" y1="110" x2="240" y2="80" stroke={isLight ? "#7c3aed" : "#a855f7"} strokeWidth="2" />

        {/* Node A (Start Task) */}
        <g transform="translate(60, 80)">
          <circle cx="0" cy="0" r="18" fill={isLight ? "#f0f9ff" : "#0c4a6e"} stroke={isLight ? "#0284c7" : "#38bdf8"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#0369a1" : "#7dd3fc"} textAnchor="middle">
            Task A
          </text>
        </g>

        {/* Node B (Prerequisite 1) */}
        <g transform="translate(140, 50)">
          <circle cx="0" cy="0" r="18" fill={isLight ? "#f0fdf4" : "#064e3b"} stroke={isLight ? "#059669" : "#34d399"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#047857" : "#6ee7b7"} textAnchor="middle">
            Task B
          </text>
        </g>

        {/* Node C (Prerequisite 2) */}
        <g transform="translate(140, 110)">
          <circle cx="0" cy="0" r="18" fill={isLight ? "#faf5ff" : "#581c87"} stroke={isLight ? "#7c3aed" : "#c084fc"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#6d28d9" : "#e9d5ff"} textAnchor="middle">
            Task C
          </text>
        </g>

        {/* Node D (Final Scheduled Output) */}
        <g transform="translate(240, 80)">
          <circle cx="0" cy="0" r="20" fill={isLight ? "#fffbeb" : "#78350f"} stroke={isLight ? "#d97706" : "#fbbf24"} strokeWidth="2" />
          <text x="0" y="4" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#b45309" : "#fef08a"} textAnchor="middle">
            Task D
          </text>
        </g>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
