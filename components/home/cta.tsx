'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Link } from '@/i18n/navigation';

export default function EnhancedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 py-16 text-white lg:py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -top-4 -bottom-4 -rotate-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1.5px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1.5px,transparent_1.5px)] bg-[size:120px_120px]" />
      <div className="pointer-events-none absolute inset-0 -top-4 -bottom-4 -rotate-2  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-[2px]">
            <Sparkles className="mr-2 h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium">
              No more awkward money conversations
            </span>
          </div>

          <h2 className="mb-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Track loans without the awkwardness
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Keep your finances clear and your friendships strong with our
            simple, transparent loan tracking system
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/signup"
              className="group inline-flex items-center rounded-full bg-white px-6 py-3.5 font-medium text-indigo-700 shadow-lg transition-all hover:bg-indigo-50"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/60">
            No credit card required • Free plan available
          </p>
        </div>
      </div>
    </section>
  );
}
