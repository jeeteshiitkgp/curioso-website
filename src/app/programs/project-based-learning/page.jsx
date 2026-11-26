import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "Project-Based Learning (PBL) for Schools",
  description: "12 to 30 session project based learning in science and math for Grades 6 to 10. Students build five working machines from raw materials, zero kits.",
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
    description: "12 to 30 session project based learning in science and math for Grades 6 to 10. Students build five working machines from raw materials, zero kits.",
    url: "https://www.curioso.school/programs/project-based-learning",
  },
};

export default function ProjectBasedLearningPage() {
  const summaryMetrics = [
    {
      value: "5 Working Machines",
      detail: "Electric car, solar cooler, hydraulic crane, rover, water filter",
    },
    {
      value: "12 to 30 Sessions",
      detail: "20 to 60 hours per build, as a 6-week pilot or full-year track",
    },
    {
      value: "Grades 6 to 10",
      detail: "Mapped to CBSE, ICSE, IB & IGCSE science and math chapters",
    },
  ];

  const featuredArc = {
    title: "Scratch-Built Electric Car",
    duration: "12 to 30 Sessions",
    concepts: "Gear speeds, rolling friction, wheel alignment, weight balance, simple circuits",
    materials: "Scrap wood or cardboard frames, small DC motors, pulleys, 9V batteries, copper wire",
    breaksFirst: "Crooked frames drift sideways, loose wheels slip, and bad pulley ratios stall on ramps.",
  };

  const otherArcs = [
    {
      title: "Solar Air Cooler",
      duration: "15 to 24 Sessions",
      concepts: "Evaporative cooling, airflow speed, solar angles, heat transfer",
      materials: "Cardboard or plastic housing, 12V mini fans, small solar panels, cooling pads, tubing",
      breaksFirst: "Tilted solar panels lose power fast, and dense pads block airflow.",
    },
    {
      title: "Syringe Hydraulic Crane",
      duration: "16 to 24 Sessions",
      concepts: "Water pressure in syringes, lever arms, triangular frame strength",
      materials: "Plastic syringes, flexible medical tubing, wooden sticks, bolts, small weights",
      breaksFirst: "Air bubbles make syringe arms spongy, and square frames sag under load.",
    },
    {
      title: "Two-Motor Steerable Rover",
      duration: "20 to 30 Sessions",
      concepts: "Steering with two motors, reversing battery polarity, balance and grip",
      materials: "Two DC gear motors, toggle switches, copper strips, hand-cut treads",
      breaksFirst: "Uneven motor grip spins the rover in circles instead of driving straight.",
    },
    {
      title: "Layered Water Filter",
      duration: "12 to 18 Sessions",
      concepts: "Water flow speed, layered particle filtering, water pressure, clarity testing",
      materials: "Plastic bottles or pipes, graded gravel, sand, charcoal, cotton cloth, measuring cups",
      breaksFirst: "Wrong gravel-to-sand order clogs the pipe or lets muddy water rush straight through.",
    },
  ];

  const electricCarPhases = [
    {
      step: "01 · Motion & Friction",
      title: "Roll Before Powering",
      desc: "Roll frames down ramps without motors to test wheel and axle drag.",
    },
    {
      step: "02 · Hand-Cut Frame",
      title: "Square Every Corner",
      desc: "Measure and cut a square frame and custom wheels from cardboard or wood.",
    },
    {
      step: "03 · Circuits & Control",
      title: "Wire Direct Switches",
      desc: "Wire battery packs and forward/reverse switches directly without snap cables.",
    },
    {
      step: "04 · Track Trials & Defense",
      title: "Test & Explain Fixes",
      desc: "Time a 5-meter run, upgrade one weak part, and explain one failure fixed.",
    },
  ];

  const starterMicroBuilds = [
    {
      name: "Corrugated Paper Bridge",
      note: "Hold 50+ coins with folded triangles",
      href: "/lessons/corrugated-paper-bridge-geometry",
      image: "/images/lessons/corrugated-paper-bridge.jpg",
    },
    {
      name: "Tilted Palm Friction",
      note: "Why tires grip on a slope",
      href: "/lessons/phone-on-tilted-palm-static-friction",
      image: "/images/lessons/phone-tilted-palm.jpg",
    },
    {
      name: "Steam Can Implosion",
      note: "Air pressure crushing metal fast",
      href: "/lessons/soda-can-steam-implosion-pressure",
      image: "/images/lessons/soda-can-implosion.jpg",
    },
    {
      name: "Colored Shadows",
      note: "How RGB light mixes on walls",
      href: "/lessons/colored-shadows-experiment",
      image: "/images/lessons/colored-shadows-rgb.jpg",
    },
  ];

  const comparisonRows = [
    {
      dimension: "Materials",
      boxed: "Pre-drilled plastic brackets and color-coded snap cables",
      curioso: "Wood, cardboard, syringes, copper wire, and small motors",
    },
    {
      dimension: "When Things Fail",
      boxed: "Follow-the-steps kits hide problems before parts snap together",
      curioso: "Crooked frames and loose wires show up right away and demand fixes",
    },
    {
      dimension: "Math & Science Use",
      boxed: "Textbook formulas stay separate from weekend building",
      curioso: "Wheel size, gear ratios, and triangle bracing decide if the machine works",
    },
    {
      dimension: "Grading",
      boxed: "Completion check or decorative chart paper",
      curioso: "Testing logs, failure notes, and live student explanations",
    },
    {
      dimension: "Supply Cost",
      boxed: "Expensive boxed kits locked to one outside vendor",
      curioso: "Local market supplies at 80%+ lower cost",
    },
  ];

  const faqs = [
    {
      question: "How long is a Project-Based Learning track, and can we test a 6-week pilot first?",
      answer: "Projects run 12 to 30 sessions (20 to 60 hours) depending on the machine. Schools can start with one Grade 6 to 8 section on a 6-week pilot before expanding across middle and high school.",
    },
    {
      question: "Do students need coding or prior robotics experience to join?",
      answer: "No. Students start with simple physics, measurement, wiring, and hand tools before touching any code, so every child builds working machines from day one.",
    },
    {
      question: "How much do the project materials cost?",
      answer: "Total supply spend stays over 80% lower than pre-molded kit labs. Schools buy wood strips, cardboard, syringes, small DC motors, copper wire, and batteries locally using our shopping list.",
    },
    {
      question: "How do teachers grade student projects fairly when builds break?",
      answer: "We provide simple rubrics where teachers grade how students measured, tested, logged mistakes, and explained what they fixed, instead of grading decorative posters.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-ivory min-h-screen w-full min-w-0 overflow-x-hidden">
        <ProgramHeader
          badge="Project-Based Learning"
          titlePrefix="Project-Based Learning"
          titleHighlight="in Science & Math."
          subtitle="12 to 30 session projects where Grades 6 to 10 students build five working machines from everyday materials, fix what breaks, and explain the science behind their work."
          activeSlug="project-based-learning"
          heroImage="/images/school/sticks-hands-landscape.jpg"
          imageAlt="Students building frames with wooden sticks and rubber bands"
        />

        {/* 3-Metric Summary Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10 md:mb-14 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white rounded-2xl border border-slate-200 shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {summaryMetrics.map((metric) => (
              <div key={metric.value} className="p-5 sm:p-6">
                <p className="text-base sm:text-lg md:text-xl font-extrabold text-space">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-10 md:space-y-16">
          {/* Section 1: Five Working Machines Built From Scratch */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Five Working Machines Built From Scratch
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Real project-based learning needs weeks of testing and rebuilding, not a 40-minute craft sheet. Across five core tracks, students build machines where wrong measurements fail fast.
            </p>

            {/* Featured Build #1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-6">
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto w-full bg-slate-950 flex items-center justify-center overflow-hidden">
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
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-cyan block mb-2">
                    {featuredArc.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-space mb-4">
                    {featuredArc.title}
                  </h3>
                  <div className="space-y-2.5 text-sm sm:text-base">
                    <p className="text-slate-700 font-semibold leading-relaxed">
                      Concepts: <span className="font-medium text-slate-600">{featuredArc.concepts}</span>
                    </p>
                    <p className="text-slate-700 font-semibold leading-relaxed">
                      Materials: <span className="font-medium text-slate-600">{featuredArc.materials}</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-4 mt-4 border-t border-slate-200">
                  <span className="text-electric uppercase text-xs font-black tracking-wider mr-2">What Breaks First:</span>
                  <span className="font-medium text-slate-600">{featuredArc.breaksFirst}</span>
                </p>
              </div>
            </div>

            {/* Other 4 Builds in Symmetric 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArcs.map((arc) => (
                <div key={arc.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-cyan block mb-2">
                      {arc.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                      {arc.title}
                    </h3>
                    <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-2.5">
                      Concepts: <span className="font-medium text-slate-600">{arc.concepts}</span>
                    </p>
                    <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-4">
                      Materials: <span className="font-medium text-slate-600">{arc.materials}</span>
                    </p>
                  </div>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-3 border-t border-slate-200">
                    <span className="text-electric uppercase text-xs font-black tracking-wider mr-2">What Breaks First:</span>
                    <span className="font-medium text-slate-600">{arc.breaksFirst}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: How One Build Runs End to End + Starter Micro-Builds */}
          <section className="py-10 md:py-14 bg-space text-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              How a Project Based Learning Track Runs (Electric Car Flow)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {electricCarPhases.map((phase) => (
                <div
                  key={phase.step}
                  className="bg-indigo-950/50 border border-indigo-500/25 rounded-2xl p-5 sm:p-6"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-electric block mb-2">
                    {phase.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-indigo-500/25 pt-6 mt-8">
              <p className="text-sm sm:text-base font-bold text-cyan mb-4">
                Starter Micro-Builds You Can Run Today (Free Lessons):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {starterMicroBuilds.map((lesson) => (
                  <Link
                    key={lesson.name}
                    href={lesson.href}
                    className="group bg-indigo-950/50 border border-indigo-400/25 hover:border-electric rounded-xl overflow-hidden transition-colors flex flex-col"
                  >
                    <div className="h-36 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={lesson.image}
                        alt={lesson.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-base font-bold text-white group-hover:text-electric transition-colors">
                        {lesson.name} &rarr;
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                        {lesson.note}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Comparison Table - Boxed Kits vs Curioso PBL */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Project Based Learning vs Boxed Kit Assembly
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">
              Pre-drilled kits fix every measurement problem at the factory. Raw materials force students to measure, test, and understand why their build works.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Area
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Boxed Kit Assembly
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-electric bg-orange-50/70">
                      Curioso Project-Based Learning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.dimension} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-bold text-space align-top">
                        {row.dimension}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-600 font-medium align-top">
                        {row.boxed}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-space font-semibold bg-orange-50/70 align-top">
                        {row.curioso}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-slate-600">
              <span>Read why we skip pre-molded kits:</span>
              <Link
                href="/blog/the-no-kit-manifesto"
                className="font-bold text-electric hover:text-space transition-colors"
              >
                The No-Kit Manifesto &rarr;
              </Link>
            </div>
          </section>

          {/* Section 4: Rollout & Grading */}
          <section className="py-4 md:py-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
              How Schools Roll It Out &amp; Grade It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                  6-Week Pilot or Full Year
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Start with one Grade 6 to 8 batch on a single build, or run a full academic-year schedule across sections.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                  Graded on Real Fixes
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Teachers score test runs, logged mistakes, and live student explanations instead of decorative chart paper.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-2">
                  Your Teachers Lead It
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  We train your existing science and math teachers with clear guides and weekly check-ins so the skill stays on campus.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Frequently Asked Questions */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Frequently Asked Questions: Project-Based Learning
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-space mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
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
    </>
  );
}
