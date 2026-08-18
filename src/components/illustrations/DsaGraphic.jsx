import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function DsaGraphic() {
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
        <text x="20" y="28" fontFamily="monospace" fontSize="11" fontWeight="bold" fill={isLight ? "#7c3aed" : "#a855f7"}>
          Algorithm Execution & Time Complexity Matrix
        </text>

        {/* Graph Traversal Visual (BFS/DFS Node Flow) */}
        <g transform="translate(25, 45)">
          <text x="0" y="10" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#64748b" : "#94a3b8"}>
            Graph Traversal (BFS/DFS)
          </text>

          <line x1="25" y1="40" x2="65" y2="25" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="1.5" />
          <line x1="25" y1="40" x2="65" y2="55" stroke={isLight ? "#7c3aed" : "#a855f7"} strokeWidth="1.5" />
          <line x1="65" y1="25" x2="115" y2="40" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="1.5" />
          <line x1="65" y1="55" x2="115" y2="40" stroke={isLight ? "#7c3aed" : "#a855f7"} strokeWidth="1.5" />

          {/* Root Node */}
          <circle cx="25" cy="40" r="11" fill={isLight ? "#f0f9ff" : "#0c4a6e"} stroke="#0284c7" strokeWidth="2" />
          <text x="25" y="43" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0369a1" : "#7dd3fc"} textAnchor="middle">0</text>

          {/* Branch 1 */}
          <circle cx="65" cy="25" r="11" fill={isLight ? "#f0fdf4" : "#064e3b"} stroke="#059669" strokeWidth="2" />
          <text x="65" y="28" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#047857" : "#6ee7b7"} textAnchor="middle">1</text>

          {/* Branch 2 */}
          <circle cx="65" cy="55" r="11" fill={isLight ? "#faf5ff" : "#581c87"} stroke="#7c3aed" strokeWidth="2" />
          <text x="65" y="58" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#6d28d9" : "#e9d5ff"} textAnchor="middle">2</text>

          {/* Target Node */}
          <circle cx="115" cy="40" r="12" fill={isLight ? "#fffbeb" : "#78350f"} stroke="#d97706" strokeWidth="2" />
          <text x="115" y="43" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#b45309" : "#fef08a"} textAnchor="middle">3</text>
        </g>

        {/* Complexity Table Graphic */}
        <g transform="translate(180, 45)">
          <rect x="0" y="0" width="175" height="95" rx="8" fill={isLight ? "#f8fafc" : "#1e293b"} stroke={isLight ? "#cbd5e1" : "#475569"} strokeWidth="1" />
          <rect x="0" y="0" width="175" height="20" rx="8" fill={isLight ? "#e2e8f0" : "#334155"} />
          
          <text x="10" y="14" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"}>
            Algorithm
          </text>
          <text x="115" y="14" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"}>
            Time Comp.
          </text>

          <text x="10" y="36" fontFamily="monospace" fontSize="8" fill={isLight ? "#0284c7" : "#38bdf8"}>Dijkstra Shortest Path</text>
          <text x="115" y="36" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#047857" : "#34d399"}>O((V+E)logV)</text>

          <text x="10" y="54" fontFamily="monospace" fontSize="8" fill={isLight ? "#7c3aed" : "#c084fc"}>Topological Sort</text>
          <text x="115" y="54" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#047857" : "#34d399"}>O(V + E)</text>

          <text x="10" y="72" fontFamily="monospace" fontSize="8" fill={isLight ? "#d97706" : "#fbbf24"}>Merge / Quick Sort</text>
          <text x="115" y="72" fontFamily="monospace" fontSize="8" fontWeight="bold" fill={isLight ? "#047857" : "#34d399"}>O(N log N)</text>
        </g>
      </svg>
    </div>
  );
}
