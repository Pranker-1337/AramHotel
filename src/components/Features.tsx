import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Car, Wifi, Coffee, Wind } from 'lucide-react';
import { motion } from 'motion/react';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <MapPin size={32} />,
      title: t.whyUs.location,
      desc: t.whyUs.locationDesc,
    },
    {
      icon: <Car size={32} />,
      title: t.whyUs.parking,
      desc: t.whyUs.parkingDesc,
    },
    {
      icon: <Wifi size={32} />,
      title: t.whyUs.wifi,
      desc: t.whyUs.wifiDesc,
    },
    {
      icon: <Coffee size={32} />,
      title: t.whyUs.breakfast,
      desc: t.whyUs.breakfastDesc,
    },
    {
      icon: <Wind size={32} />,
      title: t.whyUs.ac,
      desc: t.whyUs.acDesc,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">{t.whyUs.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary text-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all transform group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
