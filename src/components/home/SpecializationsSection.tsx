import { motion } from "framer-motion";
import { Network, Cloud, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";

const icons = {
  distributed: Network,
  cloud: Cloud,
  dotnet: Code2,
};

export const SpecializationsSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const specializations = ["distributed", "cloud", "dotnet"] as const;

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("pages.home.specializations.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specializations.map((key, index) => {
            const Icon = icons[key];
            return (
              <motion.div
                key={key}
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {t(`pages.home.specializations.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`pages.home.specializations.items.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
