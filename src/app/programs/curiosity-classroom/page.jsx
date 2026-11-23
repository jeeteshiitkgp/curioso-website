import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "School Math Lab & Activity-Based Learning",
  description: "Run a physical school math lab and activity-based learning inside regular 45-minute CBSE, ICSE, and IB periods using everyday items, not plastic kits.",
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
    description: "Run a physical school math lab and activity-based learning inside regular 45-minute CBSE, ICSE, and IB periods using everyday items, not plastic kits.",
    url: "https://www.curioso.school/programs/curiosity-classroom",
  },
};

export default function CuriosityClassroomPage() {
  const summaryMetrics = [
    {
      value: "₹0 Plastic Kit Lock-In",
      detail: "Paper, rice, scissors, pushpins, sticks",
    },
    {
      value: "45-Min Regular Period",
      detail: "No separate 500 sq. ft. room required",
    },
    {
      value: "Grades 1 to 10",
      detail: "Mapped to CBSE, ICSE, IB & IGCSE",
    },
  ];

  const comparisonRows = [
    {
      dimension: "Setup Cost",
      standard: "₹1.5 Lakhs to ₹4.5 Lakhs for turnkey acrylic/wood kit bundles",
      curioso: "Everyday classroom materials (80%+ lower total cost)",
    },
    {
      dimension: "Space Needed",
      standard: "Dedicated 500 sq. ft. room + steel almirahs for 40 students",
      curioso: "Runs right on regular classroom desks (or upgrades an existing room)",
    },
    {
      dimension: "Weekly Usage",
      standard: "1 visit a month; teachers lack time to move whole classes",
      curioso: "Built into daily 45-minute math and science periods",
    },
    {
      dimension: "How Math Is Taught",
      standard: "Confirming memorized formulas with pre-made plastic blocks",
      curioso: "Physical anomaly breaks intuition first; formula comes second",
    },
    {
      dimension: "Board & Assessment",
      standard: "Students copy standard steps into a lab manual",
      curioso: "Direct CBSE/ICSE/IB chapter mapping + Class 9 to 10 internal portfolios",
    },
  ];

  const mathExperiments = [
    {
      tag: "Grades 4 to 8 · SSS Triangle Congruence",
      title: "The Paper-Fold Bridge",
      items: "1 A4 sheet, 2 mugs, 20+ coins, ice-cream sticks, pushpins.",
      trap: "Flat paper buckles under 1 coin, and a 4-stick pinned square folds flat sideways.",
      math: "Accordion pleats and 3-stick triangles lock angles rigidly, showing why 8th-grade SSS congruence holds bridges up.",
    },
    {
      tag: "Grades 5 to 8 · Area vs Perimeter",
      title: "Walk Through a Postcard",
      items: "1 postcard or index card, 1 pair of scissors.",
      trap: "Every student insists a small card cannot fit a human body without ripping apart.",
      math: "Alternating slits open one unbroken ring large enough to step through. Surface area never changes while perimeter expands roughly 20x.",
    },
    {
      tag: "Grades 7 to 10 · Surface Area vs Volume",
      title: "The Two-Cylinder Rice Trap",
      items: "2 identical A4 sheets, tape, dry rice or sand.",
      trap: "Rolling one sheet tall and one wide uses the exact same paper area, so students bet on equal volume.",
      math: "Pouring rice proves the wide cylinder holds ~41% more because radius is squared (V = πr²h), fixing the most common mensuration blindspot.",
    },
  ];

  const periodSteps = [
    {
      step: "01 · 10 Min",
      title: "Break Intuition",
      desc: "Start with a physical prediction before writing any definition on the board.",
    },
    {
      step: "02 · 20 Min",
      title: "Test & Debug",
      desc: "Students fold, cut, pour, and measure on their own desks until their first guess fails.",
    },
    {
      step: "03 · 15 Min",
      title: "Lock the Formula",
      desc: "Only after they see the physical rule do we connect it straight to the textbook theorem.",
    },
  ];

  const scienceHooks = [
    {
      name: "Tilted Palm Friction",
      note: "Static friction as a self-adjusting force",
    },
    {
      name: "Submerged Breathing Leaf",
      note: "Live oxygen bubbles on stomata in sunlight",
    },
    {
      name: "Tiger's Blindspot",
      note: "Optics + deer dichromatic vision",
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
      concepts: "SSS congruence, linear balancing, ratios, static friction, optics",
      fit: "NCERT & CBSE Middle Competency Goals",
      items: "Mugs, coins, tape, A4 sheets, dry rice, leaves, flashlights",
    },
    {
      band: "Grades 9 to 10 (Secondary)",
      concepts: "Mensuration volume scaling, geometric proofs, experimental error",
      fit: "CBSE Internal Assessment (20-Mark Lab/Portfolio) & IGCSE",
      items: "A4 sheets, dry rice, calipers/rulers, lab reasoning logs",
    },
  ];

  const faqs = [
    {
      question: "What is the setup cost of a maths lab in CBSE schools?",
      answer: "Vendor turnkey math labs in India typically charge ₹1.5 Lakhs to ₹4.5 Lakhs for acrylic 3D solids, wooden geoboards, fraction circles, and steel cupboards. Curioso removes hardware markups entirely by licensing the physical curriculum and teacher Socratic guides while schools use everyday items already on hand, cutting setup costs by over 80%.",
    },
    {
      question: "Do we need a separate 500 sq. ft. room to run a math lab?",
      answer: "CBSE guidelines suggest a 500 sq. ft. room if you are storing bulky physical apparatus, which is often why classes visit the room only once a month. Curiosity Classroom works inside your existing 45-minute classrooms on regular student desks, and can also revitalize an underused math lab room if you already have one.",
    },
    {
      question: "What math lab equipment list do schools actually need?",
      answer: "Skip sealed plastic fraction circles and display solids that students only stare at behind glass. Most middle and high school math anomalies need only open-market items: A4 paper, postcards, scissors, tape, dry rice, coins, ice-cream sticks, pushpins, rulers, and basic measuring tools.",
    },
    {
      question: "How does activity-based learning fit inside our CBSE, ICSE, IB, or IGCSE timetable?",
      answer: "It does not require extra periods or a separate Saturday club. Each 45-minute module maps directly to your existing chapters and CBSE Class 9 to 10 internal assessment portfolios, backed by teacher scripts and weekly prep support.",
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
          titlePrefix="School Math Lab &"
          titleHighlight="Activity-Based Learning."
          subtitle="Turn regular 45-minute math and science periods into a working physical math lab using everyday desk items. Skip the 3-lakh cupboard of plastic shapes."
          activeSlug="curiosity-classroom"
          imageAlt="Curioso School Math Lab and Activity-Based Learning"
        />

        {/* Tight 3-Metric Summary Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10 md:mb-14 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white rounded-2xl border border-slate-200 shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {summaryMetrics.map((metric) => (
              <div key={metric.value} className="p-5 sm:p-6">
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium mt-1">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-10 md:space-y-16">
          {/* Section 1: Standard CBSE Math Lab vs Curioso Physical Math Lab */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-xl border border-slate-200">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
              Cost &amp; Usage Reality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Why Standard CBSE Maths Labs Sit Locked in Cupboards
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">
              Schools spend 1.5 to 4.5 lakhs on acrylic cones, plastic fraction discs, and steel almirahs that teachers rarely touch.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Dimension
                    </th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Standard Vendor Maths Lab
                    </th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-electric bg-orange-50/70">
                      Curioso Physical Math Lab
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.dimension} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-space align-top">
                        {row.dimension}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium align-top">
                        {row.standard}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-space font-semibold bg-orange-50/70 align-top">
                        {row.curioso}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: 3 Flagship No-Kit Math Lab Activities */}
          <section className="py-10 md:py-16 lg:py-24">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
              Desk-Ready Math Lab
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-3">
              Three Everyday Math Lab Experiments (Zero Kits)
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Every concept starts with a physical trap students get wrong on their first guess.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mathExperiments.map((exp) => (
                <div key={exp.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3">
                    {exp.tag}
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4">
                    {exp.title}
                  </h3>
                  <div className="divide-y divide-slate-200 border-t border-slate-200 mt-auto">
                    <div className="py-3">
                      <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-slate-500 block mb-1">
                        Items
                      </span>
                      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-medium leading-relaxed">
                        {exp.items}
                      </p>
                    </div>
                    <div className="py-3">
                      <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-electric block mb-1">
                        The Trap
                      </span>
                      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-medium leading-relaxed">
                        {exp.trap}
                      </p>
                    </div>
                    <div className="pt-3">
                      <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-cyan block mb-1">
                        Math Proved
                      </span>
                      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-medium leading-relaxed">
                        {exp.math}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How a 45-Minute Activity-Based Period Works */}
          <section className="py-10 md:py-16 lg:py-24 bg-space text-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-2xl">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
              Regular Timetable Fit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              How Activity-Based Learning Runs in 45 Minutes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {periodSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-indigo-950/50 border border-indigo-500/25 rounded-2xl p-6"
                >
                  <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-indigo-500/25 pt-6 mt-8">
              <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan block mb-4">
                Also Mapped for Science Periods (Grades 3 to 10):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {scienceHooks.map((hook) => (
                  <div
                    key={hook.name}
                    className="bg-indigo-950/40 border border-indigo-400/20 rounded-xl px-4 py-3"
                  >
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                      {hook.name}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium mt-1">
                      {hook.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Grade-Wise Math Lab & Syllabus Mapping Table */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-xl border border-slate-200">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
              CBSE, ICSE, IB &amp; IGCSE Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-6">
              Grade-Wise Math Lab &amp; Activity-Based Learning Matrix
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Grade Band
                    </th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Math &amp; Science Concepts
                    </th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Curriculum &amp; NEP 2020 Fit
                    </th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">
                      Everyday Items Used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gradeMatrix.map((row) => (
                    <tr key={row.band} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-space align-top">
                        {row.band}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium align-top">
                        {row.concepts}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-indigo-700 font-semibold align-top">
                        {row.fit}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold align-top">
                        {row.items}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Straight Answers for School Leaders (Visible FAQ + Bottom CTA) */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] px-6 sm:px-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Frequently Asked Questions: School Math Labs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <Link
                href="/programs/stem-lab"
                className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
              >
                Next: STEM &amp; Innovation Lab Setup &rarr;
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base hover:bg-orange-500 transition-colors shadow-lg"
              >
                Book a 30-Min Walkthrough
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
