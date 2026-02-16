import { motion } from "framer-motion";
import { FileText, Map, Users, Route, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";

const stepIcons = {
  intake: FileText,
  mapping: Map,
  workshop: Users,
  roadmap: Route,
  support: Headphones,
};

const stepKeys = ["intake", "mapping", "workshop", "roadmap", "support"] as const;

export const DiagnosticProcessSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  return (
    <section className="py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t("pages.diagnostic.process.title")}
          </h2>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-cyan-flow hidden md:block" />

            <div className="space-y-8">
              {stepKeys.map((key, index) => {
                const Icon = stepIcons[key];
                return (
                  <motion.div
                    key={key}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-semibold mb-2">
                        {t(`pages.diagnostic.process.steps.${key}.title`)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(`pages.diagnostic.process.steps.${key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticProcessSection;
