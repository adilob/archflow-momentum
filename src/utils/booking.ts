import { Language } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "./routes";

export const getBookingUrl = (): string | null => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  return calendlyUrl || null;
};

export const getBookingHref = (language: Language): string => {
  const calendlyUrl = getBookingUrl();
  if (calendlyUrl) {
    return calendlyUrl;
  }
  // Fallback to contact page
  return getLocalizedRoute("contact", language);
};

export const isExternalBooking = (): boolean => {
  return !!getBookingUrl();
};
