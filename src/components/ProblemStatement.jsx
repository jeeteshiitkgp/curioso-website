"use client";
export default function ProblemStatement() {
  return (
    <section id="problem" className="py-32 bg-ivory text-space overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-gradient-to-r from-electric to-orange-400 rounded-[2.5rem] transform rotate-3 scale-100 opacity-10 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 blur-xl"></div>
            <img 
                src="/curioso_anomaly_milk.png" 
                alt="Curiosity and boiling milk" 
                className="relative bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1516245834213-9078cb1eed4b?q=80&w=800&auto=format&fit=crop"; 
                }}
            />
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-cyan uppercase mb-4">The Anomaly</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-space mb-8 tracking-tight leading-tight">
              Why does milk boil over, but water does not?
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Every child starts out as a natural-born scientist, relentlessly asking "Why?" 
              Yet traditional systems force them into rigid molds, prioritizing rote memorization over intrinsic discovery.
            </p>
            <div className="mb-10 leading-relaxed font-medium italic border-l-4 border-cyan pl-6 bg-slate-50 py-6 pr-6 rounded-r-2xl shadow-sm">
              <p className="text-lg md:text-xl text-slate-700 mb-3">
                "Every kid starts out as a natural-born scientist, and then we beat it out of them. A few trickle through the system with their wonder and enthusiasm for science intact."
              </p>
              <span className="not-italic font-bold text-sm tracking-widest uppercase text-space block">— Carl Sagan</span>
            </div>
            
            <div className="pl-8 border-l-4 border-electric py-2">
              <p className="text-xl md:text-2xl italic text-slate-800 font-semibold leading-relaxed">
                "We don't just teach the syllabus. We protect the wonder."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
