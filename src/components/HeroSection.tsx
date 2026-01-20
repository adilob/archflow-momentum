import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import FlowingBackground from "./FlowingBackground";

export const HeroSection = () => {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FlowingBackground />
      
      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Consultoria em Arquitetura de Software
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Arquitetura que faz seus{" "}
            <span className="gradient-text">sistemas fluírem</span>.
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Consultoria em cloud e event-driven architecture para empresas que 
            precisam escalar com segurança.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => handleScrollToSection("#contato")}
              className="btn-gradient flex items-center gap-2 group"
            >
              Agendar conversa
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollToSection("#servicos")}
              className="btn-outline flex items-center gap-2"
            >
              Ver serviços
            </button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Especialistas que guiam, criam e caminham junto com você
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
              <span className="text-sm font-medium">Event-Driven</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm font-medium">Cloud Native</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm font-medium">Microservices</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="text-sm font-medium">DDD</span>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleScrollToSection("#proposta")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2 }
          }}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
