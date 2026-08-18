import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function IotGraphic() {
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
        <text x="20" y="25" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#059669" : "#10b981"}>
          ESP8266 + MQTT Node Signal
        </text>

        {/* ESP8266 Chip Board */}
        <rect
          x="25"
          y="45"
          width="90"
          height="90"
          rx="10"
          fill={isLight ? "#f0fdf4" : "#064e3b"}
          stroke={isLight ? "#86efac" : "#10b981"}
          strokeWidth="1.5"
        />
        {/* Pins */}
        <rect x="15" y="55" width="10" height="4" fill="#64748b" />
        <rect x="15" y="67" width="10" height="4" fill="#64748b" />
        <rect x="15" y="79" width="10" height="4" fill="#64748b" />
        <rect x="15" y="91" width="10" height="4" fill="#64748b" />
        <rect x="15" y="103" width="10" height="4" fill="#64748b" />

        <text x="70" y="95" fontFamily="monospace" fontSize="10" fontWeight="bold" fill={isLight ? "#047857" : "#34d399"} textAnchor="middle">
          ESP8266
        </text>

        {/* Wireless Pulse Waves */}
        <g transform="translate(140, 90)">
          <path d="M 0 -25 A 25 25 0 0 1 0 25" stroke={isLight ? "#059669" : "#10b981"} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 12 -38 A 38 38 0 0 1 12 38" stroke={isLight ? "#0284c7" : "#06b6d4"} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
          <path d="M 24 -50 A 50 50 0 0 1 24 50" stroke={isLight ? "#d97706" : "#f59e0b"} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
        </g>

        {/* Remote Emergency Receiver Node */}
        <g transform="translate(230, 50)">
          <rect
            x="0"
            y="0"
            width="70"
            height="80"
            rx="10"
            fill={isLight ? "#fff1f2" : "#881337"}
            stroke={isLight ? "#fca5a5" : "#f43f5e"}
            strokeWidth="1.5"
          />
          <circle cx="35" cy="30" r="14" fill={isLight ? "#e11d48" : "#f43f5e"} />
          <text x="35" y="34" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            !
          </text>
          <text x="35" y="62" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={isLight ? "#9f1239" : "#fda4af"} textAnchor="middle">
            ALERT
          </text>
        </g>
      </svg>
    </div>
  );
}
