import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-space border-b border-indigo-900/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Active Experiential Learning in <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400 drop-shadow-sm">Schools.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl font-medium">
              Low-cost STEM labs and hands-on science and math inside regular school periods. Zero plastic kits. Zero vendor lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-transparent rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] text-base font-bold text-white bg-electric hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Programs</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/lessons"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-indigo-400/35 rounded-full text-base font-bold text-cyan bg-indigo-950/60 hover:bg-indigo-900/80 hover:text-white transition-all duration-200"
              >
                <BookOpen size={18} />
                <span>Try Free Lessons</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[60px] opacity-60 pointer-events-none"></div>
            <div className="relative rounded-3xl overflow-hidden border border-indigo-400/25 shadow-2xl bg-slate-900">
              <img
                src="/images/school/cardboard-ev-desk-closeup.jpg"
                alt="Students testing a scratch-built electric car made from cardboard, copper wire, cells, and a small motor"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
