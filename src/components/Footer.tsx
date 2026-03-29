import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold tracking-wider">ARAM HOTEL</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A comfortable, affordable, and reliable stay in the heart of Dushanbe. Simplicity, convenience, and warmth for every traveler.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-accent transition-colors">Rooms</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>{t.location.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>{t.location.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@aramhotel.tj</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe to get our latest offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Aram Hotel Dushanbe. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
