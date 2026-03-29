import React from 'react';
import { useLanguage } from './LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Alex Johnson',
      date: 'March 2024',
      rating: 5,
      text: 'Clean rooms, good service, and a convenient location. The staff was incredibly helpful during my business trip.',
    },
    {
      name: 'Elena Petrova',
      date: 'February 2024',
      rating: 4,
      text: 'Great value for the price. The breakfast was fresh and the Wi-Fi was fast enough for my remote work.',
    },
    {
      name: 'Markus Weber',
      date: 'January 2024',
      rating: 5,
      text: 'A peaceful experience in the heart of the city. Highly recommend for anyone visiting Dushanbe.',
    },
  ];

  return (
    <section className="py-24 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">{t.reviews.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-6 text-secondary group-hover:text-accent transition-colors" size={40} />
              
              <div className="flex items-center gap-1 text-accent mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill={i <= review.rating ? "currentColor" : "none"} />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
