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
            A Whole School Reformation Aligned with NEP 2020
          </h3>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Description & CTA */}
          <div className="col-span-12 md:col-span-7">
            <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4">
              Competency Based Learning & Compliance
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-500 leading-relaxed mb-6 font-medium">
              Indian private schools are under increasing pressure to align with the NEP 2020 curriculum guidelines. Standard classrooms try to solve this by purchasing sterile robotics kits or setting up expensive lab facilities that sit idle. Curioso replaces this friction with a low-entropy, clinical-grade curriculum that runs directly on your existing school schedule.
            </p>
            <div className="flex">
              <Link 
                href="/experience"
                className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm md:text-base font-bold rounded-full text-white bg-space hover:bg-electric transition-colors shadow-lg shadow-indigo-900/20"
              >
                Explore Our Framework
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
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">NEP 2020 Compliance</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  Fulfills mandate for experiential, inquiry-based science pedagogy. Our physical lessons map directly to NCERT chapters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 text-electric mt-1">
                <Cpu size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">Zero-Equipment Friction</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  No dependency on fragile sensors or proprietary robotics hardware. We teach mechanical and electrical principles using everyday items.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 text-electric mt-1">
                <Lightbulb size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm md:text-base font-bold text-space mb-2">Fluid Reasoning</h5>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal font-medium">
                  Designed to shift classrooms away from rote memory. Assessments are structured to measure cognitive problem-solving capacity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
