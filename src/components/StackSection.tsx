import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const technologies = [
  ".NET", "C#", "Azure", "AWS", "Kubernetes", "Terraform",
  "Event-Driven", "Microservices", "Observability", "CI/CD",
  "RabbitMQ", "Kafka", "Docker", "PostgreSQL", "MongoDB", "Redis"
];

export const StackSection = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("stack.title")} <span className="gradient-text">{t("stack.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("stack.subtitle")}
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-badge cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Event-driven diagram */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass-card p-8">
            <h3 className="font-display font-semibold text-center mb-8 text-lg">
              {t("stack.diagramTitle")}
            </h3>
            <svg
              viewBox="0 0 600 120"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              
              {/* Producer */}
              <g>
                <rect x="20" y="35" width="100" height="50" rx="8" fill="none" stroke="url(#flow-gradient)" strokeWidth="2" />
                <text x="70" y="65" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="Space Grotesk">Producer</text>
              </g>
              
              {/* Arrow 1 */}
              <motion.path
                d="M125 60 L175 60"
                stroke="url(#flow-gradient)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              {/* Event Bus */}
              <g>
                <rect x="180" y="25" width="120" height="70" rx="8" fill="hsl(217 91% 53% / 0.1)" stroke="url(#flow-gradient)" strokeWidth="2" />
                <text x="240" y="55" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="Space Grotesk">Event Bus</text>
                <text x="240" y="75" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter">Kafka / RabbitMQ</text>
              </g>
              
              {/* Arrow 2 */}
              <motion.path
                d="M305 60 L355 60"
                stroke="url(#flow-gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              
              {/* Consumers */}
              <g>
                <rect x="360" y="10" width="100" height="40" rx="6" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <text x="410" y="35" textAnchor="middle" fill="#E5E7EB" fontSize="11" fontFamily="Space Grotesk">Consumer A</text>
              </g>
              <g>
                <rect x="360" y="60" width="100" height="40" rx="6" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <text x="410" y="85" textAnchor="middle" fill="#E5E7EB" fontSize="11" fontFamily="Space Grotesk">Consumer B</text>
              </g>
              
              {/* Arrows to consumers */}
              <motion.path
                d="M305 50 L355 30"
                stroke="url(#flow-gradient)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.path
                d="M305 70 L355 80"
                stroke="url(#flow-gradient)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              
              {/* Storage */}
              <g>
                <rect x="480" y="35" width="100" height="50" rx="8" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
                <text x="530" y="60" textAnchor="middle" fill="#E5E7EB" fontSize="11" fontFamily="Space Grotesk">{t("stack.diagramPersistence")}</text>
                <text x="530" y="75" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter">DB / Cache</text>
              </g>
              
              {/* Arrow to storage */}
              <motion.path
                d="M465 60 L475 60"
                stroke="#F59E0B"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StackSection;
