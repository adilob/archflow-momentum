import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBookingHref, isExternalBooking } from "@/utils/booking";
import { getTranslation } from "@/utils/i18n";
import FlowingBackground from "../FlowingBackground";

export const DiagnosticHero = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const bookingHref = getBookingHref(language);
  const isExternal = isExternalBooking();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <FlowingBackground />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stethoscope className="text-primary" size={32} />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("pages.diagnostic.hero.headline")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("pages.diagnostic.hero.subheadline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {isExternal ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center justify-center gap-2"
              >
                {t("pages.diagnostic.hero.cta")}
                <ArrowRight size={18} />
              </a>
            ) : (
              <Link
                to={bookingHref}
                className="btn-gradient inline-flex items-center justify-center gap-2"
              >
                {t("pages.diagnostic.hero.cta")}
                <ArrowRight size={18} />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticHero;
