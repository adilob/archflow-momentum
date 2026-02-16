import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const ApproachSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const items = tArray("pages.home.approach.items");

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
            <Layers className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.home.approach.title")}
            </h2>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            {t("pages.home.approach.body")}
          </p>

          <ul className="space-y-4 mb-8">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-flow mt-2.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-lg font-medium text-foreground">
            {t("pages.home.approach.close")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
