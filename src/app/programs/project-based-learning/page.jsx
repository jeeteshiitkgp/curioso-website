import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "Project-Based Learning (PBL) for Schools",
  description: "12 to 30 session Project-Based Learning in science, math, and engineering for Grades 6 to 10. Students build working machines from raw materials.",
  keywords: [
    "project based learning in schools",
    "project based learning in mathematics",
    "project based learning examples for middle school",
    "hands on engineering projects for students india",
    "no kit project based learning",
  ],
  alternates: {
    canonical: "https://www.curioso.school/programs/project-based-learning",
  },
  openGraph: {
    title: "Project-Based Learning (PBL) for Schools | Curioso",
    description: "12 to 30 session Project-Based Learning in science, math, and engineering for Grades 6 to 10. Students build working machines from raw materials.",
    url: "https://www.curioso.school/programs/project-based-learning",
  },
};

export default function ProjectBasedLearningPage() {
  const engineeringArcs = [
    {
      title: "Scratch-Built Electric Car",
      duration: "12 to 20 Sessions",
      concepts: "Gear speeds, rolling friction, wheel alignment, weight balance, simple circuits",
      materials: "Scrap wood or cardboard frames, small DC motors, pulleys, 9V batteries, copper wire",
    },
    {
      title: "Solar Air Cooler",
      duration: "15 to 24 Sessions",
      concepts: "Evaporative cooling, airflow speed, solar energy, heat transfer",
      materials: "Cardboard or plastic housing, 12V mini fans, small solar panels, cooling pads, tubing",
    },
    {
      title: "Syringe Hydraulic Crane",
      duration: "16 to 24 Sessions",
      concepts: "Water pressure in syringes, lever arms, triangular frame strength",
      materials: "Plastic syringes, flexible medical tubing, wooden sticks, bolts, small weights",
    },
    {
      title: "Two-Motor Steerable Rover",
      duration: "20 to 30 Sessions",
      concepts: "Steering with two motors, reversing battery polarity, balance and grip",
      materials: "Two DC gear motors, toggle switches, copper strips, hand-cut treads",
    },
    {
      title: "Layered Water Filter",
      duration: "12 to 18 Sessions",
      concepts: "Water flow speed, layered particle filtering, water pressure, clarity testing",
      materials: "Plastic bottles or pipes, graded gravel, sand, charcoal, cotton cloth, measuring cups",
    },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <ProgramHeader
        badge="Project-Based Learning"
        titlePrefix="Project-Based Learning (PBL)"
        titleHighlight="in Science & Math."
        subtitle="Multi-week 12 to 30 session (20 to 60 hour) projects where students build working machines from everyday materials, figure out why things break, and leave with real work they can explain."
        activeSlug="project-based-learning"
        heroImage="/images/school/sticks-hands-landscape.jpg"
        imageAlt="Students building frames with wooden sticks and rubber bands"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-16">
        {/* Section 1: 5 Flagship Engineering Arcs */}
        <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-4">
            Five 12 to 30 Session (20 to 60 Hour) Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Real project-based learning cannot happen in a 40-minute craft activity. Our multi-week tracks push students to design, test under load, fix failures, and rebuild across five working machines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringArcs.map((arc) => (
              <div key={arc.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-cyan block mb-2">
                    {arc.duration}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                    {arc.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-3">
                    Concepts: <span className="font-medium text-slate-600">{arc.concepts}</span>
                  </p>
                </div>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-3 border-t border-slate-200">
                  Materials: <span className="font-medium text-slate-600">{arc.materials}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1B: Classroom Project Proof (Face-Free) */}
        <section className="py-8 md:py-12 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
            Real Student Projects Built From Scratch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
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
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-space">Cardboard Electric Car</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Testing wheel tracking and motor load across a classroom desk.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <img
                  src="/images/school/sticks-hands-landscape.jpg"
                  alt="Hands joining wooden sticks and rubber bands on the floor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-space">Wooden Stick Frames</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Testing load strength and tight joints with sticks and rubber bands.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <img
                  src="/images/school/cardboard-hands-circle.jpg"
                  alt="Hands cutting and assembling cardboard pieces and sticks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-space">Hand-Cut Prototypes</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Measuring, cutting, and fixing parts together without boxed kits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real PBL vs Kit Assembly */}
        <section className="py-6 md:py-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
            Project-Based Learning in Math and Physics vs Boxed Kit Assembly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                Why Pre-Molded Kits Kill Real PBL
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                When a school buys boxed kits with pre-drilled brackets and color-coded cables, students never experience crooked axles, loose contacts, or weak frames. They follow an assembly script and get a predictable toy. Real project-based learning uses everyday materials where mistakes show up immediately and push students to figure out why.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                Math &amp; Physics Applied Under Real Load
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                In a Scratch-Built Electric Car, students calculate wheel size, gear ratios, and weight because a bad ratio stalls the car on a ramp. In a Syringe Hydraulic Crane, water pressure and triangle angles decide whether the arm lifts a weight or collapses. Math stops feeling abstract when your build depends on it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Portfolios, Rubrics & Implementation */}
        <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
            Student Workbooks, Grading &amp; School Rollout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                6-Week Trial or Full-Year Track
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Start with one Grade 6 to 8 batch on a flagship build, or run a full academic-year schedule across middle and high school sections.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                Real Problem-Solving Grading
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Teachers grade how students tested, logged mistakes, and explained how their machine works instead of scoring decorative chart posters.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                80%+ Lower Supply Cost
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Schools buy everyday materials locally from a clear supply list, keeping every student build affordable and repeatable.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
            <Link
              href="/programs/stem-lab"
              className="text-sm sm:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
            >
              &larr; Explore STEM &amp; Innovation Lab Setup
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-sm sm:text-base hover:bg-orange-500 transition-colors shadow-lg"
            >
              Launch a School PBL Pilot
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
