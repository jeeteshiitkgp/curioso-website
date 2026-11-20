import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "Curiosity Classroom Program: Activity-Based Learning & Math Lab for Schools",
  description: "Daily 45-minute activity-based learning and physical math lab hooks integrated directly into regular CBSE, ICSE, IB, and IGCSE science and math periods.",
  keywords: [
    "activity based learning in science",
    "activity based learning in mathematics",
    "math lab in school",
    "maths lab in cbse schools",
    "curiosity driven school program",
    "socratic science classroom india",
  ],
  alternates: {
    canonical: "https://www.curioso.school/programs/curiosity-classroom",
  },
  openGraph: {
    title: "Curiosity Classroom: Activity-Based Learning & Math Lab | Curioso",
    description: "Daily 45-minute physical Socratic hooks mapped straight into regular science and math periods across CBSE, ICSE, IB, and IGCSE schools.",
    url: "https://www.curioso.school/programs/curiosity-classroom",
  },
};

export default function CuriosityClassroomPage() {
  const dailyHooks = [
    {
      name: "The Tilted Palm Friction Test",
      subject: "Physics (Mechanics)",
      desc: "Instead of pushing one textbook across a desk, students rest a phone on an open palm tilted at 30 degrees. Gravity pulls downward, yet the phone stays still, forcing students to discover static friction as a self-adjusting force.",
    },
    {
      name: "The Submerged Breathing Leaf",
      subject: "Biology (Photosynthesis)",
      desc: "Students submerge a freshly plucked leaf in a clear glass of water on a sunlit sill and watch microscopic oxygen bubbles form directly along stomata instead of memorizing reaction arrows on a board.",
    },
    {
      name: "The Tiger's Dichromatic Blindspot",
      subject: "Optics & Evolution",
      desc: "Connects human three-cone trichromatic vision with deer red-green colorblindness to prove why bright orange tigers vanish in green tall grass, breaking the wall between physics and biology.",
    },
    {
      name: "Accordion Paper Trusses",
      subject: "Math Lab & Structural Geometry",
      desc: "Students bridge two mugs with one flat sheet of paper that collapses under a single coin, then discover how folding triangular corrugations locks angles via SSS congruence to hold dozens of coins.",
    },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <ProgramHeader
        badge="Curiosity Classroom"
        titlePrefix="Curiosity Classroom:"
        titleHighlight="Activity-Based Learning."
        subtitle="Daily 45-minute physical Socratic hooks and active math lab inquiries woven directly into your existing CBSE, ICSE, IB, and IGCSE timetable, before a single formula goes on the board."
        activeSlug="curiosity-classroom"
        imageAlt="Curiosity Classroom Activity-Based Learning and Math Lab"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-20">
        {/* Section 1: Daily 45-Min Socratic Hooks */}
        <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
          <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
            Regular Timetable Integration
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-4">
            How Daily 45-Minute Socratic Hooks Work Inside Regular Timetables
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Most activity-based learning fails because schools treat practicals as a disconnected Saturday club while Monday to Friday science and math remain pure memorization. Curiosity Classroom runs inside regular 45-minute periods using everyday items already on a student's desk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyHooks.map((hook) => (
              <div key={hook.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-indigo-700 block mb-2">
                  {hook.subject}
                </span>
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2">
                  {hook.name}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  {hook.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Math Lab & Science Without Kits */}
        <section className="py-10 md:py-16 lg:py-24">
          <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
            Tactile Math &amp; Physics
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-6">
            Reinventing the School Math Lab and Science Classroom Without Kits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space">
                Physical Math Lab Beyond Plastic Fraction Circles
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                A traditional math lab in CBSE or ICSE schools often collects dust with wooden solids locked in cabinets. In Curiosity Classroom, every math topic starts with physical reasoning: measuring building heights via shadow trigonometry, testing SSS triangle rigidity with pushpins and ice-cream sticks, and tying algebraic ratios to physical gear and lever tests.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space">
                Breaking Academic Silos Across Grades 1 to 10
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                Curioso links 45 cross-mapped nodes across Foundational (Grades 1 to 2), Preparatory (Grades 3 to 5), Middle (Grades 6 to 8), and Secondary (Grades 9 to 10) stages. Fourth-grade structural trivia connects straight to eighth-grade geometric proofs and high-school mechanics.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What Students Gain & What Schools Get */}
        <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
            What Students Gain &amp; What Schools Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4 border-b border-slate-200 pb-3">
                What Students Gain
              </h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold leading-relaxed">
                <li>✓ Connects textbook equations to lived physical reality</li>
                <li>✓ Eliminates rote memorization across Physics, Biology, and Math</li>
                <li>✓ Builds intuition through counter-intuitive observations before formulas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4 border-b border-slate-200 pb-3">
                What Schools Get
              </h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold leading-relaxed">
                <li>★ Integrates cleanly into existing 45-minute school periods without extra hours</li>
                <li>★ Teacher diagnostic blueprints, Socratic scripts, and anomaly guides</li>
                <li>★ Authentic NEP 2020 competency alignment with zero sterile plastic kits</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
            <Link
              href="/programs/stem-lab"
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
            >
              Next: Explore STEM &amp; Innovation Lab Setup &rarr;
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base hover:bg-orange-500 transition-colors shadow-lg"
            >
              Schedule a School Walkthrough
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
