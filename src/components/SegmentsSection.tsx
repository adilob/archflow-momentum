import { motion } from "framer-motion";
import { Heart, Building2, Laptop, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SegmentsSection = () => {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Heart,
      title: t("segments.items.health.title"),
      description: t("segments.items.health.description"),
    },
    {
      icon: Building2,
      title: t("segments.items.banking.title"),
      description: t("segments.items.banking.description"),
    },
    {
      icon: Laptop,
      title: t("segments.items.saas.title"),
      description: t("segments.items.saas.description"),
    },
    {
      icon: RefreshCw,
      title: t("segments.items.modernization.title"),
      description: t("segments.items.modernization.description"),
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("segments.title")} <span className="gradient-text">{t("segments.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("segments.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <segment.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {segment.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
