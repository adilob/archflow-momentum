import { motion } from "framer-motion";
import { Zap, Shield, Cloud, Eye, GitBranch, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ValueProposition = () => {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: Zap,
      title: t("value.props.events.title"),
      description: t("value.props.events.description"),
    },
    {
      icon: Shield,
      title: t("value.props.modernization.title"),
      description: t("value.props.modernization.description"),
    },
    {
      icon: Cloud,
      title: t("value.props.cloud.title"),
      description: t("value.props.cloud.description"),
    },
    {
      icon: Eye,
      title: t("value.props.observability.title"),
      description: t("value.props.observability.description"),
    },
    {
      icon: GitBranch,
      title: t("value.props.scrum.title"),
      description: t("value.props.scrum.description"),
    },
  ];

  return (
    <section id="proposta" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("value.title")} <span className="gradient-text">{t("value.titleHighlight")}</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("value.subtitle")}
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className="service-card group"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                  <prop.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
              <ArrowUpRight 
                size={20} 
                className="absolute top-4 right-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
