import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o contrato?",
    answer: "Trabalhamos com contratos flexíveis, podendo ser por projeto, sprints ou retainer mensal. Definimos escopo, entregas e métricas de sucesso juntos antes de começar.",
  },
  {
    question: "Quanto tempo leva o assessment?",
    answer: "Um assessment típico leva de 2 a 4 semanas, dependendo da complexidade do sistema. Ao final, você recebe um relatório detalhado com diagnóstico, recomendações priorizadas e roadmap sugerido.",
  },
  {
    question: "Vocês garantem confidencialidade?",
    answer: "Sim, assinamos NDA antes de qualquer imersão. Toda informação de negócio e código é tratada com máximo sigilo.",
  },
  {
    question: "O trabalho é remoto?",
    answer: "Sim, trabalhamos 100% remoto com equipes distribuídas. Usamos ferramentas de colaboração assíncrona e síncrona para manter alinhamento contínuo.",
  },
  {
    question: "Quais modelos de entrega vocês oferecem?",
    answer: "Oferecemos: (1) Consultoria pontual para decisões arquiteturais, (2) Squads dedicados para implementação, (3) Coaching e mentoria para times internos, (4) Workshops e treinamentos customizados.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre como trabalhamos.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-medium hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
