import { motion } from "framer-motion";
import { UserX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";

export const NotForSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-cyan-flow/10">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <UserX className="text-muted-foreground" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.about.workWith.notForTitle")}
            </h2>
          </div>

          <p className="text-muted-foreground text-lg">
            {t("pages.about.workWith.notFor")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotForSection;
