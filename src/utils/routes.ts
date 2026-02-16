import { Language } from "@/contexts/LanguageContext";

export type PageKey = "home" | "diagnostic" | "about" | "contact";

export const routes: Record<Language, Record<PageKey, string>> = {
  en: {
    home: "/",
    diagnostic: "/architectural-diagnostic",
    about: "/about",
    contact: "/contact",
  },
  pt: {
    home: "/pt",
    diagnostic: "/pt/diagnostico-arquitetural",
    about: "/pt/sobre",
    contact: "/pt/contato",
  },
};

export const getLocalizedRoute = (page: PageKey, lang: Language): string => {
  return routes[lang][page];
};

export const getCurrentPage = (pathname: string): PageKey => {
  const normalizedPath = pathname.toLowerCase();

  // Check PT routes first (more specific)
  if (normalizedPath === "/pt/diagnostico-arquitetural") return "diagnostic";
  if (normalizedPath === "/pt/sobre") return "about";
  if (normalizedPath === "/pt/contato") return "contact";
  if (normalizedPath === "/pt" || normalizedPath === "/pt/") return "home";

  // Check EN routes
  if (normalizedPath === "/architectural-diagnostic") return "diagnostic";
  if (normalizedPath === "/about") return "about";
  if (normalizedPath === "/contact") return "contact";

  // Default to home
  return "home";
};

export const getLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith("/pt")) {
    return "pt";
  }
  return "en";
};
