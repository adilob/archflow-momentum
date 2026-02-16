import enTranslations from "@/locales/en.json";
import ptTranslations from "@/locales/pt.json";
import type { Language } from "@/contexts/LanguageContext";

const translations = {
  en: enTranslations,
  pt: ptTranslations,
};

export const getTranslation = (key: string, language: Language): string => {
  const keys = key.split(".");
  let value: any = translations[language];

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  return typeof value === "string" ? value : key;
};

export const getTranslationArray = (key: string, language: Language): string[] => {
  const keys = key.split(".");
  let value: any = translations[language];

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return [];
    }
  }

  return Array.isArray(value) ? value : [];
};
