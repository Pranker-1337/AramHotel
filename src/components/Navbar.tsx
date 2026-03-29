import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { LANGUAGES } from '../constants';
import { cn } from '../lib/utils';
import { Globe, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-wider",
            isScrolled ? "text-primary" : "text-white"
          )}>
            ARAM HOTEL
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  language === lang.code
                    ? "text-accent border-b-2 border-accent"
                    : isScrolled ? "text-primary/70 hover:text-primary" : "text-white/70 hover:text-white"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a
            href="tel:+992945622222"
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            <Phone size={16} className="text-accent" />
            +992 94 562 2222
          </a>
          <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105">
            {t.hero.bookNow}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex justify-center gap-6">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-lg font-medium",
                    language === lang.code ? "text-accent border-b-2 border-accent" : "text-primary/70"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <a
              href="tel:+992945622222"
              className="flex items-center justify-center gap-2 text-lg font-medium text-primary"
            >
              <Phone size={20} className="text-accent" />
              +992 94 562 2222
            </a>
            <button className="bg-accent text-white py-4 rounded-xl text-lg font-bold">
              {t.hero.bookNow}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
