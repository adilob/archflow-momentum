import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBookingHref, isExternalBooking } from "@/utils/booking";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";

export const CTABandSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const bookingHref = getBookingHref(language);
  const isExternal = isExternalBooking();
  const contactPath = getLocalizedRoute("contact", language);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-cyan-flow/10">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("pages.home.ctaBand.title")}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {t("pages.home.ctaBand.body")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isExternal ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center justify-center gap-2"
              >
                {t("pages.home.ctaBand.ctaPrimary")}
                <ArrowRight size={18} />
              </a>
            ) : (
              <Link
                to={bookingHref}
                className="btn-gradient inline-flex items-center justify-center gap-2"
              >
                {t("pages.home.ctaBand.ctaPrimary")}
                <ArrowRight size={18} />
              </Link>
            )}
            <Link
              to={contactPath}
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              {t("pages.home.ctaBand.ctaSecondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABandSection;
