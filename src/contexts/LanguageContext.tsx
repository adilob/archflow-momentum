import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("archflow-language");
    if (stored === "pt" || stored === "en") {
      return stored;
    }
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("en")) {
      return "en";
    }
    return "pt"; // Default to Portuguese
  });

  useEffect(() => {
    localStorage.setItem("archflow-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<Language, Record<string, any>> = {
  pt: {
    // Header
    header: {
      services: "Serviços",
      process: "Como Trabalhamos",
      stack: "Stack",
      faq: "FAQ",
      contact: "Contato",
      cta: "Agendar conversa",
    },
    // Hero
    hero: {
      badge: "Consultoria em Arquitetura de Software",
      headline: "Arquitetura que faz seus",
      headlineHighlight: "sistemas fluírem",
      subheadline: "Consultoria em cloud e event-driven architecture para empresas que precisam escalar com segurança.",
      cta: "Agendar conversa",
      ctaSecondary: "Ver serviços",
      trust: "Especialistas que guiam, criam e caminham junto com você",
    },
    // Value Proposition
    value: {
      title: "Por que a",
      titleHighlight: "Archflow",
      subtitle: "Combinamos expertise técnica profunda com uma abordagem centrada no negócio.",
      props: {
        events: {
          title: "Arquitetura orientada a eventos",
          description: "Sistemas desacoplados e reativos que escalam conforme a demanda.",
        },
        modernization: {
          title: "Modernização sem riscos",
          description: "Estratégias incrementais que preservam o negócio enquanto evoluem a tecnologia.",
        },
        cloud: {
          title: "Cloud escalável e segura",
          description: "Infraestrutura otimizada para performance, custo e compliance.",
        },
        observability: {
          title: "Observabilidade e resiliência",
          description: "Visibilidade total e recuperação automática para sistemas críticos.",
        },
        scrum: {
          title: "Entregas incrementais com Scrum",
          description: "Valor entregue continuamente com feedback constante.",
        },
      },
    },
    // Services
    services: {
      title: "Nossos",
      titleHighlight: "Serviços",
      subtitle: "Soluções completas para cada fase da jornada de modernização.",
      cta: "Solicitar Architecture Health Check",
      items: {
        assessment: {
          title: "Assessment de arquitetura",
          description: "Análise profunda da sua arquitetura atual, identificando gaps, riscos e oportunidades de melhoria.",
        },
        roadmap: {
          title: "Roadmap de modernização",
          description: "Planejamento estratégico com entregas incrementais que geram valor desde o primeiro sprint.",
        },
        design: {
          title: "Design de soluções",
          description: "Modelagem com DDD, diagramas C4 e ADRs para decisões arquiteturais documentadas.",
        },
        implementation: {
          title: "Implementação guiada",
          description: "Acompanhamento hands-on do time durante a execução, garantindo qualidade e aprendizado.",
        },
        cloud: {
          title: "Plataforma Cloud & DevOps",
          description: "Setup de infraestrutura como código, CI/CD, observabilidade e práticas de SRE.",
        },
        workshops: {
          title: "Workshops e treinamentos",
          description: "Capacitação do time em event-driven, DDD, cloud patterns e práticas modernas.",
        },
      },
    },
    // Process
    process: {
      title: "Como",
      titleHighlight: "Trabalhamos",
      subtitle: "Uma parceria próxima do início ao fim. Não entregamos documentos e vamos embora — caminhamos junto com você.",
      cta: "Vamos conversar",
      ctaSubtitle: "Pronto para começar sua jornada de modernização?",
      steps: {
        discovery: {
          title: "Discovery & Diagnóstico",
          description: "Imersão no contexto de negócio e tecnologia. Entendemos seus desafios, mapeamos a arquitetura atual e identificamos quick wins.",
        },
        architecture: {
          title: "Arquitetura & Roadmap",
          description: "Desenhamos a arquitetura alvo e criamos um roadmap priorizado por valor de negócio e viabilidade técnica.",
        },
        delivery: {
          title: "Entregas incrementais",
          description: "Trabalhamos junto com seu time em sprints, entregando valor a cada iteração com transferência contínua de conhecimento.",
        },
        operation: {
          title: "Operação & Evolução contínua",
          description: "Acompanhamos a operação, refinamos a arquitetura e garantimos que o sistema evolua de forma sustentável.",
        },
      },
    },
    // Segments
    segments: {
      title: "Segmentos que",
      titleHighlight: "Atendemos",
      subtitle: "Experiência comprovada em setores com alta demanda por confiabilidade e escala.",
      items: {
        health: {
          title: "Saúde",
          description: "Sistemas críticos com alta disponibilidade, compliance e integração entre múltiplos sistemas.",
        },
        banking: {
          title: "Bancos digitais",
          description: "Arquiteturas escaláveis para processamento de transações em tempo real.",
        },
        saas: {
          title: "Plataformas SaaS",
          description: "Multi-tenancy, escalabilidade horizontal e otimização de custos em cloud.",
        },
        modernization: {
          title: "Empresas em modernização",
          description: "Migração de legado para arquiteturas modernas sem interromper o negócio.",
        },
      },
    },
    // Cases
    cases: {
      title: "Cases de",
      titleHighlight: "Sucesso",
      subtitle: "Resultados reais de transformações arquiteturais.",
      status: "Em breve",
      items: {
        health: {
          title: "Modernização de plataforma de saúde",
        },
        banking: {
          title: "Arquitetura para banco digital",
        },
        saas: {
          title: "Migração de monolito SaaS",
        },
      },
    },
    // Stack
    stack: {
      title: "Nossa",
      titleHighlight: "Stack",
      subtitle: "Tecnologias e práticas que dominamos para entregar soluções robustas.",
      diagramTitle: "Event-Driven Architecture Flow",
      diagramPersistence: "Persistência",
    },
    // Testimonials
    testimonials: {
      title: "O que dizem nossos",
      titleHighlight: "Clientes",
      subtitle: "Feedbacks de quem já transformou sua arquitetura conosco.",
      placeholder: "Depoimento disponível em breve.",
      clients: {
        health: "Cliente do setor de saúde",
        finance: "Cliente do setor financeiro",
        saas: "Cliente SaaS",
      },
    },
    // FAQ
    faq: {
      title: "Perguntas",
      titleHighlight: "Frequentes",
      subtitle: "Tire suas dúvidas sobre como trabalhamos.",
      items: {
        contract: {
          question: "Como funciona o contrato?",
          answer: "Trabalhamos com contratos flexíveis, podendo ser por projeto, sprints ou retainer mensal. Definimos escopo, entregas e métricas de sucesso juntos antes de começar.",
        },
        assessment: {
          question: "Quanto tempo leva o assessment?",
          answer: "Um assessment típico leva de 2 a 4 semanas, dependendo da complexidade do sistema. Ao final, você recebe um relatório detalhado com diagnóstico, recomendações priorizadas e roadmap sugerido.",
        },
        confidentiality: {
          question: "Vocês garantem confidencialidade?",
          answer: "Sim, assinamos NDA antes de qualquer imersão. Toda informação de negócio e código é tratada com máximo sigilo.",
        },
        remote: {
          question: "O trabalho é remoto?",
          answer: "Sim, trabalhamos 100% remoto com equipes distribuídas. Usamos ferramentas de colaboração assíncrona e síncrona para manter alinhamento contínuo.",
        },
        delivery: {
          question: "Quais modelos de entrega vocês oferecem?",
          answer: "Oferecemos: (1) Consultoria pontual para decisões arquiteturais, (2) Squads dedicados para implementação, (3) Coaching e mentoria para times internos, (4) Workshops e treinamentos customizados.",
        },
      },
    },
    // Contact
    contact: {
      title: "Vamos",
      titleHighlight: "Conversar",
      subtitle: "Conte-nos sobre seu desafio. Responderemos em até 24 horas.",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome completo",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        company: "Empresa",
        companyPlaceholder: "Nome da sua empresa",
        challenge: "Principal desafio",
        challengePlaceholder: "Ex: Modernização de legado",
        message: "Mensagem",
        messagePlaceholder: "Descreva brevemente seu cenário e objetivos...",
        submit: "Enviar mensagem",
        sending: "Enviando...",
      },
      social: {
        title: "Ou entre em contato diretamente:",
      },
    },
    // Footer
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    // Header
    header: {
      services: "Services",
      process: "How We Work",
      stack: "Stack",
      faq: "FAQ",
      contact: "Contact",
      cta: "Schedule a call",
    },
    // Hero
    hero: {
      badge: "Software Architecture Consulting",
      headline: "Architecture that makes your",
      headlineHighlight: "systems flow",
      subheadline: "Cloud and event-driven architecture consulting for companies that need to scale with confidence.",
      cta: "Schedule a call",
      ctaSecondary: "View services",
      trust: "Specialists who guide, create, and walk alongside you",
    },
    // Value Proposition
    value: {
      title: "Why",
      titleHighlight: "Archflow",
      subtitle: "We combine deep technical expertise with a business-centered approach.",
      props: {
        events: {
          title: "Event-driven architecture",
          description: "Decoupled and reactive systems that scale on demand.",
        },
        modernization: {
          title: "Risk-free modernization",
          description: "Incremental strategies that preserve business while evolving technology.",
        },
        cloud: {
          title: "Scalable and secure cloud",
          description: "Infrastructure optimized for performance, cost, and compliance.",
        },
        observability: {
          title: "Observability and resilience",
          description: "Full visibility and automatic recovery for critical systems.",
        },
        scrum: {
          title: "Incremental delivery with Scrum",
          description: "Value delivered continuously with constant feedback.",
        },
      },
    },
    // Services
    services: {
      title: "Our",
      titleHighlight: "Services",
      subtitle: "Complete solutions for every phase of the modernization journey.",
      cta: "Request Architecture Health Check",
      items: {
        assessment: {
          title: "Architecture assessment",
          description: "Deep analysis of your current architecture, identifying gaps, risks, and improvement opportunities.",
        },
        roadmap: {
          title: "Modernization roadmap",
          description: "Strategic planning with incremental deliveries that generate value from the first sprint.",
        },
        design: {
          title: "Solution design",
          description: "Modeling with DDD, C4 diagrams, and ADRs for documented architectural decisions.",
        },
        implementation: {
          title: "Guided implementation",
          description: "Hands-on support for your team during execution, ensuring quality and learning.",
        },
        cloud: {
          title: "Cloud & DevOps platform",
          description: "Infrastructure as code setup, CI/CD, observability, and SRE practices.",
        },
        workshops: {
          title: "Workshops and training",
          description: "Team enablement on event-driven, DDD, cloud patterns, and modern practices.",
        },
      },
    },
    // Process
    process: {
      title: "How We",
      titleHighlight: "Work",
      subtitle: "A close partnership from start to finish. We don't just deliver documents and leave — we walk alongside you.",
      cta: "Let's talk",
      ctaSubtitle: "Ready to start your modernization journey?",
      steps: {
        discovery: {
          title: "Discovery & Diagnosis",
          description: "Immersion in business and technology context. We understand your challenges, map the current architecture, and identify quick wins.",
        },
        architecture: {
          title: "Architecture & Roadmap",
          description: "We design the target architecture and create a roadmap prioritized by business value and technical feasibility.",
        },
        delivery: {
          title: "Incremental deliveries",
          description: "We work alongside your team in sprints, delivering value at each iteration with continuous knowledge transfer.",
        },
        operation: {
          title: "Operation & Continuous evolution",
          description: "We monitor operations, refine the architecture, and ensure the system evolves sustainably.",
        },
      },
    },
    // Segments
    segments: {
      title: "Industries We",
      titleHighlight: "Serve",
      subtitle: "Proven experience in sectors with high demand for reliability and scale.",
      items: {
        health: {
          title: "Healthcare",
          description: "Critical systems with high availability, compliance, and integration across multiple systems.",
        },
        banking: {
          title: "Digital banks",
          description: "Scalable architectures for real-time transaction processing.",
        },
        saas: {
          title: "SaaS platforms",
          description: "Multi-tenancy, horizontal scalability, and cloud cost optimization.",
        },
        modernization: {
          title: "Modernizing companies",
          description: "Legacy migration to modern architectures without disrupting business.",
        },
      },
    },
    // Cases
    cases: {
      title: "Success",
      titleHighlight: "Stories",
      subtitle: "Real results from architectural transformations.",
      status: "Coming soon",
      items: {
        health: {
          title: "Healthcare platform modernization",
        },
        banking: {
          title: "Digital bank architecture",
        },
        saas: {
          title: "SaaS monolith migration",
        },
      },
    },
    // Stack
    stack: {
      title: "Our",
      titleHighlight: "Stack",
      subtitle: "Technologies and practices we master to deliver robust solutions.",
      diagramTitle: "Event-Driven Architecture Flow",
      diagramPersistence: "Persistence",
    },
    // Testimonials
    testimonials: {
      title: "What Our",
      titleHighlight: "Clients Say",
      subtitle: "Feedback from those who have transformed their architecture with us.",
      placeholder: "Testimonial coming soon.",
      clients: {
        health: "Healthcare sector client",
        finance: "Financial sector client",
        saas: "SaaS client",
      },
    },
    // FAQ
    faq: {
      title: "Frequently Asked",
      titleHighlight: "Questions",
      subtitle: "Get answers about how we work.",
      items: {
        contract: {
          question: "How does the contract work?",
          answer: "We work with flexible contracts, which can be per project, sprints, or monthly retainer. We define scope, deliverables, and success metrics together before starting.",
        },
        assessment: {
          question: "How long does the assessment take?",
          answer: "A typical assessment takes 2 to 4 weeks, depending on system complexity. At the end, you receive a detailed report with diagnosis, prioritized recommendations, and suggested roadmap.",
        },
        confidentiality: {
          question: "Do you guarantee confidentiality?",
          answer: "Yes, we sign an NDA before any immersion. All business and code information is treated with maximum confidentiality.",
        },
        remote: {
          question: "Is the work remote?",
          answer: "Yes, we work 100% remotely with distributed teams. We use asynchronous and synchronous collaboration tools to maintain continuous alignment.",
        },
        delivery: {
          question: "What delivery models do you offer?",
          answer: "We offer: (1) Punctual consulting for architectural decisions, (2) Dedicated squads for implementation, (3) Coaching and mentoring for internal teams, (4) Customized workshops and training.",
        },
      },
    },
    // Contact
    contact: {
      title: "Let's",
      titleHighlight: "Talk",
      subtitle: "Tell us about your challenge. We'll respond within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        company: "Company",
        companyPlaceholder: "Your company name",
        challenge: "Main challenge",
        challengePlaceholder: "E.g.: Legacy modernization",
        message: "Message",
        messagePlaceholder: "Briefly describe your scenario and objectives...",
        submit: "Send message",
        sending: "Sending...",
      },
      social: {
        title: "Or contact us directly:",
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
    },
  },
};
