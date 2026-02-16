import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const AssessmentSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const items = tArray("pages.diagnostic.assessment.items");

  return (
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
            <Search className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.diagnostic.assessment.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentSection;
