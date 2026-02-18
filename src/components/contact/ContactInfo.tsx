import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";

export const ContactInfo = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  return (
    <motion.section
      className="py-12 md:py-16 bg-card/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6">
            {t("pages.contact.info.title")}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${t("pages.contact.info.email")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
            >
              <Mail size={20} className="text-primary" />
              <span>{t("pages.contact.info.email")}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/adilo-eduardo-bertoncello/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={20} className="text-primary" />
              <span>{t("pages.contact.info.linkedin")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
