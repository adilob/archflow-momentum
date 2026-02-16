import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { ArchflowLogo } from "./ArchflowLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const navItems = [
    { label: t("footer.nav.home"), path: getLocalizedRoute("home", language) },
    { label: t("footer.nav.diagnostic"), path: getLocalizedRoute("diagnostic", language) },
    { label: t("footer.nav.about"), path: getLocalizedRoute("about", language) },
    { label: t("footer.nav.contact"), path: getLocalizedRoute("contact", language) },
  ];

  return (
    <footer className="py-12 border-t border-border/50 bg-card/20">
      <div className="section-container">
        <div className="flex flex-col gap-8">
          {/* Top row: Logo and Tagline */}
          <motion.div
            className="flex flex-col items-center text-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArchflowLogo size="sm" />
            <p className="text-sm text-muted-foreground max-w-md">
              {t("footer.tagline")}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/adilobertoncello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground text-center pt-6 border-t border-border/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {currentYear} Archflow.tech. {t("footer.rights")}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
