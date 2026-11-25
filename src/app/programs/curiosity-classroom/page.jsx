import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "School Math Lab & Activity-Based Learning",
  description: "Run hands-on science and an in-classroom math lab inside regular 45-minute CBSE, ICSE, and IB periods using everyday items, not plastic kits.",
  keywords: [
    "math lab in school",
    "maths lab in cbse schools",
    "math lab in middle school",
    "math lab in high school",
    "math lab setup cost in india",
    "math lab equipment list",
    "activity based learning in mathematics",
    "activity based learning in science",
    "curiosity classroom",
  ],
  alternates: {
    canonical: "https://www.curioso.school/programs/curiosity-classroom",
  },
  openGraph: {
    title: "School Math Lab & Activity-Based Learning | Curioso",
    description: "Run hands-on science and an in-classroom math lab inside regular 45-minute CBSE, ICSE, and IB periods using everyday items, not plastic kits.",
    url: "https://www.curioso.school/programs/curiosity-classroom",
  },
};

export default function CuriosityClassroomPage() {
  const summaryMetrics = [
    {
      value: "₹0 Plastic Kit Lock-In",
      detail: "Paper, rice, scissors, pushpins, leaves, coins",
    },
    {
      value: "45-Min Regular Period",
      detail: "Science & math on classroom desks, no extra room needed",
    },
    {
      value: "Grades 1 to 10",
      detail: "Mapped to CBSE, ICSE, IB & IGCSE chapters",
    },
  ];

  const comparisonRows = [
    {
      dimension: "Setup Cost",
      standard: "₹1.5 Lakhs to ₹4.5 Lakhs for pre-packaged acrylic/wood bundles",
      curioso: "Everyday classroom supplies (80%+ lower total cost)",
    },
    {
      dimension: "Space Needed",
      standard: "Separate 500 sq. ft. room + steel cupboards for 40 students",
      curioso: "Runs right on regular student desks (or refreshes an unused lab room)",
    },
    {
      dimension: "Weekly Usage",
      standard: "1 visit a month; teachers rarely have time to move whole classes",
      curioso: "Built into daily 45-minute science and math periods",
    },
    {
      dimension: "How Concepts Are Taught",
      standard: "Demonstrating already-memorized formulas with plastic blocks",
      curioso: "A surprising physical puzzle breaks wrong guesses first; the rule comes second",
    },
    {
      dimension: "Board & Assessment",
      standard: "Students copy set steps into a lab manual",
      curioso: "Direct CBSE/ICSE/IB chapter mapping + Class 9 to 10 internal portfolios",
    },
  ];

  const mathExperiments = [
    {
      tag: "Grades 4 to 8 · Triangles & Bridges",
      title: "The Paper-Fold Bridge",
      items: "1 A4 sheet, 2 mugs, 20+ coins, ice-cream sticks, pushpins.",
      trap: "Flat paper bends under 1 coin, and a 4-stick pinned square collapses sideways.",
      math: "Zig-zag paper folds and 3-stick triangles lock shapes rigidly, showing why 8th-grade triangle congruence holds real bridges up.",
      image: "/images/lessons/corrugated-paper-bridge-diagram.jpg",
      lessonHref: "/lessons/corrugated-paper-bridge-geometry",
    },
    {
      tag: "Grades 5 to 8 · Area vs Perimeter",
      title: "Walk Through a Postcard",
      items: "1 postcard or index card, 1 pair of scissors.",
      trap: "Every student insists a tiny card cannot fit a person without tearing apart.",
      math: "Alternating cuts open one unbroken ring large enough to step through. Surface area stays constant while the outer edge stretches roughly 20x.",
    },
    {
      tag: "Grades 7 to 10 · Area vs Volume",
      title: "The Two-Cylinder Rice Trap",
      items: "2 identical A4 sheets, tape, dry rice or sand.",
      trap: "Rolling one sheet tall and one wide uses the exact same paper size, so students bet both hold the same amount.",
      math: "Pouring rice proves the wide cylinder holds ~41% more because radius gets squared (V = πr²h).",
    },
  ];

  const periodSteps = [
    {
      step: "01 · 10 Min",
      title: "Break Wrong Intuition",
      desc: "Start with a physical question students predict before touching any definition on the board.",
    },
    {
      step: "02 · 20 Min",
      title: "Test & Fix on Desks",
      desc: "Students fold, cut, pour, and measure in pairs until they see why their first guess failed.",
    },
    {
      step: "03 · 15 Min",
      title: "Lock the Textbook Rule",
      desc: "Only after they see the physical behavior does the teacher connect it straight to the textbook formula.",
    },
  ];

  const scienceHooks = [
    {
      name: "Tilted Palm Friction",
      note: "Why a phone stays still on a tilted hand",
      href: "/lessons/phone-on-tilted-palm-static-friction",
      image: "/images/lessons/phone-tilted-palm.jpg",
    },
    {
      name: "Submerged Breathing Leaf",
      note: "Seeing live oxygen bubbles on a leaf in sunlight",
      href: "/lessons/submerged-breathing-leaf-photosynthesis",
      image: "/images/lessons/submerged-breathing-leaf.jpg",
    },
    {
      name: "Tiger's Blindspot",
      note: "How light wavelengths meet animal vision",
      href: "/blog/the-tigers-optical-illusion",
      image: "/human_vs_deer.png",
    },
  ];

  const gradeMatrix = [
    {
      band: "Grades 1 to 2 (Foundational)",
      concepts: "Number sense, balance, patterns, simple sorting",
      fit: "NEP 2020 Play & Concrete Inquiry",
      items: "Coins, paper strips, cups, rulers",
    },
    {
      band: "Grades 3 to 5 (Preparatory)",
      concepts: "Shapes, structural strength, fractions, area & perimeter",
      fit: "CBSE / ICSE / IB PYP Core Chapters",
      items: "A4 paper, postcards, scissors, ice-cream sticks, pushpins",
    },
    {
      band: "Grades 6 to 8 (Middle)",
      concepts: "Triangle congruence, balancing, ratios, friction, light & vision",
      fit: "NCERT & CBSE Middle Competency Goals",
      items: "Mugs, coins, tape, A4 sheets, dry rice, leaves, flashlights",
    },
    {
      band: "Grades 9 to 10 (Secondary)",
      concepts: "Volume scaling, geometric proofs, experimental errors",
      fit: "CBSE Internal Assessment (20-Mark Lab/Portfolio) & IGCSE",
      items: "A4 sheets, dry rice, rulers, student observation logs",
    },
  ];

  const faqs = [
    {
      question: "What is the setup cost of a maths lab or activity-based classroom in CBSE schools?",
      answer: "Outside lab packages in India typically charge ₹1.5 Lakhs to ₹4.5 Lakhs for acrylic 3D shapes, wooden geoboards, and steel cupboards. Curiosity Classroom removes kit markups completely by giving schools the lesson system and teacher guides while students use everyday desk items, cutting total cost by over 80%.",
    },
    {
      question: "Do we need a separate 500 sq. ft. room to run Curiosity Classroom and a math lab?",
      answer: "CBSE guidelines suggest a 500 sq. ft. room if you store bulky display apparatus, which is why most classes visit that room only once a month. Curiosity Classroom runs science and math activities (including the physical math lab) right inside regular 45-minute classrooms on student desks, or brings an unused room back to daily life.",
    },
    {
      question: "What equipment list do schools actually need?",
      answer: "Skip sealed plastic fraction discs and display models that stay behind glass. Most middle and high school science and math activities need only local everyday items: A4 paper, postcards, scissors, tape, dry rice, coins, ice-cream sticks, pushpins, leaves, flashlights, and rulers.",
    },
    {
      question: "How does this fit inside our CBSE, ICSE, IB, or IGCSE timetable?",
      answer: "It does not require extra periods or a Saturday club. Each 45-minute lesson maps directly to your existing science and math chapters and CBSE Class 9 to 10 internal portfolios, backed by plain teacher guides and weekly prep check-ins.",
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
          badge="Curiosity Classroom"
          titlePrefix="Hands-On Science &"
          titleHighlight="Classroom Math Lab."
          subtitle="Turn regular 45-minute science and math periods into active inquiry using everyday desk items, including a full physical math lab without the ₹3-lakh cupboard of plastic shapes."
          activeSlug="curiosity-classroom"
          heroImage="/images/lessons/corrugated-paper-bridge.jpg"
          imageAlt="Folded paper bridge holding coins across two books"
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
          {/* Section 1: Standard CBSE Math Lab vs Curiosity Classroom */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Why Standard CBSE Maths Labs Sit Locked in Cupboards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">
              Schools spend ₹1.5 to ₹4.5 lakhs on acrylic cones, plastic fraction discs, and steel cupboards that teachers rarely touch. Curiosity Classroom weaves physical math and science activities directly into daily lessons.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Area
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Standard Outside Maths Lab
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-electric bg-orange-50/70">
                      Curiosity Classroom (Science &amp; Math)
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
                        {row.standard}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-space font-semibold bg-orange-50/70 align-top">
                        {row.curioso}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: 3 Flagship Math Lab Activities */}
          <section className="py-8 md:py-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Three Everyday Math Lab Activities (Zero Kits)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              As part of Curiosity Classroom, math topics start with a physical puzzle students get wrong on their first guess.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mathExperiments.map((exp) => (
                <div key={exp.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  {exp.image && (
                    <div className="h-44 w-full bg-slate-950 overflow-hidden">
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
                      {exp.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-space mb-4">
                      {exp.title}
                    </h3>
                    <div className="divide-y divide-slate-200 border-t border-slate-200 mt-auto">
                      <div className="py-3">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                          Items
                        </span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          {exp.items}
                        </p>
                      </div>
                      <div className="py-3">
                        <span className="text-xs font-black uppercase tracking-wider text-electric block mb-1">
                          The Surprise
                        </span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          {exp.trap}
                        </p>
                      </div>
                      <div className="pt-3">
                        <span className="text-xs font-black uppercase tracking-wider text-cyan block mb-1">
                          Math Proved
                        </span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">
                          {exp.math}
                        </p>
                      </div>
                    </div>
                    {exp.lessonHref && (
                      <Link
                        href={exp.lessonHref}
                        className="mt-5 inline-flex items-center text-sm font-bold text-electric hover:text-space transition-colors"
                      >
                        See Step-by-Step Lesson &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How a 45-Minute Activity-Based Period Works */}
          <section className="py-10 md:py-14 bg-space text-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              How Science &amp; Math Activity-Based Learning Runs in 45 Minutes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {periodSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-indigo-950/50 border border-indigo-500/25 rounded-2xl p-6"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-electric block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-indigo-500/25 pt-6 mt-8">
              <p className="text-sm sm:text-base font-bold text-cyan mb-4">
                Science Hooks Included for Regular Physics &amp; Biology Periods:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {scienceHooks.map((hook) => (
                  <Link
                    key={hook.name}
                    href={hook.href}
                    className="group bg-indigo-950/50 border border-indigo-400/25 hover:border-electric rounded-xl overflow-hidden transition-colors flex flex-col"
                  >
                    <div className="h-36 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={hook.image}
                        alt={hook.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-base sm:text-lg font-bold text-white group-hover:text-electric transition-colors">
                        {hook.name} &rarr;
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                        {hook.note}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Grade-Wise Syllabus Mapping Table */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
              Grade-Wise Science, Math Lab &amp; Activity Matrix
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Grade Band
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Math &amp; Science Concepts
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Curriculum &amp; NEP 2020 Fit
                    </th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">
                      Everyday Items Used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gradeMatrix.map((row) => (
                    <tr key={row.band} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-bold text-space align-top">
                        {row.band}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-600 font-medium align-top">
                        {row.concepts}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-indigo-700 font-semibold align-top">
                        {row.fit}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-700 font-semibold align-top">
                        {row.items}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Straight Answers for School Leaders */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] px-5 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Frequently Asked Questions: Curiosity Classroom &amp; Math Labs
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
                Next: STEM &amp; Innovation Lab Setup &rarr;
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-sm sm:text-base hover:bg-orange-500 transition-colors shadow-lg"
              >
                Book a Walkthrough
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
