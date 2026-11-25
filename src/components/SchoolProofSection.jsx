export default function SchoolProofSection() {
  return (
    <section id="classroom-proof" className="py-14 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight">
            What Students Actually Build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="bg-slate-950 aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
              <video
                src="/videos/school/cardboard-ev-table-run.mp4"
                poster="/images/school/cardboard-ev-table-poster.jpg"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base sm:text-lg font-bold text-space mb-1">
                Cardboard Electric Car
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Scrap cardboard, small motors, and tape.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
              <img
                src="/images/school/sticks-hands-landscape.jpg"
                alt="Hands joining wooden sticks and rubber bands on the floor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base sm:text-lg font-bold text-space mb-1">
                Wooden Stick Bridges
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Testing strength and angles with sticks.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
              <img
                src="/images/school/cardboard-hands-circle.jpg"
                alt="Hands cutting and assembling cardboard pieces and sticks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base sm:text-lg font-bold text-space mb-1">
                Scratch Cardboard Builds
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Measuring and cutting structures from scratch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
