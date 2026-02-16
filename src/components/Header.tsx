import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ArchflowLogo from "./ArchflowLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute, type PageKey } from "@/utils/routes";
import { getBookingHref, isExternalBooking } from "@/utils/booking";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const navItems: Array<{ key: PageKey; label: string; path: string }> = [
    { key: "home", label: t("header.home"), path: getLocalizedRoute("home", language) },
    { key: "diagnostic", label: t("header.diagnostic"), path: getLocalizedRoute("diagnostic", language) },
    { key: "about", label: t("header.about"), path: getLocalizedRoute("about", language) },
    { key: "contact", label: t("header.contact"), path: getLocalizedRoute("contact", language) },
  ];

  const bookingHref = getBookingHref(language);
  const isExternal = isExternalBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-border/50" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link to={getLocalizedRoute("home", language)}>
            <ArchflowLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 animated-underline ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageSwitcher />
            {isExternal ? (
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-sm"
              >
                {t("header.cta")}
              </a>
            ) : (
              <Link to={bookingHref} className="btn-gradient text-sm">
                {t("header.cta")}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-card border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `py-2 text-left transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {isExternal ? (
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-center mt-2"
                  onClick={handleNavClick}
                >
                  {t("header.cta")}
                </a>
              ) : (
                <Link
                  to={bookingHref}
                  className="btn-gradient text-center mt-2"
                  onClick={handleNavClick}
                >
                  {t("header.cta")}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
