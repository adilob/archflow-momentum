import { motion } from "framer-motion";
import { Search, Map, Layers, RefreshCw, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search,
      title: t("process.steps.discovery.title"),
      description: t("process.steps.discovery.description"),
    },
    {
      number: "02",
      icon: Map,
      title: t("process.steps.architecture.title"),
      description: t("process.steps.architecture.description"),
    },
    {
      number: "03",
      icon: Layers,
      title: t("process.steps.delivery.title"),
      description: t("process.steps.delivery.description"),
    },
    {
      number: "04",
      icon: RefreshCw,
      title: t("process.steps.operation.title"),
      description: t("process.steps.operation.description"),
    },
  ];

  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("process.title")} <span className="gradient-text">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden sm:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-flow -translate-x-1/2 hidden sm:block shadow-lg shadow-primary/30" />
              
              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} ml-16 sm:ml-0`}>
                <div className="service-card">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-display font-bold gradient-text">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <step.icon size={20} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            {t("process.ctaSubtitle")}
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gradient inline-flex items-center gap-2 group"
          >
            {t("process.cta")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
