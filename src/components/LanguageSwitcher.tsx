import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleSwitch = (lang: Language) => {
    setLanguage(lang);
    navigate(`/${lang}`);
  };

  return (
    <div className="flex items-center gap-1 rounded-full glass-card p-1">
      <motion.button
        onClick={() => handleSwitch("pt")}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileTap={{ scale: 0.95 }}
        aria-label="Português"
      >
        PT
      </motion.button>
      <motion.button
        onClick={() => handleSwitch("en")}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileTap={{ scale: 0.95 }}
        aria-label="English"
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
