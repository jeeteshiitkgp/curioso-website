export default function ProblemStatement() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-ivory text-space overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-gradient-to-r from-electric to-orange-400 rounded-[2.5rem] transform rotate-3 scale-100 opacity-10 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 blur-xl"></div>
            <img
              src="/curioso_anomaly_milk.png"
              alt="Curiosity and boiling milk"
              className="relative bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-space mb-6 tracking-tight leading-tight">
              Why does milk boil over, but water does not?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Top rankers memorize surface tension and heat transfer, then go silent on a kitchen question.
            </p>

            <div className="pl-6 sm:pl-8 border-l-4 border-electric py-2">
              <p className="text-lg sm:text-xl md:text-2xl italic text-slate-800 font-semibold leading-relaxed">
                We do not replace your textbook. We build the physical application layer that makes the textbook make sense.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
