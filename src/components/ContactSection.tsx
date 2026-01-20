import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ name: "", email: "", company: "", challenge: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conte-nos sobre seu desafio. Respondemos em até 24 horas úteis.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Nome da empresa"
                />
              </div>
              
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                  Principal desafio
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="modernizacao">Modernização de legado</option>
                  <option value="escala">Problemas de escala</option>
                  <option value="cloud">Migração para cloud</option>
                  <option value="arquitetura">Redesenho de arquitetura</option>
                  <option value="eventos">Event-driven architecture</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Conte-nos mais sobre seu projeto ou desafio..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Prefere outro canal?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Entre em contato diretamente:
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/company/archflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <Linkedin size={24} className="text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">LinkedIn</p>
                    <p className="text-muted-foreground text-xs">@archflow</p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                
                <a
                  href="mailto:contato@archflow.tech"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <Mail size={24} className="text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-muted-foreground text-xs">contato@archflow.tech</p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  ⏱️ Tempo médio de resposta: <strong className="text-foreground">24h úteis</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
