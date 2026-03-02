/**
 * Smakly Logo Component
 * 
 * Premium geometric logo with consistent stroke weights.
 * Norwegian/Scandinavian design - warm neutrals.
 */

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "mono" | "gradient" | "white";
  showWordmark?: boolean;
  withHat?: boolean;
  className?: string;
}

export default function Logo({ 
  size = "md", 
  variant = "default",
  showWordmark = true, 
  withHat = false,
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 22, text: "text-sm", gap: "gap-1.5" },
    md: { icon: 28, text: "text-base", gap: "gap-2" },
    lg: { icon: 36, text: "text-lg", gap: "gap-2.5" },
  };

  const { icon, text, gap } = sizes[size];
  
  // Stroke width scales with size for optical balance
  const strokeWidth = size === "sm" ? 1.5 : 1.75;
  
  // Colors based on variant - warm neutrals
  const getColor = () => {
    switch (variant) {
      case "mono": return "#1A1918";
      case "white": return "#FFFFFF";
      case "gradient": return "url(#logo-gradient)";
      default: return "#1A1918";
    }
  };
  
  const textColorClass = {
    default: "text-[#1A1918]",
    mono: "text-[#1A1918]",
    gradient: "bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] bg-clip-text text-transparent",
    white: "text-white",
  }[variant];

  const color = getColor();
  const accentColor = variant === "white" ? "#FFFFFF" : "#FF6A00";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* Icon - Geometric capsule, optionally with hard hat */}
      <div 
        className={`relative flex items-center justify-center ${variant === "gradient" ? "rounded-lg" : ""}`}
        style={variant === "gradient" ? { width: icon, height: icon, background: "linear-gradient(135deg, #FF6A00, #D63D00)" } : undefined}
      >
          {withHat ? (
          /* ── Original capsule icon, unchanged ── */
          <svg
            width={variant === "gradient" ? icon * 0.5 : icon * 0.7}
            height={variant === "gradient" ? icon * 0.65 : icon * 0.9}
            viewBox="0 0 20 28"
            fill="none"
          >
            <rect x="2" y="2" width="16" height="24" rx="8"
              stroke={variant === "gradient" ? "#FFFFFF" : color}
              strokeWidth={strokeWidth} fill="none" />
            <circle cx="10" cy="9" r="1.75"
              fill={variant === "gradient" ? "#FFFFFF" : color} />
            <rect x="6" y="17" width="8" height="1.75" rx="0.875"
              fill={variant === "gradient" ? "#FFFFFF" : color} />
          </svg>
        ) : (
          <svg
            width={variant === "gradient" ? icon * 0.5 : icon * 0.7}
            height={variant === "gradient" ? icon * 0.65 : icon * 0.9}
            viewBox="0 0 20 28"
            fill="none"
          >
            {variant === "gradient" && !showWordmark && (
              <defs>
                <linearGradient id="logo-gradient" x1="2" y1="2" x2="18" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4F7DF3"/>
                  <stop offset="100%" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
            )}
            {/* Geometric capsule */}
            <rect
              x="2"
              y="2"
              width="16"
              height="24"
              rx="8"
              stroke={variant === "gradient" ? "#FFFFFF" : color}
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Caller dot */}
            <circle
              cx="10"
              cy="9"
              r="1.75"
              fill={variant === "gradient" ? "#FFFFFF" : color}
            />
            {/* Response line */}
            <rect
              x="6"
              y="17"
              width="8"
              height="1.75"
              rx="0.875"
              fill={variant === "gradient" ? "#FFFFFF" : color}
            />
          </svg>
        )}
      </div>
      
      {/* Wordmark - withHat shows "Smak" + orange "ly" */}
      {showWordmark && (
        <span className={`font-bold tracking-tight ${text} ${withHat ? "text-[#0C0C0C]" : textColorClass}`}>
          {withHat ? (
            <>Smak<span className="text-[#FF6A00]">ly</span></>
          ) : (
            "smakly"
          )}
        </span>
      )}
    </div>
  );
}
