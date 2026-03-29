import React from 'react';
import { useLanguage } from './LanguageContext';
import { ROOMS } from '../constants';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export const Rooms: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="rooms" className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">{t.rooms.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{t.rooms.from}</p>
                  <p className="text-lg font-bold text-primary">
                    {room.price} TJS <span className="text-xs font-normal text-gray-500">/ {t.rooms.night}</span>
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-3">{room.name[language]}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {room.description[language]}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check size={14} className="text-accent" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  {t.rooms.bookThis}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-accent font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {t.urgency.fewRooms}
          </p>
        </div>
      </div>
    </section>
  );
};
