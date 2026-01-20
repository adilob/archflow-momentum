import { motion } from "framer-motion";
import { 
  Search, 
  Map, 
  Palette, 
  Code, 
  Cloud, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t("services.items.assessment.title"),
      description: t("services.items.assessment.description"),
    },
    {
      icon: Map,
      title: t("services.items.roadmap.title"),
      description: t("services.items.roadmap.description"),
    },
    {
      icon: Palette,
      title: t("services.items.design.title"),
      description: t("services.items.design.description"),
    },
    {
      icon: Code,
      title: t("services.items.implementation.title"),
      description: t("services.items.implementation.description"),
    },
    {
      icon: Cloud,
      title: t("services.items.cloud.title"),
      description: t("services.items.cloud.description"),
    },
    {
      icon: GraduationCap,
      title: t("services.items.workshops.title"),
      description: t("services.items.workshops.description"),
    },
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")} <span className="gradient-text">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-flow flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Secondary CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={handleScrollToContact}
            className="btn-outline inline-flex items-center gap-2 group"
          >
            {t("services.cta")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
