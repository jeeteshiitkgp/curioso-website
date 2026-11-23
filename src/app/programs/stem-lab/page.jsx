import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';

export const metadata = {
  title: "School STEM Lab & Innovation Lab Setup India",
  description: "Set up a school STEM lab or innovation lab in India at 80% lower cost than robotics labs and ATLs. Open-market BOM, 4-zone layout, teacher training.",
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
    description: "Set up a school STEM lab or innovation lab in India at 80% lower cost than robotics labs and ATLs. Open-market BOM, 4-zone layout, teacher training.",
    url: "https://www.curioso.school/programs/stem-lab",
  },
};

export default function StemLabPage() {
  const costComparison = [
    {
      model: "Standard Kit Robotics Lab / ATL Model",
      capex: "₹7 Lakhs to ₹15 Lakhs (NITI Aayog ATL benchmark: ₹10L to ₹20L grant)",
      recurring: "10% to 15% annually on proprietary replacement kits and software renewals",
      ownership: "High hardware lock-in; dependent on rotating external vendor trainers",
      highlight: false,
    },
    {
      model: "Advanced Vendor Tech Lab (VR, Drones, 3D Printers)",
      capex: "₹15 Lakhs to ₹25 Lakhs+",
      recurring: "Steep annual firmware licenses, filaments, and proprietary service contracts",
      ownership: "High glass-cupboard lockup rate once initial novelty or parts fail",
      highlight: false,
    },
    {
      model: "Curioso Open-Market STEM & Innovation Lab",
      capex: "₹1.5 Lakhs to ₹4 Lakhs open-market hardware (80%+ lower total cost)",
      recurring: "Local wholesale consumables (copper wire, syringes, wood, DC motors)",
      ownership: "Zero hardware markups; permanent school science and math faculty trained",
      highlight: true,
    },
  ];

  const labZones = [
    {
      zone: "Zone 01",
      name: "Raw Fabrication & Mechanical Assembly Zone",
      specs: "Heavy-duty workbenches, hand saws, utility jigs, scrap wood, sheet metal, syringes, cardstock, and fasteners for unscripted structural builds.",
    },
    {
      zone: "Zone 02",
      name: "Circuitry, Motors & Troubleshooting Zone",
      specs: "DC motors, switches, copper wire, 9V and rechargeable cells, multimeters, and supervised soldering points where students trace real electrical faults.",
    },
    {
      zone: "Zone 03",
      name: "Stress-Testing, Measurement & Calibration Zone",
      specs: "Inclined planes, load-bearing rigs, water troughs for hydraulics and fluid dynamics, calipers, and timers for empirical iteration.",
    },
    {
      zone: "Zone 04",
      name: "Student Prototype Showcase & Viva Zone",
      specs: "Open display shelves and corridor boards showcasing functional student builds, failed prototypes, and engineering logs for parent walkthroughs.",
    },
  ];

  const curriculumRows = [
    {
      stage: "Grades 3 to 5 (Preparatory)",
      concepts: "Simple machines, structural balance, basic circuitry, air and water pressure",
      alignment: "NEP 2020 Inquiry & Toy-Based Pedagogy",
      builds: "Accordion paper trusses, aluminum foil switches, syringe hydraulic lifts, pulley hoists",
    },
    {
      stage: "Grades 6 to 8 (Middle)",
      concepts: "Gearing ratios, static friction, Pascal's law, torque, filtration, Ohm's law",
      alignment: "CBSE / ICSE / IB MYP Competency Modules",
      builds: "Bare-Chassis EV Racer, 3-Axis Hydraulic Crane, Multi-Stage Water Purifier",
    },
    {
      stage: "Grades 9 to 10 (Secondary)",
      concepts: "Dual-motor kinematics, solar tracking, structural tolerances, thermal transfer",
      alignment: "NCF 2023 & CBSE Skill Education Alignment",
      builds: "Dual-Motor Tank-Drive Rover, Solar-Tracked Evaporative Cooler",
    },
  ];

  const faqs = [
    {
      question: "What is the setup cost of a school innovation lab or STEM lab in India?",
      answer: "Traditional kit-based STEM and robotics labs in India cost ₹7 Lakhs to ₹25 Lakhs plus 10% to 15% in annual proprietary kit renewals. A Curioso open-market STEM and innovation lab reduces total setup and recurring hardware cost by over 80% (typically ₹1.5 Lakhs to ₹4 Lakhs in locally procured raw tools and materials) because we charge zero hardware markups and license the curriculum IP directly to the school.",
    },
    {
      question: "How does a Curioso STEM and innovation lab compare to a robotics lab or Atal Tinkering Lab (ATL)?",
      answer: "Standard robotics labs and many tinkering labs rely on pre-molded plastic snap kits where parts fit only one predetermined way, turning students into manual followers. Curioso uses raw domestic materials (copper wire, syringes, scrap wood, DC motors, sheet metal) so students face genuine mechanical friction, debug failed builds, and grasp first-principles physics and math.",
    },
    {
      question: "What room size and equipment are required for a school STEM lab?",
      answer: "An ideal school STEM lab or makerspace runs in a 600 to 1,500 sq. ft. room configured for 20 to 30 students per batch (3 to 4 students per workstation) across four zones: Raw Fabrication, Circuitry and Motors, Stress-Testing and Calibration, and Prototype Showcase. Curioso supplies the complete vendor-neutral Bill of Materials (BOM) sourced from local open markets.",
    },
    {
      question: "Who runs the innovation lab sessions once the room is set up?",
      answer: "Instead of relying on rotating external vendor staff, Curioso helps you hire or train your existing science and math teachers as lab facilitators. We provide step-by-step Socratic questioning guides, physical anomaly checklists, weekly lesson-prep syncs, and monthly on-campus faculty workshops so capability stays permanently inside your school.",
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
          subtitle="Set up a high-impact school STEM lab, innovation lab, and makerspace in India at 80% lower cost than traditional robotics labs and Atal Tinkering Labs (ATL), with zero hardware lock-in and permanent faculty enablement."
          activeSlug="stem-lab"
          imageAlt="Curioso School STEM Lab and Innovation Lab Setup"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 md:space-y-20">
          {/* 1. Cost Comparison Table */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
              Unit Economics &amp; Setup Cost
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-4">
              STEM Lab &amp; Innovation Lab Setup Cost Breakdown in India
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Most school trustees see two expensive extremes when budgeting a STEM lab, robotics lab, or tinkering lab: ₹10 Lakh to ₹25 Lakh vendor hardware packages or underused glass rooms. Here is how an open-market innovation lab changes the balance sheet.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Lab Model</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Initial Setup Cost (Capex)</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Annual Recurring Cost</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Pedagogy &amp; Faculty Ownership</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row) => (
                    <tr
                      key={row.model}
                      className={`border-b border-slate-200 ${
                        row.highlight ? "bg-orange-50/70" : "bg-white"
                      }`}
                    >
                      <td className={`p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold ${row.highlight ? "text-electric" : "text-space"}`}>
                        {row.model}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold">
                        {row.capex}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">
                        {row.recurring}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">
                        {row.ownership}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. Why Traditional Robotics Labs & Tinkering Labs Fail */}
          <section className="py-10 md:py-16 lg:py-24">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
              The Capex Trap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Why Traditional Robotics Labs and Tinkering Labs Gather Dust
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                  1. Sealed Kits Teach Assembly, Not Engineering
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  Pre-calibrated robotics kits snap together only one predetermined way. The kit manufacturer already solved every mechanical tolerance before the box reached your school. Students follow 20-step manuals instead of reasoning from first principles.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                  2. High-Cost Hardware Creates Fear of Failure
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  Science teachers hesitate to let 11-year-olds experiment freely with a ₹30,000 proprietary controller that might fry. When students build with ₹50 DC motors, copper wire, syringes, and scrap wood, breaking a part costs pennies and triggers real debugging.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3">
                  3. Rotating Vendor Trainers Drain Institutional IP
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  Outsourcing lab classes to temporary vendor trainers leaves permanent faculty disconnected from the tinkering lab. Curioso trains your existing science and math teachers so engineering intuition stays inside the school year after year.
                </p>
              </div>
            </div>
          </section>

          {/* 3. 4-Zone Lab Layout & Room Specs */}
          <section className="py-10 md:py-16 lg:py-24 bg-space text-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-2xl">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
              Makerspace Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              4-Zone Innovation Lab &amp; Makerspace Layout (600 to 1,500 Sq. Ft.)
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-cyan">
                Recommended Room Size: 600 to 1,500 sq. ft.
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white">
                Batch Capacity: 20 to 30 students
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-950 border border-indigo-400/30 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-electric">
                Workstation Ratio: 3 to 4 students per bench
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labZones.map((item) => (
                <div
                  key={item.zone}
                  className="bg-indigo-950/50 border border-indigo-500/25 rounded-2xl p-6"
                >
                  <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric block mb-2">
                    {item.zone}
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed">
                    {item.specs}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Grade-Wise Curriculum Table */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-3 block">
              Academic Mapping
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-4">
              Grade-Wise STEM &amp; Innovation Lab Curriculum (NEP 2020 &amp; NCF 2023)
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              Every project inside the innovation lab maps directly to regular CBSE, ICSE, IB, and IGCSE science and math milestones, turning compliance into genuine conceptual depth.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Grade Stage</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Core Science &amp; Math Concepts</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Board Alignment</th>
                    <th className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold text-space">Flagship Lab Builds</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculumRows.map((row) => (
                    <tr key={row.stage} className="border-b border-slate-200">
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-space">
                        {row.stage}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">
                        {row.concepts}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-indigo-700 font-semibold">
                        {row.alignment}
                      </td>
                      <td className="p-3 sm:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-semibold">
                        {row.builds}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Open-Market BOM & Teacher Enablement */}
          <section className="py-10 md:py-16 lg:py-24">
            <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-cyan mb-3 block">
              Execution &amp; Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Open-Market Bill of Materials (BOM) &amp; Teacher Enablement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4">
                  Vendor-Neutral Procurement (Zero Hardware Markups)
                </h3>
                <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  <li>1. Curioso licenses the proprietary 45-node curriculum IP, student engineering challenges, and safety protocols.</li>
                  <li>2. We hand your procurement team an exact open-market Bill of Materials (copper wire, syringes, DC motors, sheet metal, scrap wood, multimeters, basic hand tools, and modular trays).</li>
                  <li>3. Your school purchases materials directly from local wholesale markets at real cost with zero vendor lock-in.</li>
                </ul>
              </div>
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-4">
                  Faculty Induction &amp; Continuous Lab Support
                </h3>
                <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                  <li>1. Support with facilitator hiring and induction or upskilling your current science and math faculty.</li>
                  <li>2. Weekly Socratic lesson-prep syncs and physical anomaly troubleshooting guides so teachers know how to redirect stuck students without giving away the answer.</li>
                  <li>3. Monthly on-campus teacher workshops led by curriculum architects with experience across 500+ schools and 200,000+ students (founded by IIT Kharagpur Aerospace Engineer Jeetesh Gulani).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Visible FAQ Section */}
          <section className="py-10 md:py-16 lg:py-24 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-8">
              Frequently Asked Questions: School STEM &amp; Innovation Labs
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
                href="/programs/project-based-learning"
                className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
              >
                Next: Explore Multi-Week Project-Based Learning Builds &rarr;
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-electric text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base hover:bg-orange-500 transition-colors shadow-lg"
              >
                Request a Custom Lab BOM &amp; Call
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
