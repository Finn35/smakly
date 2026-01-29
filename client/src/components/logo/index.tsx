/**
 * Smakly Logo System
 * 
 * A complete, premium logo system with geometric precision.
 * 
 * Usage:
 *   <SmaklyLogo />                    // Default horizontal logo
 *   <SmaklyLogo variant="icon" />     // Icon only
 *   <SmaklyLogo variant="stacked" />  // Stacked layout
 *   <SmaklyLogo color="gradient" />   // Gradient version
 *   <SmaklyLogo color="mono" />       // Dark navy mono
 *   <SmaklyLogo color="white" />      // White (for dark backgrounds)
 */

interface SmaklyLogoProps {
  variant?: "horizontal" | "icon" | "stacked" | "wordmark";
  color?: "default" | "mono" | "gradient" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Geometric icon component - precise mathematical shapes
const SmaklyIconSVG = ({ color, size }: { color: string; size: number }) => {
  const strokeWidth = size >= 32 ? 2 : 1.75;
  const dotRadius = size >= 32 ? 2 : 1.75;
  const lineHeight = size >= 32 ? 2 : 1.75;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
    >
      {color === "gradient" && (
        <defs>
          <linearGradient id={`smakly-grad-${size}`} x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6"/>
            <stop offset="100%" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      )}
      {/* Geometric capsule - vertical rounded rectangle */}
      <rect 
        x="8" 
        y="4" 
        width="16" 
        height="24" 
        rx="8" 
        stroke={color === "gradient" ? `url(#smakly-grad-${size})` : color} 
        strokeWidth={strokeWidth} 
        fill="none"
      />
      {/* Perfect circle - caller/incoming indicator */}
      <circle 
        cx="16" 
        cy="11" 
        r={dotRadius} 
        fill={color === "gradient" ? `url(#smakly-grad-${size})` : color}
      />
      {/* Precise rectangle - AI response line */}
      <rect 
        x="11" 
        y="19" 
        width="10" 
        height={lineHeight} 
        rx={lineHeight / 2} 
        fill={color === "gradient" ? `url(#smakly-grad-${size})` : color}
      />
    </svg>
  );
};

export default function SmaklyLogo({ 
  variant = "horizontal", 
  color = "default",
  size = "md",
  className = "" 
}: SmaklyLogoProps) {
  
  // Size mappings
  const sizes = {
    sm: { icon: 24, text: "text-base", gap: "gap-2", height: "h-6" },
    md: { icon: 32, text: "text-lg", gap: "gap-2.5", height: "h-8" },
    lg: { icon: 40, text: "text-xl", gap: "gap-3", height: "h-10" },
    xl: { icon: 48, text: "text-2xl", gap: "gap-3.5", height: "h-12" },
  };
  
  // Color mappings
  const colors = {
    default: "#111827",
    mono: "#0F172A",
    gradient: "gradient",
    white: "#FFFFFF",
  };
  
  const { icon: iconSize, text: textSize, gap, height } = sizes[size];
  const fillColor = colors[color];
  
  // Text color class
  const textColorClass = {
    default: "text-gray-900",
    mono: "text-slate-900",
    gradient: "bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent",
    white: "text-white",
  }[color];

  // Icon only
  if (variant === "icon") {
    return (
      <div className={className}>
        <SmaklyIconSVG color={fillColor} size={iconSize} />
      </div>
    );
  }

  // Wordmark only
  if (variant === "wordmark") {
    return (
      <span className={`font-semibold tracking-tight ${textSize} ${textColorClass} ${className}`}>
        smakly
      </span>
    );
  }

  // Stacked layout
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <SmaklyIconSVG color={fillColor} size={iconSize * 1.25} />
        <span className={`font-semibold tracking-tight ${textSize} ${textColorClass}`}>
          smakly
        </span>
      </div>
    );
  }

  // Default: Horizontal layout
  return (
    <div className={`flex items-center ${gap} ${height} ${className}`}>
      <SmaklyIconSVG color={fillColor} size={iconSize} />
      <span className={`font-semibold tracking-tight ${textSize} ${textColorClass}`}>
        smakly
      </span>
    </div>
  );
}

// Export individual components for flexibility
export { SmaklyIconSVG };

