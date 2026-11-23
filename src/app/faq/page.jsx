import Link from 'next/link';

export const metadata = {
  title: "School STEM & Math Lab FAQ",
  description: "Straight answers for school trustees and principals on NEP 2020 compliance, STEM and math lab costs, open-market materials, and teacher training.",
  alternates: {
    canonical: "https://www.curioso.school/faq",
  },
  openGraph: {
    title: "School STEM & Math Lab FAQ | Curioso",
    description: "Straight answers for school trustees and principals on NEP 2020 compliance, STEM and math lab costs, open-market materials, and teacher training.",
    url: "https://www.curioso.school/faq",
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: "NEP 2020 & Board Alignment",
      question: "How does Curioso help CBSE and ICSE schools comply with NEP 2020 mandates?",
      answer: "Curioso provides a structured physical curriculum mapped directly to NCERT, CBSE, and ICSE competency-based learning milestones. Rather than treating practicals as a disconnected Saturday hobby club, we weave hands-on inquiry straight into regular science and math class hours."
    },
    {
      category: "Pedagogy & No-Kit Mechanics",
      question: "How does Curioso differ from traditional robotics labs or Atal Tinkering Labs (ATL)?",
      answer: "Traditional robotics labs rely on expensive, pre-calibrated plastic kits where parts only snap together one way, teaching manual-following. Curioso enforces a 'No-Kit' rule: students build from raw domestic materials (copper wire, syringes, wood, paper, sheet metal) so they actually debug mechanical failures and grasp first-principles physics."
    },
    {
      category: "Setup Costs & Economics",
      question: "What is the cost of implementing Curioso compared to a traditional STEM lab?",
      answer: "Traditional STEM and innovation labs require ₹10 Lakhs to ₹25 Lakhs in fragile imported hardware plus steep annual kit replenishment fees. Curioso licenses the curriculum IP with zero hardware lock-in. Schools procure basic raw materials locally from open markets, cutting total setup and recurring costs by over 80%."
    },
    {
      category: "Teacher Training & Enablement",
      question: "Do existing science and math teachers need specialized engineering or coding backgrounds?",
      answer: "No. Curioso gives your existing teachers step-by-step Socratic questioning guides, physical anomaly checklists, weekly prep syncs, and monthly campus workshops so they run every session without external vendor trainers."
    },
    {
      category: "Curriculum Scope & Grades",
      question: "What grades and age groups does the Curioso curriculum cover?",
      answer: "Curioso covers Grades 1 through 10 across four stages: Foundational (Grades 1 to 2), Preparatory (Grades 3 to 5), Middle (Grades 6 to 8), and Secondary (Grades 9 to 10), forming a connected 45-node progression across Physics, Mathematics, Biology, and Design Mechanics."
    },
    {
      category: "Classroom Logistics & Safety",
      question: "How does a school manage raw materials and classroom logistics safely?",
      answer: "Every Curioso activity is built for safe classroom execution using low-voltage power and everyday materials. Schools get a clear Bill of Materials (BOM) showing exactly what to buy locally, how to store it safely, and how to distribute trays across batches."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-ivory min-h-screen pb-16 md:pb-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-10 md:mb-16">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-16 md:pb-20">
            <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
              
              <div className="col-span-8 md:col-span-7 max-w-2xl">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-electric bg-indigo-950/80 border border-electric/30 px-3 py-1 rounded-full mb-4 inline-block">
                  School FAQ
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Questions.</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                  Direct answers for school directors, trustees, and principals on setup costs, NEP 2020 compliance, raw-material safety, and teacher training.
                </p>
              </div>

              <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] opacity-60 mix-blend-screen"></div>
                <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-3 sm:p-6 md:p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <img 
                    src="/curioso_hero_robot.png" 
                    alt="Curioso Clinical Grade Architecture" 
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FAQs Grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-2.5 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-space mb-4 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12 md:mt-16 bg-space rounded-3xl p-8 md:p-12 border border-indigo-900/60 text-center text-white relative overflow-hidden">
            <h3 className="text-xl sm:text-3xl font-extrabold mb-4">
              Have a question about your school's timetable or lab budget?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's get on a 30-minute call and look at how this fits your classrooms and existing science and math teachers.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center bg-electric hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Book a 30-Min Call &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
