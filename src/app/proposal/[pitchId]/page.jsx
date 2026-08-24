"use client";

import Link from 'next/link';
import { schoolPitches } from '@/data/pitches'

export default function PitchView({ params }) {
  const { pitchId } = use(params);
  const data = schoolPitches[pitchId]

  // If the secure hash doesn't match any data, safely redirect to the homepage.
  if (!data) {
    return <Navigate to="/" />
  }

  return (
    <div className="min-h-screen bg-space text-ivory font-sans flex flex-col relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Very subtle navigation to show it's a real site, without full menus */}
      <nav className="p-6 relative z-10">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-ivory">
          CURI<span className="text-electric">O</span>SO
        </Link>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-6 sm:py-12 relative z-10 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[8px] sm:text-xs font-black tracking-[0.2em] text-cyan uppercase mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <span className="w-6 sm:w-8 h-[1px] bg-cyan/50"></span>
            Exclusive Partnership Proposal
            <span className="w-6 sm:w-8 h-[1px] bg-cyan/50"></span>
          </h1>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            {data.headline}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium">
              Prepared securely for the leadership at <strong className="text-white bg-white/10 px-2 py-0.5 rounded">{data.schoolName}</strong>.
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-400 font-normal italic border-l-4 border-amber-500/50 pl-4 sm:pl-6 text-left bg-white/5 py-3 sm:py-4 rounded-r-lg">
              "We understand the primary friction you face involves <span className="text-amber-400 font-medium">{data.painPoint}</span>"
            </p>
          </div>
        </div>

        {/* The Solution Box */}
        <div className="bg-white rounded-xl sm:rounded-[2.5rem] p-6 sm:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] text-left border border-slate-100 transform transition-all animate-[pulse_0.4s_ease-out_1]">
          <h3 className="text-[8px] sm:text-xs font-black tracking-[0.2em] text-cyan uppercase mb-2">The Solution Core</h3>
          <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">{data.pitchCourse}</h4>
          
          <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
            {data.benefits.map((benefit, i) => (
              <li key={i} className="flex gap-3 sm:gap-4 items-start bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100">
                <span className="text-electric font-black text-lg sm:text-2xl mt-0.5 leading-none">✓</span>
                <span className="text-slate-700 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-electric hover:bg-orange-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all transform hover:scale-[1.02] shadow-xl shadow-orange-500/20 text-center text-[10px] sm:text-xs md:text-sm lg:text-base">
              Schedule 15-Min Walkthrough
            </button>
            <Link href="/" className="flex-1 bg-slate-100 hover:bg-slate-200 text-space font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-colors text-center text-[10px] sm:text-xs md:text-sm lg:text-base">
              Explore Main Site
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-xs font-medium relative z-10">
        Strictly Confidential | © 2026 Curioso Educational Trust
      </footer>
    </div>
  )
}
