/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Rooms } from './components/Rooms';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Rooms />
        <Features />
        <Gallery />
        <Location />
        <Reviews />
        <CTA />
      </main>
      <Footer />

      {/* Sticky Mobile Booking Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-2xl transform active:scale-95 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
