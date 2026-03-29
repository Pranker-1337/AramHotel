import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, Clock, Plane, Landmark } from 'lucide-react';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-primary mb-8">{t.location.title}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-accent flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Address</h4>
                  <p className="text-gray-600">{t.location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-accent flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone</h4>
                  <p className="text-gray-600">{t.location.phone}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-bg-soft p-6 rounded-2xl border border-gray-100">
                  <Landmark className="text-accent mb-3" size={24} />
                  <p className="font-bold text-sm mb-1">{t.location.attractions}</p>
                  <p className="text-xs text-gray-500">National Museum, Rudaki Park, Opera & Ballet Theatre</p>
                </div>
                <div className="bg-bg-soft p-6 rounded-2xl border border-gray-100">
                  <Plane className="text-accent mb-3" size={24} />
                  <p className="font-bold text-sm mb-1">{t.location.airport}</p>
                  <p className="text-xs text-gray-500">15 minutes drive from Dushanbe International Airport</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
            {/* Map Placeholder - Using a styled iframe for realism */}
            <iframe
              title="Aram Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.534886653139!2d68.7944444!3d38.5666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d16060606061%3A0x6060606060606060!2sHussein%20Zoda%20St%2C%20Dushanbe!5e0!3m2!1sen!2stj!4v1600000000000!5m2!1sen!2stj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
