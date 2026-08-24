"use client";
import Link from 'next/link';

export default function FounderStory() {
  return (
    <section id="founder" className="py-24 bg-space text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-[0.2em] text-cyan uppercase mb-4">The Vision</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Education shouldn't be about ticking boxes.
            </h3>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed font-medium">
              I've always believed learning should inspire curiosity—not just memorization. My journey started as a student fueled by questions, driven by late-night discoveries, and guided by mentors who showed me that real growth happens when we see connections beyond the textbook.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-medium">
              After seeing firsthand how traditional classrooms can selectively dim that distinct spark, I set out to create something entirely different: a place where students are powerfully encouraged to wonder, explore, and relentlessly find their own "why."
            </p>
            <div className="flex items-center gap-5 bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/20 backdrop-blur-sm max-w-sm">
              <div className="w-16 h-16 rounded-full bg-indigo-900 border-2 border-indigo-400/50 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                 <img src="/founder.jpg" alt="Jeetesh Gulani" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"; }} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Jeetesh Gulani</h4>
                <p className="text-cyan text-sm font-medium">Founder, Curioso • IIT Kharagpur</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-white hover:text-electric transition-colors">
                Read Full Story
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan to-indigo-500 rounded-[2.5rem] transform -rotate-3 scale-100 opacity-20 filter blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Learning environment" className="relative rounded-[2rem] shadow-2xl border border-indigo-800/50 transform group-hover:scale-[1.02] transition-transform duration-700" />
          </div>

        </div>
      </div>
    </section>
  );
}
