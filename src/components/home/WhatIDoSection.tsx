import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const WhatIDoSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const focusItems = tArray("pages.home.whatIDo.focus");

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Search className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.home.whatIDo.title")}
            </h2>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            {t("pages.home.whatIDo.body")}
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {focusItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-flow flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg font-medium text-foreground">
            {t("pages.home.whatIDo.close")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
