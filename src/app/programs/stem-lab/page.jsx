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
  const costComparison = [
    {
      model: "Standard Kit Robotics Lab / ATL Model",
      setupCost: "₹7 Lakhs to ₹15 Lakhs (NITI Aayog ATL benchmark: ₹10L to ₹20L grant)",
      recurring: "10% to 15% annually on replacement kits and software renewals",
      ownership: "Tied to one vendor; runs on visiting outside trainers",
      highlight: false,
    },
    {
      model: "Advanced Tech Lab (VR, Drones, 3D Printers)",
      setupCost: "₹15 Lakhs to ₹25 Lakhs+",
      recurring: "Yearly software licenses, filaments, and repair contracts",
      ownership: "High chance the room stays locked once parts break",
      highlight: false,
    },
    {
      model: "Curioso Low-Cost STEM & Innovation Lab",
      setupCost: "₹1.5 Lakhs to ₹4 Lakhs in local tools & materials (80%+ lower total cost)",
      recurring: "Everyday local supplies (copper wire, syringes, wood, small DC motors)",
      ownership: "Zero hardware markups; your own science and math teachers run it",
      highlight: true,
    },
  ];

  const labZones = [
    {
      zone: "Zone 01",
      name: "Cutting & Building Benches",
      specs: "Sturdy worktables, hand saws, scrap wood, thin metal sheets, syringes, cardboard, and fasteners for building from scratch.",
    },
    {
      zone: "Zone 02",
      name: "Motors, Wiring & Circuits",
      specs: "Simple DC motors, switches, copper wire, 9V and rechargeable batteries, basic meters, and supervised soldering tools.",
    },
    {
      zone: "Zone 03",
      name: "Testing & Measurement Area",
      specs: "Sloped ramps, weight-testing frames, water tubs for pressure experiments, measuring tapes, and stopwatches.",
    },
    {
      zone: "Zone 04",
      name: "Student Work & Shelf Display",
      specs: "Open shelves showing working student builds, early broken versions, and student notebooks for parents and visitors to inspect.",
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
      answer: "Traditional kit-based STEM and robotics labs in India cost ₹7 Lakhs to ₹25 Lakhs plus 10% to 15% every year in replacement kits. A Curioso lab cuts setup and yearly supply costs by over 80% (typically ₹1.5 Lakhs to ₹4 Lakhs for tools and materials bought locally) because we do not mark up hardware and only charge for the curriculum and teacher training.",
    },
    {
      question: "How does a Curioso STEM and innovation lab compare to a robotics lab or Atal Tinkering Lab (ATL)?",
      answer: "Standard robotics labs and many tinkering labs rely on pre-molded plastic kits that snap together only one way, turning students into manual followers. Curioso uses everyday materials like copper wire, syringes, scrap wood, small DC motors, and cardboard so students see where things fail, fix them, and truly grasp physics and math.",
    },
    {
      question: "What room size and equipment are required for a school STEM lab?",
      answer: "A school STEM lab works well in a 600 to 1,500 sq. ft. room set up for 20 to 30 students (3 to 4 students per table) across four areas: Cutting & Building, Motors & Circuits, Testing & Measurement, and Display Shelves. Curioso gives your team the complete local shopping list so you buy directly at wholesale prices.",
    },
    {
      question: "Who runs the innovation lab sessions once the room is set up?",
      answer: "Instead of relying on rotating outside trainers, Curioso helps train your own science and math teachers to run the lab. We provide step-by-step teacher guides, checklists for common student mistakes, weekly prep check-ins, and monthly on-campus workshops so the skill stays inside your school.",
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
      <div className="bg-ivory min-h-screen">
        <ProgramHeader
          badge="STEM & Innovation Lab"
          titlePrefix="School STEM Lab &"
          titleHighlight="Innovation Lab Setup."
          subtitle="Set up a high-impact school STEM lab, innovation lab, and makerspace in India at 80% lower cost than traditional robotics labs and Atal Tinkering Labs (ATL), with zero vendor lock-in and permanent teacher training."
          activeSlug="stem-lab"
          heroImage="/images/school/cardboard-ev-desk-closeup.jpg"
          imageAlt="Students building a scratch-built electric car with cardboard and small motors"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-16">
          {/* 1. Cost Comparison Table */}
          <section className="py-8 md:py-14 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-4">
              STEM Lab &amp; Innovation Lab Setup Cost Breakdown in India
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Most school directors see two expensive extremes when budgeting a STEM lab, robotics lab, or tinkering lab: ₹10 Lakh to ₹25 Lakh vendor packages or underused glass rooms. Here is how buying local everyday supplies changes the budget.
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
                  Snap-together robotics kits fit only one predetermined way. The factory already solved every measurement problem before the box reached your school. Students follow 20-step manuals instead of thinking from scratch.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                  2. Expensive Parts Create Fear of Breaking Things
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Science teachers hesitate to let 11-year-olds experiment freely with a ₹30,000 circuit board that might burn out. When students build with ₹50 motors, copper wire, syringes, and scrap wood, breaking a part costs pennies and teaches real problem solving.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-3">
                  3. Outside Trainers Leave Zero Skill Behind
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Handing lab classes to visiting vendor staff leaves your regular faculty disconnected from the lab. Curioso trains your existing science and math teachers so the capability stays inside your school year after year.
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
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Students test wheel alignment and balance directly on classroom desks.</p>
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
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Wooden sticks, rubber bands, cardboard, and motors bought locally at wholesale rates.</p>
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
              Every project inside the innovation lab maps directly to regular CBSE, ICSE, IB, and IGCSE science and math chapters.
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
                  <li>1. Curioso provides the 45-project lesson system, student challenges, and safety guides.</li>
                  <li>2. We give your school a simple shopping list (copper wire, syringes, small DC motors, thin metal, scrap wood, basic meters, hand tools, and storage trays).</li>
                  <li>3. Your school buys everything straight from local hardware markets at real cost with zero vendor lock-in.</li>
                </ul>
              </div>
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-space mb-4">
                  We Train Your Existing Teachers
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  <li>1. Help hiring lab staff or training your current science and math teachers.</li>
                  <li>2. Weekly prep check-ins and troubleshooting guides so teachers know how to guide stuck students without giving away the answer.</li>
                  <li>3. Monthly on-campus teacher workshops led by curriculum designers with experience across 500+ schools and 200,000+ students (founded by IIT Kharagpur Aerospace Engineer Jeetesh Gulani).</li>
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
