import { motion } from "framer-motion";
import { Lightbulb, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const BeliefsSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const beliefs = tArray("pages.about.beliefs.items");
  const expertiseItems = tArray("pages.about.expertise.items");

  return (
    <>
      <section className="py-20 md:py-28 bg-card/30">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="text-primary" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("pages.about.beliefs.title")}
              </h2>
            </div>

            <ul className="space-y-4">
              {beliefs.map((belief, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-cyan-flow flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground">{belief}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {t("pages.about.expertise.title")}
            </h2>

            <div className="flex flex-wrap gap-3">
              {expertiseItems.map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BeliefsSection;
