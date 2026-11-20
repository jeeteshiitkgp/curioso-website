import Link from 'next/link'
import { ShieldCheck, Cpu, Lightbulb } from 'lucide-react';

export default function ExperienceTeaser() {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[10px] sm:text-xs md:text-sm font-bold text-electric tracking-[0.2em] uppercase mb-2 sm:mb-4">The Methodology</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight">
            How We Run Inside Your Timetable (NEP 2020 &amp; NCF 2023)
          </h3>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Description & CTA */}
          <div className="col-span-12 md:col-span-7">
            <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4">
              Competency-Based Learning Without the ₹15 Lakh Kit Trap
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-500 leading-relaxed mb-6 font-medium">
              Most schools try to tick the NEP 2020 experiential learning box by buying expensive robotics kits that end up locked in glass cupboards within six months. We skip the kits. Students build and test with everyday raw materials inside regular science and math periods, guided by your own trained teachers.
            </p>
            <div className="flex">
              <Link 
                href="/experience"
                className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm md:text-base font-bold rounded-full text-white bg-space hover:bg-electric transition-colors shadow-lg shadow-indigo-900/20"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right Column: Three Pillar Cards */}
          <div className="col-span-12 md:col-span-5 space-y-6">
            
            <div className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 text-electric mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">NEP 2020 &amp; NCF 2023 Aligned</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  Every physical lesson maps directly to CBSE, ICSE, IB, and IGCSE science and math chapters inside your regular school timetable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 text-electric mt-1">
                <Cpu size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">Raw Materials, Zero Kits</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  No ₹30,000 proprietary controllers or pre-molded snap kits. Students build with copper wire, syringes, scrap wood, and ₹50 motors bought locally.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 text-electric mt-1">
                <Lightbulb size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">Real Problem Solving Over Memorization</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  Students debug mechanical failures, test tolerances, and reason through physical anomalies before touching textbook formulas.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
