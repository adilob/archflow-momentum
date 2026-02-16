import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";

export const PositioningStrip = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  return (
    <motion.section
      className="py-8 border-y border-border/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <p className="text-center text-muted-foreground text-sm md:text-base">
          {t("pages.home.positioning.text")} 🇧🇷 🇺🇸
        </p>
      </div>
    </motion.section>
  );
};

export default PositioningStrip;
