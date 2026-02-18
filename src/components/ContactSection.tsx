import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          challenge: formData.challenge,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: language === "pt" ? "Mensagem enviada!" : "Message sent!",
        description: language === "pt"
          ? "Entraremos em contato em breve."
          : "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", challenge: "", message: "" });
    } catch (error) {
      toast({
        title: language === "pt" ? "Erro ao enviar" : "Failed to send",
        description: language === "pt"
          ? "Por favor, tente novamente ou entre em contato diretamente."
          : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.form.name")} *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder={t("contact.form.namePlaceholder")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.form.email")} *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder={t("contact.form.emailPlaceholder")} />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">{t("contact.form.company")}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder={t("contact.form.companyPlaceholder")} />
              </div>
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium mb-2">{t("contact.form.challenge")}</label>
                <input type="text" id="challenge" name="challenge" value={formData.challenge} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder={t("contact.form.challengePlaceholder")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.form.message")} *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder={t("contact.form.messagePlaceholder")} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? t("contact.form.sending") : (<>{t("contact.form.submit")}<Send size={18} /></>)}
              </button>
            </form>
          </motion.div>
          <motion.div className="lg:col-span-2 flex flex-col justify-center" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">{t("contact.social.title")}</h3>
              </div>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/adilo-eduardo-bertoncello/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                  <Linkedin size={24} className="text-primary" />
                  <div className="flex-1"><p className="font-medium text-sm">LinkedIn</p><p className="text-muted-foreground text-xs">@archflowtech</p></div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                <a href="mailto:contato@archflow.tech" className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                  <Mail size={24} className="text-primary" />
                  <div className="flex-1"><p className="font-medium text-sm">Email</p><p className="text-muted-foreground text-xs">contato@archflow.tech</p></div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
