import type { Metadata } from 'next';

import CTA from '@/components/home/cta';
import Features from '@/components/home/features';
import Footer from '@/components/home/footer';
import HeroSection from '@/components/home/hero-section';
import HowItWorks from '@/components/home/how-it-wroks';
import Navbar from '@/components/home/navbar';

export const metadata: Metadata = {
  title: 'OweFlow Buddy | Track Personal Lending & Borrowing',
  description:
    'Manage money lent to friends and family with ease. Track borrowing, set repayment reminders, and maintain healthy financial relationships with our intuitive personal lending tracker.',
};

export default function Home() {
  return (
    <main className="bg-white/50 bg-gradient-to-r from-pink-100/40 via-violet-100/40 to-indigo-100/40">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
