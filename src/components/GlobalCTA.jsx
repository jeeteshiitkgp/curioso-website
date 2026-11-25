"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Calendar } from 'lucide-react';
import ContactCTA from './ContactCTA';

export default function GlobalCTA() {
  const pathname = usePathname() || '/';
  const isReadingPage = pathname.startsWith('/blog') || pathname.startsWith('/lessons');

  if (!isReadingPage) {
    return <ContactCTA />;
  }

  return (
    <section className="py-12 md:py-16 bg-space text-ivory border-t border-indigo-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-950/70 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Run Hands-On Builds Like This Inside Regular School Periods.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            No ₹15 Lakh kit boxes or rotating outside trainers. We provide the lesson system and local supply list, and train your permanent science and math teachers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-electric hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg"
            >
              <span>Explore School Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-space hover:bg-indigo-900 text-cyan border border-cyan/40 font-bold text-sm sm:text-base transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Walkthrough</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
