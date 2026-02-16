import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";
import FlowingBackground from "../FlowingBackground";

export const AboutHero = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 bg-[#0B0F14]">
      <FlowingBackground />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* Portrait Column */}
          <motion.div
            className="order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 sm:w-72 lg:w-80">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10" />

              {/* Portrait image */}
              <img
                src="/images/adilo-portrait.jpeg"
                alt="Adilo Bertoncello — Distributed Systems Architect"
                className="relative rounded-xl w-full h-auto object-cover"
                style={{
                  filter: "contrast(1.05) brightness(0.96)",
                  boxShadow:
                    "0 8px 32px -4px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)",
                }}
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="order-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("pages.about.hero.headline")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl lg:mx-0 mx-auto"
              style={{ lineHeight: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("pages.about.hero.intro")}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
