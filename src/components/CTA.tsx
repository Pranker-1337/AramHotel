import React from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="relative z-10 py-20 px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white font-serif mb-8"
          >
            {t.cta.title}
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl">
              <CalendarCheck size={24} />
              {t.cta.book}
            </button>
            <a
              href="tel:+992945622222"
              className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition-all"
            >
              <Phone size={24} />
              {t.cta.call}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t.urgency.bestPrice}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              {t.urgency.freeCancellation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
