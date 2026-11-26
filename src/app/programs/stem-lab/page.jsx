import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "School STEM Lab & Innovation Lab Setup India",
  description: "Set up a school STEM lab or innovation lab in India at 80% lower cost than robotics labs and ATLs, using local supplies and trained school teachers.",
  keywords: [
    "innovation lab for schools in india",
    "stem lab setup cost in india",
    "school stem lab curriculum",
    "robotics lab alternative for schools",
    "makerspace in school india",
    "atal tinkering lab alternative",
    "no-kit innovation lab",
  ],
  alternates: {
    canonical: "https://www.curioso.school/programs/stem-lab",
  },
  openGraph: {
    title: "School STEM Lab & Innovation Lab Setup India | Curioso",
    description: "Set up a school STEM lab or innovation lab in India at 80% lower cost than robotics labs and ATLs, using local supplies and trained school teachers.",
    url: "https://www.curioso.school/programs/stem-lab",
  },
};

export default function StemLabPage() {
  const summaryMetrics = [
    {
      value: "₹1.5L to ₹4L Local Setup",
      detail: "80%+ lower cost than ₹10L to ₹25L robotics packages",
    },
    {
      value: "600 to 1,500 Sq. Ft.",
      detail: "4 clear zones for 20 to 30 students per batch",
    },
    {
      value: "Your Own Teachers",
      detail: "Weekly prep check-ins & monthly campus workshops",
    },
  ];

  const costComparison = [
    {
      model: "Standard Kit Robotics Lab / ATL Model",
      setupCost: "₹7 Lakhs to ₹15 Lakhs (NITI Aayog ATL: ₹10L to ₹20L grant)",
      recurring: "10% to 15% yearly on replacement kits & software",
      ownership: "Vendor lock-in; relies on outside trainers",
      highlight: false,
    },
    {
      model: "Advanced Tech Lab (VR, Drones, 3D Printers)",
      setupCost: "₹15 Lakhs to ₹25 Lakhs+",
      recurring: "Yearly software fees, filaments, and repair contracts",
      ownership: "High risk the room stays locked when parts break",
      highlight: false,
    },
    {
      model: "Curioso Low-Cost STEM & Innovation Lab",
      setupCost: "₹1.5 Lakhs to ₹4 Lakhs in local tools (80%+ lower total cost)",
      recurring: "Everyday local supplies (wire, syringes, wood, DC motors)",
      ownership: "Zero kit markups; your own science and math teachers run it",
      highlight: true,
    },
  ];

  const labZones = [
    {
      zone: "Zone 01",
      name: "Cutting & Building Benches",
      specs: "Worktables, hand saws, scrap wood, thin metal, syringes, cardboard, and fasteners.",
    },
    {
      zone: "Zone 02",
      name: "Motors, Wiring & Circuits",
      specs: "Small DC motors, switches, copper wire, batteries, basic meters, and soldering irons.",
    },
    {
      zone: "Zone 03",
      name: "Testing & Measurement Area",
      specs: "Sloped ramps, weight frames, water tubs, measuring tapes, and stopwatches.",
    },
    {
      zone: "Zone 04",
      name: "Student Work & Shelf Display",
      specs: "Open shelves showing working builds, broken prototypes, and student notebooks.",
    },
  ];

  const curriculumRows = [
    {
      stage: "Grades 3 to 5 (Preparatory)",
      concepts: "Simple machines, balance, basic circuits, air and water pressure",
      alignment: "NEP 2020 Inquiry & Toy-Based Learning",
      builds: "Folded paper bridges, aluminum foil switches, syringe lifts, pulley hoists",
    },
    {
      stage: "Grades 6 to 8 (Middle)",
      concepts: "Gears, friction, liquid pressure, spinning force, filtration, electric circuits",
      alignment: "CBSE / ICSE / IB MYP Modules",
      builds: "Scratch-Built Electric Car, Syringe Hydraulic Crane, Layered Water Filter",
    },
    {
      stage: "Grades 9 to 10 (Secondary)",
      concepts: "Two-motor steering, solar angles, frame strength, heat transfer",
      alignment: "NCF 2023 & CBSE Skill Subjects",
      builds: "Two-Motor Steerable Rover, Solar Air Cooler",
    },
  ];

  const faqs = [
    {
      question: "What is the setup cost of a school innovation lab or STEM lab in India?",
      answer: "Traditional kit-based robotics and STEM labs cost ₹7 Lakhs to ₹25 Lakhs plus 10% to 15% yearly in replacement kits. A Curioso lab typically runs ₹1.5 Lakhs to ₹4 Lakhs in locally bought tools and supplies (80%+ lower cost) because we never mark up hardware.",
    },
    {
      question: "How does a Curioso STEM and innovation lab compare to a robotics lab or Atal Tinkering Lab (ATL)?",
      answer: "Kit robotics labs snap together only one way, turning students into manual followers. Curioso uses copper wire, syringes, scrap wood, small DC motors, and cardboard so students spot failures, fix them, and grasp the real physics.",
    },
    {
      question: "What room size and equipment are required for a school STEM lab?",
      answer: "A 600 to 1,500 sq. ft. room fits 20 to 30 students across four zones: Cutting & Building, Motors & Circuits, Testing & Measurement, and Display Shelves. Curioso gives your team the complete local shopping list to buy directly at wholesale prices.",
    },
    {
      question: "Who runs the innovation lab sessions once the room is set up?",
      answer: "Your own science and math teachers run the lab instead of rotating outside trainers. Curioso provides step-by-step teacher guides, mistake checklists, weekly prep check-ins, and monthly campus workshops.",
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
          badge="STEM & Innovation Lab"
          titlePrefix="School STEM Lab &"
          titleHighlight="Innovation Lab Setup."
          subtitle="Set up a school STEM lab and innovation lab in India at 80% lower cost than robotics labs and Atal Tinkering Labs (ATL), using local supplies and your own trained teachers."
          activeSlug="stem-lab"
          heroImage="/images/school/cardboard-ev-desk-closeup.jpg"
          imageAlt="Students building a scratch-built electric car with cardboard and small motors"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-16">
          {/* 1. Cost Comparison Table */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-4">
              STEM Lab &amp; Innovation Lab Setup Cost Breakdown in India
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              School directors usually see ₹10 Lakh to ₹25 Lakh vendor packages when budgeting a STEM lab, robotics lab, or tinkering lab. Buying everyday local supplies cuts that budget by over 80%.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Lab Model</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Upfront Setup Cost</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Annual Recurring Cost</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Learning &amp; Teacher Ownership</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row) => (
                    <tr
                      key={row.model}
                      className={`border-b border-slate-200 ${row.highlight ? "bg-orange-50/70" : "bg-white"}`}
                    >
                      <td className={`p-3 sm:p-4 text-xs sm:text-sm md:text-base font-bold ${row.highlight ? "text-electric" : "text-space"}`}>
                        {row.model}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-700 font-semibold">
                        {row.setupCost}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                        {row.recurring}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                        {row.ownership}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-slate-600">
              <span>Want the full budget math?</span>
              <Link
                href="/blog/the-capex-trap"
                className="font-bold text-electric hover:text-space transition-colors"
              >
                Read why ₹15 Lakh STEM labs sit locked in glass cupboards &rarr;
              </Link>
            </div>
          </section>

          {/* 2. Why Traditional Robotics Labs & Tinkering Labs Fail */}
          <section className="py-6 md:py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Why Traditional Robotics Labs and Tinkering Labs Gather Dust
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                  1. Sealed Kits Teach Assembly, Not Engineering
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Snap-together robotics kits fit one set way because the factory solved every measurement already. Students follow step manuals instead of thinking from scratch.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                  2. Expensive Parts Create Fear of Breaking Things
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Teachers avoid letting 11-year-olds experiment on a ₹30,000 board that can burn out. With ₹50 motors, wire, syringes, and wood, breaking a part costs pennies and teaches troubleshooting.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                  3. Outside Trainers Leave Zero Skill Behind
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Outsourcing lab hours to visiting staff leaves your regular teachers disconnected from the room. We train your own faculty so the skill stays on campus.
                </p>
              </div>
            </div>
          </section>

          {/* 3. 4-Zone Lab Layout & Room Specs */}
          <section className="py-10 md:py-14 bg-space text-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              4-Zone Innovation Lab &amp; Makerspace Layout (600 to 1,500 Sq. Ft.)
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-xs sm:text-sm font-bold text-cyan">
                Room Size: 600 to 1,500 sq. ft.
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-xs sm:text-sm font-bold text-white">
                Batch Size: 20 to 30 students
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-xs sm:text-sm font-bold text-electric">
                3 to 4 students per workbench
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labZones.map((item) => (
                <div
                  key={item.zone}
                  className="bg-indigo-950/50 border border-indigo-500/25 rounded-2xl p-6"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-electric block mb-2">
                    {item.zone}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {item.specs}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3B. Inside a Real School Lab Session (Face-Free) */}
          <section className="py-8 md:py-12 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
              What Happens Inside the Lab
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
                  <p className="text-sm sm:text-base font-bold text-space">Tabletop Drive Testing</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Testing wheel alignment and balance directly on classroom desks.</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
                <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                  <img
                    src="/images/school/sticks-hands-landscape.jpg"
                    alt="Hands joining wooden sticks and rubber bands"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm sm:text-base font-bold text-space">Low-Cost Local Supplies</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Sticks, rubber bands, cardboard, and motors bought locally at wholesale cost.</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
                <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                  <img
                    src="/images/school/cardboard-hands-circle.jpg"
                    alt="Hands assembling hand-cut cardboard structures and sticks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm sm:text-base font-bold text-space">Hands-On Debugging</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Groups cut, fit, and test joints without pre-molded plastic parts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Grade-Wise Curriculum Table */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-4">
              Grade-Wise STEM &amp; Innovation Lab Curriculum (NEP 2020 &amp; NCF 2023)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Every lab project maps straight to CBSE, ICSE, IB, and IGCSE science and math chapters.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Grade Stage</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Core Science &amp; Math Concepts</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Board Alignment</th>
                    <th className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-extrabold text-space">Flagship Lab Builds</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculumRows.map((row) => (
                    <tr key={row.stage} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base font-bold text-space">
                        {row.stage}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
                        {row.concepts}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-indigo-700 font-semibold">
                        {row.alignment}
                      </td>
                      <td className="p-3 sm:p-4 text-xs sm:text-sm md:text-base text-slate-700 font-semibold">
                        {row.builds}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Buy Supplies Locally & Teacher Training */}
          <section className="py-6 md:py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Buy Supplies Locally &amp; Train Your Existing Teachers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-4">
                  Buy Supplies Locally (Zero Hardware Markups)
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  <li>1. Curioso supplies the 45-project lesson system, student tasks, and safety guides.</li>
                  <li>2. You get one clear local shopping list (wire, syringes, DC motors, scrap wood, meters, hand tools).</li>
                  <li>3. Your team buys straight from local wholesale markets with zero vendor lock-in.</li>
                </ul>
              </div>
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-4">
                  We Train Your Existing Teachers
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  <li>1. Support hiring lab staff or upskilling your current science and math faculty.</li>
                  <li>2. Weekly prep check-ins and guides to coach stuck students without giving answers away.</li>
                  <li>3. Monthly campus workshops led by Jeetesh Gulani (IIT Kharagpur; 500+ schools, 200,000+ students).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Visible FAQ Section */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Frequently Asked Questions: School STEM &amp; Innovation Labs
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
                href="/programs/project-based-learning"
                className="text-sm sm:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
              >
                Next: Explore Multi-Week Project-Based Learning Builds &rarr;
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-sm sm:text-base hover:bg-orange-500 transition-colors shadow-lg"
              >
                Book a Lab Walkthrough
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
