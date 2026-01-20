import { motion } from "framer-motion";
import { FolderOpen, ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Modernização de plataforma de saúde",
    tags: ["Event-Driven", "Azure", "Microservices"],
    status: "Em breve",
  },
  {
    title: "Arquitetura para banco digital",
    tags: ["AWS", "Kubernetes", "DDD"],
    status: "Em breve",
  },
  {
    title: "Migração de monolito SaaS",
    tags: ["Cloud Native", "Terraform", "CI/CD"],
    status: "Em breve",
  },
];

export const CasesSection = () => {
  return (
    <section id="cases" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cases de <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de transformações arquiteturais.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-primary">
                  {caseItem.status}
                </span>
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-muted">
                  <FolderOpen size={24} className="text-muted-foreground" />
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground/30" />
              </div>
              
              <h3 className="font-display font-semibold text-lg mb-4">
                {caseItem.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {caseItem.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
