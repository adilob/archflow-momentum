import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AboutHero,
  StorySection,
  BeliefsSection,
  WorkWithSection,
} from "@/components/about";

const About = () => {
  const { language } = useLanguage();

  const t = (key: string) => getTranslation(key, language);

  const canonicalUrl = `https://archflow.tech${getLocalizedRoute("about", language)}`;
  const alternateEn = "https://archflow.tech/about";
  const alternatePt = "https://archflow.tech/pt/sobre";

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-BR" : "en-US"} />
        <title>{t("meta.about.title")}</title>
        <meta name="description" content={t("meta.about.description")} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={alternateEn} />
        <link rel="alternate" hrefLang="pt" href={alternatePt} />

        <meta property="og:title" content={t("meta.about.title")} />
        <meta property="og:description" content={t("meta.about.description")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content={language === "pt" ? "pt_BR" : "en_US"} />
        <meta property="og:image" content="https://archflow.tech/og/about.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.about.title")} />
        <meta name="twitter:description" content={t("meta.about.description")} />
        <meta name="twitter:image" content="https://archflow.tech/og/about.png" />
      </Helmet>

      <Header />
      <main>
        <AboutHero />
        <StorySection />
        <BeliefsSection />
        <WorkWithSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
