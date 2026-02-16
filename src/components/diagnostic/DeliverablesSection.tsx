import { motion } from "framer-motion";
import { Package, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const DeliverablesSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const items = tArray("pages.diagnostic.deliverables.items");

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Package className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.diagnostic.deliverables.title")}
            </h2>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle className="text-cyan-flow flex-shrink-0 mt-0.5" size={20} />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
