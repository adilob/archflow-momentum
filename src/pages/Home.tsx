import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/utils/routes";
import { getTranslation } from "@/utils/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HeroSection,
  PositioningStrip,
  BottleneckSection,
  WhatIDoSection,
  SpecializationsSection,
  ApproachSection,
  AboutTeaserSection,
  CTABandSection,
} from "@/components/home";

const Home = () => {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const canonicalUrl = `https://archflow.tech${getLocalizedRoute("home", language)}`;
  const alternateEn = "https://archflow.tech/";
  const alternatePt = "https://archflow.tech/pt";

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-BR" : "en-US"} />
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={t("meta.home.description")} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={alternateEn} />
        <link rel="alternate" hrefLang="pt" href={alternatePt} />
        <link rel="alternate" hrefLang="x-default" href={alternateEn} />

        <meta property="og:title" content={t("meta.home.title")} />
        <meta property="og:description" content={t("meta.home.description")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === "pt" ? "pt_BR" : "en_US"} />
        <meta property="og:image" content="https://archflow.tech/og/home.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.home.title")} />
        <meta name="twitter:description" content={t("meta.home.description")} />
        <meta name="twitter:image" content="https://archflow.tech/og/home.png" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <PositioningStrip />
        <BottleneckSection />
        <WhatIDoSection />
        <SpecializationsSection />
        <ApproachSection />
        <AboutTeaserSection />
        <CTABandSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
