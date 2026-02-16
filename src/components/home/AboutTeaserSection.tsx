import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation, getTranslationArray } from "@/utils/i18n";

export const AboutTeaserSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const tArray = (key: string) => getTranslationArray(key, language);

  const expertise = tArray("pages.home.aboutTeaser.expertise");
  const aboutPath = getLocalizedRoute("about", language);

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
          <div className="flex items-center gap-3 mb-6">
            <User className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("pages.home.aboutTeaser.title")}
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 text-lg">
            {t("pages.home.aboutTeaser.body")}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {expertise.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground mb-8">
            {t("pages.home.aboutTeaser.location")}
          </p>

          <Link
            to={aboutPath}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t("pages.home.aboutTeaser.cta")}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeaserSection;
