import { motion } from "framer-motion";

export const FlowingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* SVG flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Flowing curves */}
        <motion.path
          d="M-100,200 Q200,100 400,250 T800,200 T1200,300 T1600,200 T2000,250"
          className="flow-line animate-flow"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,400 Q300,300 500,450 T900,350 T1300,450 T1700,350 T2100,400"
          className="flow-line animate-flow"
          style={{ animationDelay: '2s' }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,600 Q250,500 450,650 T850,550 T1250,650 T1650,550 T2050,600"
          className="flow-line animate-flow"
          style={{ animationDelay: '4s' }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Event nodes */}
        {[
          { cx: 400, cy: 250, delay: 0 },
          { cx: 800, cy: 200, delay: 0.5 },
          { cx: 500, cy: 450, delay: 1 },
          { cx: 900, cy: 350, delay: 1.5 },
          { cx: 450, cy: 650, delay: 2 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="url(#gradient-line)"
            className="animate-node"
            style={{ animationDelay: `${node.delay}s` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + node.delay * 0.5, duration: 0.5 }}
          />
        ))}
      </svg>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default FlowingBackground;
