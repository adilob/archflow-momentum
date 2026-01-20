import { motion } from "framer-motion";
import { ArchflowLogo } from "./ArchflowLogo";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <ArchflowLogo size="sm" />
          </motion.div>
          <motion.div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <a href="#servicos" className="hover:text-foreground transition-colors">{t("header.services")}</a>
            <a href="#processo" className="hover:text-foreground transition-colors">{t("header.process")}</a>
            <a href="#stack" className="hover:text-foreground transition-colors">{t("header.stack")}</a>
            <a href="#faq" className="hover:text-foreground transition-colors">{t("header.faq")}</a>
            <a href="#contato" className="hover:text-foreground transition-colors">{t("header.contact")}</a>
          </motion.div>
          <motion.p className="text-sm text-muted-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            © {currentYear} Archflow.tech. {t("footer.rights")}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
