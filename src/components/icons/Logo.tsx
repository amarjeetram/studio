import React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M10 40 Q20 10 30 40 L40 20 L50 40 Q40 10 30 40"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate attributeName="d" from="M10 40 Q20 10 30 40 L40 20 L50 40 Q40 10 30 40" to="M10 20 Q20 30 30 20 L40 40 L50 20 Q40 30 30 20" dur="2s" repeatCount="indefinite" />
      </path>
      <text
        x="58"
        y="35"
        fontFamily="Poppins, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="hsl(var(--foreground))"
        className="dark:fill-white"
      >
        StarRise
      </text>
    </svg>
  );
}
