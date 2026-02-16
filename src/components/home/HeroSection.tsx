import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBookingHref, isExternalBooking } from "@/utils/booking";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";
import FlowingBackground from "../FlowingBackground";

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const bookingHref = getBookingHref(language);
  const isExternal = isExternalBooking();
  const contactPath = getLocalizedRoute("contact", language);

  // Check if portrait image exists
  const hasPortrait = true; // Portrait image added

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0B0F14]">
      <FlowingBackground />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("pages.home.hero.headline")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl lg:mx-0 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("pages.home.hero.subheadline")}
            </motion.p>

            <motion.p
              className="text-sm text-primary font-medium mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("pages.home.hero.tags")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {isExternal ? (
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center justify-center gap-2"
                >
                  {t("pages.home.hero.ctaPrimary")}
                  <ArrowRight size={18} />
                </a>
              ) : (
                <Link
                  to={bookingHref}
                  className="btn-gradient inline-flex items-center justify-center gap-2"
                >
                  {t("pages.home.hero.ctaPrimary")}
                  <ArrowRight size={18} />
                </Link>
              )}
              <Link
                to={contactPath}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {t("pages.home.hero.ctaSecondary")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-lg">
              {hasPortrait ? (
                <>
                  {/* Left shadow gradient for blending */}
                  <div className="absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/80 to-transparent z-10 pointer-events-none" />

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10" />

                  {/* Portrait image */}
                  <img
                    src="/images/adilo-portrait.jpeg"
                    alt="Adilo Bertoncello - Distributed Systems Architect"
                    className="relative rounded-lg w-full h-auto object-cover shadow-2xl"
                    style={{
                      boxShadow:
                        "4px 0 20px -2px rgba(37, 99, 235, 0.3), inset -1px 0 0 rgba(37, 99, 235, 0.2)",
                    }}
                  />
                </>
              ) : (
                /* Placeholder for portrait */
                <div className="w-full aspect-[3/4] rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center border border-primary/20 shadow-2xl">
                  <User size={120} className="text-primary/40 mb-4" />
                  <p className="text-sm text-muted-foreground">Portrait coming soon</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
