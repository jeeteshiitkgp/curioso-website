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
      title: "Bare-Chassis EV Racer",
      duration: "12 to 20 Sessions",
      concepts: "Gear ratios, rolling friction, wheel alignment, power-to-weight balance, circuitry",
      materials: "Scrap wood or acrylic rails, bare DC motors, pulleys/gears, 9V/Li-ion cells, copper wire",
    },
    {
      title: "Solar-Tracked Evaporative Cooler",
      duration: "15 to 24 Sessions",
      concepts: "Thermodynamics, latent heat of vaporization, airflow velocity, solar incidence angles",
      materials: "Recycled housing, 12V mini fans, solar panels, porous cooling pads, water feed tubing",
    },
    {
      title: "3-Axis Hydraulic Crane",
      duration: "16 to 24 Sessions",
      concepts: "Pascal's law, mechanical advantage, lever arms, structural truss load limits",
      materials: "Plastic syringes, flexible medical tubing, wooden linkages, bolts, counterweight trays",
    },
    {
      title: "Dual-Motor Tank-Drive Rover",
      duration: "20 to 30 Sessions",
      concepts: "Differential steering, polarity reversal switching, torque distribution, center of mass",
      materials: "Dual DC gear motors, DPDT toggle switches, copper busbars, DIY tread assemblies",
    },
    {
      title: "Multi-Stage Water Purifier",
      duration: "12 to 18 Sessions",
      concepts: "Fluid flow rates, particulate filtration gradients, pressure head, turbidity testing",
      materials: "PVC columns, graded gravel, sand, activated charcoal, cotton mesh, collection gauges",
    },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <ProgramHeader
        badge="Project-Based Learning"
        titlePrefix="Project-Based Learning (PBL)"
        titleHighlight="in Science & Math."
        subtitle="Multi-week 12 to 30 session (20 to 60 hour) engineering arcs where students build working machines from raw domestic materials, debug real mechanical failures, and graduate with verifiable portfolios."
        activeSlug="project-based-learning"
        imageAlt="Curioso Project-Based Learning STEM Builds"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-20">
        {/* Section 1: 5 Flagship Engineering Arcs */}
        <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
          <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
            20 to 60 Hour Deep Builds
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-4">
            Five Flagship 12 to 30 Session (20 to 60 Hour) Engineering Arcs
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Real project-based learning cannot happen in a 40-minute craft activity. Our multi-week tracks force students to design, calibrate, test under load, fail safely, and iterate across five signature machines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringArcs.map((arc) => (
              <div key={arc.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan block mb-2">
                    {arc.duration}
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                    {arc.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold leading-relaxed mb-3">
                    Concepts: <span className="font-medium text-slate-600">{arc.concepts}</span>
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold leading-relaxed pt-3 border-t border-slate-200">
                  Raw Materials: <span className="font-medium text-slate-600">{arc.materials}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Real PBL vs Kit Assembly */}
        <section className="py-10 md:py-16 lg:py-24">
          <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
            Cognitive Friction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
            Project-Based Learning in Mathematics and Physics vs Kit Assembly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                Why Pre-Molded Kits Kill Real PBL
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                When a school buys boxed kits with pre-drilled brackets and color-coded cables, students never experience tolerance errors, wobbly axles, or voltage drops. They follow an assembly script and get a 100% predictable toy. Real project-based learning demands messy, unscripted materials where failure shows up immediately and forces students to calculate why.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                Mathematics &amp; Physics Applied Under Load
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                In a Bare-Chassis EV Racer, students calculate gear ratios, circumference, and center of mass because a bad ratio makes their car stall on a ramp. In a 3-Axis Hydraulic Crane, Pascal's law and triangle geometry decide whether the boom lifts a load or snaps. Math stops being abstract drill work and becomes an engineering survival tool.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Portfolios, Rubrics & Implementation */}
        <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-6">
            Student Portfolios, Rubrics &amp; School Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2">
                6-Week Pilot or Full-Year Rollout
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                Start with a focused Grade 6 to 8 pilot cohort on one flagship build, or deploy a full academic-year progression across middle and secondary sections.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2">
                Anomaly &amp; Viva Rubrics
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                Assessments evaluate diagnostic troubleshooting, iteration logs, and physical viva defense rather than decorative chart-paper posters.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2">
                80%+ Lower Consumable Cost
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                Schools source raw domestic materials via Curioso's open-market Bill of Materials, keeping student build portfolios authentic and affordable.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
            <Link
              href="/programs/stem-lab"
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
            >
              &larr; Explore STEM &amp; Innovation Lab Setup
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base hover:bg-orange-500 transition-colors shadow-lg"
            >
              Launch a School PBL Pilot
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
