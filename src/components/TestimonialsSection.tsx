import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/i18n";
import ptTranslations from "@/locales/pt.json";
import enTranslations from "@/locales/en.json";
import type { Language } from "@/contexts/LanguageContext";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const translationFiles: Record<Language, Record<string, unknown>> = {
  pt: ptTranslations,
  en: enTranslations,
};

const getTestimonials = (language: Language): Testimonial[] => {
  const data = translationFiles[language] as Record<string, unknown>;
  const testimonials = data?.testimonials as { items?: Testimonial[] } | undefined;
  return testimonials?.items ?? [];
};

export const TestimonialsSection = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const testimonials = getTestimonials(language);

  if (testimonials.length === 0) return null;

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
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div
          className={`grid gap-6 ${
            testimonials.length === 1
              ? "max-w-xl mx-auto"
              : testimonials.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
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
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
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
