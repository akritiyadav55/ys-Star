interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function SchoolLogo({
  className = '',
  size = 'md',
  showText = false,
}: SchoolLogoProps) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} shrink-0 select-none`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="48" fill="#0A2540" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="43" fill="#0F3677" stroke="#93C5FD" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Circular Text Path */}
          <path
            id="textPathArc"
            d="M 15 50 A 35 35 0 1 1 85 50"
            fill="none"
            stroke="none"
          />
          <text fontSize="7.5" fontWeight="bold" fill="#FFFFFF" letterSpacing="1.2">
            <textPath href="#textPathArc" startOffset="50%" textAnchor="middle">
              YS STARS ACADEMY
            </textPath>
          </text>

          {/* Bottom Arc Path for Location */}
          <path
            id="textPathBottom"
            d="M 82 54 A 34 34 0 0 1 18 54"
            fill="none"
            stroke="none"
          />
          <text fontSize="5.5" fontWeight="600" fill="#FDE047" letterSpacing="0.8">
            <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
              GOPLAPUR • CAMPIERGANJ
            </textPath>
          </text>

          {/* Inner Circle with Soft Gradient */}
          <circle cx="50" cy="50" r="25" fill="#1E3A8A" stroke="#F59E0B" strokeWidth="1.5" />

          {/* Decorative Stars */}
          {/* Left Star */}
          <polygon
            points="23,50 24.5,47 27.5,46.5 25,44 25.5,41 23,42.5 20.5,41 21,44 18.5,46.5 21.5,47"
            fill="#F59E0B"
            transform="scale(0.5) translate(20, 48)"
          />
          {/* Right Star */}
          <polygon
            points="23,50 24.5,47 27.5,46.5 25,44 25.5,41 23,42.5 20.5,41 21,44 18.5,46.5 21.5,47"
            fill="#F59E0B"
            transform="scale(0.5) translate(130, 48)"
          />

          {/* Center Torch / Star Emblem */}
          <path
            d="M50 32 L51.5 36.5 L56 37 L52.5 40 L53.5 44.5 L50 42 L46.5 44.5 L47.5 40 L44 37 L48.5 36.5 Z"
            fill="#FBBF24"
          />
          
          {/* Open Book in the Center */}
          <g transform="translate(0, 6)">
            {/* Left Page */}
            <path
              d="M50 48 C44 45 39 46 36 49 L36 57 C39 54 44 53 50 56 Z"
              fill="#FFFFFF"
              stroke="#0A2540"
              strokeWidth="0.8"
            />
            {/* Right Page */}
            <path
              d="M50 48 C56 45 61 46 64 49 L64 57 C61 54 56 53 50 56 Z"
              fill="#FFFFFF"
              stroke="#0A2540"
              strokeWidth="0.8"
            />
            {/* Book Spine */}
            <line x1="50" y1="48" x2="50" y2="56" stroke="#F59E0B" strokeWidth="1.5" />
          </g>

          {/* Rays of Knowledge */}
          <line x1="50" y1="28" x2="50" y2="30" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="43" y1="30" x2="44.5" y2="31.8" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
          <line x1="57" y1="30" x2="55.5" y2="31.8" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-slate-900 leading-tight text-lg">
            YS Stars Academy
          </span>
          <span className="text-xs font-medium text-slate-500 tracking-wide">
            Goplapur, Campierganj, Gorakhpur
          </span>
        </div>
      )}
    </div>
  );
}
