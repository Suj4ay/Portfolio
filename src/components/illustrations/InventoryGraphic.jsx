import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function InventoryGraphic() {
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
        <text x="20" y="25" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#0284c7" : "#38bdf8"}>
          Relational DBMS + SQLite Schema
        </text>

        {/* Relational Table Graphic 1 */}
        <g transform="translate(25, 45)">
          <rect x="0" y="0" width="120" height="85" rx="8" fill={isLight ? "#f8fafc" : "#1e293b"} stroke={isLight ? "#cbd5e1" : "#475569"} strokeWidth="1" />
          <rect x="0" y="0" width="120" height="22" rx="8" fill={isLight ? "#e2e8f0" : "#334155"} />
          <text x="60" y="15" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"} textAnchor="middle">
            products_table
          </text>
          <text x="10" y="38" fontFamily="monospace" fontSize="8" fill={isLight ? "#0284c7" : "#38bdf8"}>PK  product_id</text>
          <text x="10" y="52" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>    product_name</text>
          <text x="10" y="66" fontFamily="monospace" fontSize="8" fill={isLight ? "#334155" : "#cbd5e1"}>    stock_qty</text>
        </g>

        {/* Connection arrow */}
        <line x1="145" y1="85" x2="175" y2="85" stroke={isLight ? "#0284c7" : "#38bdf8"} strokeWidth="2" strokeDasharray="3 3" />

        {/* Relational Table Graphic 2 */}
        <g transform="translate(175, 45)">
          <rect x="0" y="0" width="120" height="85" rx="8" fill={isLight ? "#f8fafc" : "#1e293b"} stroke={isLight ? "#cbd5e1" : "#475569"} strokeWidth="1" />
          <rect x="0" y="0" width="120" height="22" rx="8" fill={isLight ? "#e2e8f0" : "#334155"} />
          <text x="60" y="15" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#0f172a" : "#f8fafc"} textAnchor="middle">
            inventory_logs
          </text>
          <text x="10" y="38" fontFamily="monospace" fontSize="8" fill={isLight ? "#0284c7" : "#38bdf8"}>FK  product_id</text>
          <text x="10" y="52" fontFamily="monospace" fontSize="8" fill={isLight ? "#059669" : "#34d399"}>    crud_action</text>
          <text x="10" y="66" fontFamily="monospace" fontSize="8" fill={isLight ? "#d97706" : "#fbbf24"}>    timestamp</text>
        </g>
      </svg>
    </div>
  );
}
