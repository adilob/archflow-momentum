import { motion } from "framer-motion";
import { ArchflowLogo } from "./ArchflowLogo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArchflowLogo size="sm" />
          </motion.div>
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#servicos" className="hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#processo" className="hover:text-foreground transition-colors">
              Processo
            </a>
            <a href="#stack" className="hover:text-foreground transition-colors">
              Stack
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contato" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </motion.div>
          
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} Archflow.tech. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
