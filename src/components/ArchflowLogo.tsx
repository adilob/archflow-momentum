import { motion } from "framer-motion";

interface ArchflowLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 32, text: "text-lg" },
  md: { icon: 40, text: "text-xl" },
  lg: { icon: 48, text: "text-2xl" },
};

export const ArchflowLogo = ({ className = "", showText = true, size = "md" }: ArchflowLogoProps) => {
  const { icon, text } = sizeMap[size];
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Abstract flowing "A" with connected nodes */}
      <motion.svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="archflow-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="archflow-gradient-subtle" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Main flowing "A" path - single continuous line */}
        <motion.path
          d="M8 38 L24 8 L40 38"
          stroke="url(#archflow-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        
        {/* Horizontal flow line through the A */}
        <motion.path
          d="M14 28 Q24 24 34 28"
          stroke="url(#archflow-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        />
        
        {/* Event nodes - connected points suggesting event-driven */}
        <motion.circle
          cx="24"
          cy="8"
          r="3"
          fill="url(#archflow-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
        <motion.circle
          cx="14"
          cy="28"
          r="2.5"
          fill="url(#archflow-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        />
        <motion.circle
          cx="34"
          cy="28"
          r="2.5"
          fill="url(#archflow-gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        />
        
        {/* Subtle flow accent */}
        <motion.path
          d="M24 8 Q30 18 24 26"
          stroke="url(#archflow-gradient-subtle)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </motion.svg>
      
      {showText && (
        <motion.span
          className={`font-display font-semibold ${text} tracking-tight`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-foreground">Arch</span>
          <span className="gradient-text">flow</span>
        </motion.span>
      )}
    </div>
  );
};

// Icon-only version for favicon/small uses
export const ArchflowIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="archflow-icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <path
      d="M8 38 L24 8 L40 38"
      stroke="url(#archflow-icon-gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M14 28 Q24 24 34 28"
      stroke="url(#archflow-icon-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="24" cy="8" r="3" fill="url(#archflow-icon-gradient)" />
    <circle cx="14" cy="28" r="2.5" fill="url(#archflow-icon-gradient)" />
    <circle cx="34" cy="28" r="2.5" fill="url(#archflow-icon-gradient)" />
  </svg>
);

export default ArchflowLogo;
