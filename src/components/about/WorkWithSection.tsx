import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";

export const WorkWithSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const contactPath = getLocalizedRoute("contact", language);

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
            <Users className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.about.workWith.title")}
            </h2>
          </div>

          <p className="text-muted-foreground text-lg mb-8">
            {t("pages.about.workWith.body")}
          </p>

          <Link
            to={contactPath}
            className="btn-gradient inline-flex items-center justify-center gap-2"
          >
            {t("pages.about.workWith.cta")}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithSection;
