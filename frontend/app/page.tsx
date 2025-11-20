'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/src/components/sections/HeroSection';
import WhyChooseUs from '@/src/components/sections/WhyChooseUs';
import CommunityStats from '@/src/components/sections/CommunityStats';
import Features from './components/Features';
import InternshipsShowcase from '@/src/components/sections/InternshipsShowcase';
import ServicesShowcase from '@/src/components/sections/ServicesShowcase';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <main>
        <HeroSection />
        <WhyChooseUs />
        <CommunityStats />
        <ServicesShowcase />
        <Features />
        <InternshipsShowcase />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}