import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Depoimento disponível em breve.",
    author: "Cliente do setor de saúde",
    role: "CTO",
  },
  {
    quote: "Depoimento disponível em breve.",
    author: "Cliente do setor financeiro",
    role: "VP de Engenharia",
  },
  {
    quote: "Depoimento disponível em breve.",
    author: "Cliente SaaS",
    role: "Head of Engineering",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedbacks de quem já transformou sua arquitetura conosco.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-muted-foreground italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-flow opacity-30" />
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
