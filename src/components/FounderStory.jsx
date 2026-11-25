import Link from 'next/link';

export default function FounderStory() {
  return (
    <section id="founder" className="py-16 md:py-24 bg-space text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Memorizing definitions passes exams. It does not build engineers.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-medium">
              4th graders shout "Triangle" when asked for the strongest shape, and prove triangle congruence in 8th grade. Hand them a sheet of paper to hold twenty coins across two mugs, and they freeze because nobody connected the chapter to real materials.
            </p>
            <div className="flex items-center gap-5 bg-indigo-950/50 p-5 rounded-2xl border border-indigo-500/25 backdrop-blur-sm max-w-sm">
              <div className="w-16 h-16 rounded-full bg-indigo-900 border-2 border-indigo-400/50 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                <img src="/founder.jpg" alt="Jeetesh Gulani" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Jeetesh Gulani</h3>
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

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan to-indigo-500 rounded-[2rem] opacity-20 filter blur-2xl group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-indigo-500/30 bg-indigo-950/60">
              <img
                src="/images/lessons/corrugated-paper-bridge.jpg"
                alt="Accordion-folded paper holding coins across two books"
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
