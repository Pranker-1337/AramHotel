import React from 'react';
import { useLanguage } from './LanguageContext';
import { Star, Coffee, Wifi, MapPin, Car } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: <Coffee size={20} />, label: 'Free Breakfast' },
    { icon: <Wifi size={20} />, label: 'Free Wi-Fi' },
    { icon: <MapPin size={20} />, label: 'Central Location' },
    { icon: <Car size={20} />, label: 'Free Parking' },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Rating */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-accent mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill={i <= 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-3xl font-serif font-bold text-primary">4.1</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-lg font-bold text-primary">{t.trust.rating}</p>
              <p className="text-sm text-gray-500">{t.trust.reviews}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <span className="font-medium text-primary/80">{benefit.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm font-medium text-accent italic max-w-[200px] text-center lg:text-right">
            "{t.trust.trusted}"
          </p>
        </div>
      </div>
    </div>
  );
};
