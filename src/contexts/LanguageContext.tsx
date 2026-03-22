import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import ptTranslations from "@/locales/pt.json";
import enTranslations from "@/locales/en.json";

export type Language = "pt" | "en";

// Type-safe translation keys using recursive type
type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<typeof enTranslations>;

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

const translations: Record<Language, typeof enTranslations> = {
  pt: ptTranslations,
  en: enTranslations,
};

// Detect language from URL path
const getLanguageFromPath = (): Language | null => {
  const path = window.location.pathname;
  if (path === "/en" || path.startsWith("/en/")) {
    return "en";
  }
  if (path === "/pt" || path.startsWith("/pt/")) {
    return "pt";
  }
  return null;
};

// Detect initial language with priority: URL > localStorage > browser > default
const getInitialLanguage = (): Language => {
  // 1. Check URL path first
  const urlLang = getLanguageFromPath();
  if (urlLang) {
    return urlLang;
  }

  // 2. Check localStorage
  const stored = localStorage.getItem("archflow-language");
  if (stored === "pt" || stored === "en") {
    return stored;
  }

  // 3. Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("en")) {
    return "en";
  }

  // 4. Default to Portuguese
  return "pt";
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("archflow-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  }, [language]);

  // Sync language when URL path changes
  useEffect(() => {
    const handlePopState = () => {
      const urlLang = getLanguageFromPath();
      if (urlLang && urlLang !== language) {
        setLanguageState(urlLang);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
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
