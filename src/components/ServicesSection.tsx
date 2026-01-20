import { motion } from "framer-motion";
import { 
  Search, 
  Map, 
  Palette, 
  Code, 
  Cloud, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Assessment de arquitetura",
    description: "Análise profunda da sua arquitetura atual, identificando gaps, riscos e oportunidades de melhoria.",
  },
  {
    icon: Map,
    title: "Roadmap de modernização",
    description: "Planejamento estratégico com entregas incrementais que geram valor desde o primeiro sprint.",
  },
  {
    icon: Palette,
    title: "Design de soluções",
    description: "Modelagem com DDD, diagramas C4 e ADRs para decisões arquiteturais documentadas.",
  },
  {
    icon: Code,
    title: "Implementação guiada",
    description: "Acompanhamento hands-on do time durante a execução, garantindo qualidade e aprendizado.",
  },
  {
    icon: Cloud,
    title: "Plataforma Cloud & DevOps",
    description: "Setup de infraestrutura como código, CI/CD, observabilidade e práticas de SRE.",
  },
  {
    icon: GraduationCap,
    title: "Workshops e treinamentos",
    description: "Capacitação do time em event-driven, DDD, cloud patterns e práticas modernas.",
  },
];

export const ServicesSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para cada fase da jornada de modernização.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-flow flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Secondary CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={handleScrollToContact}
            className="btn-outline inline-flex items-center gap-2 group"
          >
            Solicitar Architecture Health Check
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
