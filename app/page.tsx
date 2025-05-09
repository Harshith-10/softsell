"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';
import { Navbar } from '@/components/navbar';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { motion } from 'framer-motion';

export default function Home() {
  // Enable smooth scrolling for the entire page
  useSmoothScroll();
  
  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.main>
  );
}