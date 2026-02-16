import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ContactHero,
  ContactForm,
  ContactInfo,
} from "@/components/contact";

const Contact = () => {
  const { language } = useLanguage();

  const t = (key: string) => getTranslation(key, language);

  const canonicalUrl = `https://archflow.tech${getLocalizedRoute("contact", language)}`;
  const alternateEn = "https://archflow.tech/contact";
  const alternatePt = "https://archflow.tech/pt/contato";

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-BR" : "en-US"} />
        <title>{t("meta.contact.title")}</title>
        <meta name="description" content={t("meta.contact.description")} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={alternateEn} />
        <link rel="alternate" hrefLang="pt" href={alternatePt} />

        <meta property="og:title" content={t("meta.contact.title")} />
        <meta property="og:description" content={t("meta.contact.description")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === "pt" ? "pt_BR" : "en_US"} />
        <meta property="og:image" content="https://archflow.tech/og/contact.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.contact.title")} />
        <meta name="twitter:description" content={t("meta.contact.description")} />
        <meta name="twitter:image" content="https://archflow.tech/og/contact.png" />
      </Helmet>

      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
