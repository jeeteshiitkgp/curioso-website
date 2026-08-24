import Link from 'next/link';

export const metadata = {
  title: "Frequently Asked Questions | Curioso Curriculum Architecture",
  description: "Comprehensive institutional FAQs for school trustees, principals, and academic coordinators regarding NEP 2020 compliance, no-kit physical pedagogy, setup costs, and teacher training.",
  alternates: {
    canonical: "https://www.curioso.school/faq",
  },
  openGraph: {
    title: "Institutional FAQs | Curioso Curriculum Architecture",
    description: "Detailed answers on implementing clinical-grade physical science & math curricula in CBSE & ICSE schools across India.",
    url: "https://www.curioso.school/faq",
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: "NEP 2020 & Board Alignment",
      question: "How does Curioso help CBSE and ICSE schools comply with NEP 2020 mandates?",
      answer: "Curioso provides a clinical-grade physical curriculum mapped directly to NCERT, CBSE, and ICSE competency-based learning milestones. Rather than treating practicals as a disconnected extracurricular club, Curioso operates as a structured application layer integrated directly into regular science and math class hours."
    },
    {
      category: "Pedagogy & No-Kit Mechanics",
      question: "How does Curioso differ from traditional robotics labs or Atal Tinkering Labs (ATL)?",
      answer: "Traditional robotics labs rely on expensive, pre-calibrated plastic kits where parts only snap together in one predetermined way, teaching algorithmic assembly. Curioso enforces a 'No-Kit' philosophy: students build from raw, domestic materials (copper wire, syringes, wood, paper, sheet metal) to force genuine mechanical troubleshooting, spatial intuition, and first-principles physics."
    },
    {
      category: "Setup Costs & Economics",
      question: "What is the cost of implementing Curioso compared to a traditional STEM lab?",
      answer: "Traditional STEM labs require ₹10 Lakhs to ₹25 Lakhs in fragile imported hardware and steep recurring kit replenishment fees. Curioso operates on an IP and curriculum licensing model with zero hardware lock-in. Schools procure basic raw materials locally from open markets, reducing total implementation and recurring costs by over 80%."
    },
    {
      category: "Teacher Training & Enablement",
      question: "Do existing science and math teachers need specialized engineering or coding backgrounds?",
      answer: "No. Curioso provides turnkey Socratic facilitation blueprints, teacher diagnostic training, and physical anomaly guides for existing school faculty. Teachers are equipped with structured questioning frameworks and cognitive redirection steps rather than dry lecture scripts."
    },
    {
      category: "Curriculum Scope & Grades",
      question: "What grades and age groups does the Curioso curriculum cover?",
      answer: "Curioso covers Grades 1 through 10 across four developmental stages: Foundational (Grades 1-2), Preparatory (Grades 3-5), Middle (Grades 6-8), and Secondary (Grades 9-10), forming a continuous 45-node cross-linked progression across Physics, Mathematics, Biology, and Design Mechanics."
    },
    {
      category: "Classroom Logistics & Safety",
      question: "How does a school manage raw materials and classroom logistics safely?",
      answer: "Every Curioso node is engineered for domestic classroom safety using non-hazardous, low-voltage, and everyday materials. Schools receive an exhaustive Bill of Materials (BOM) detailing exact local procurement sources, storage protocols, and modular student distribution trays."
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
                  Institutional Architecture
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Questions.</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                  Everything school directors, trustees, and academic coordinators need to know about implementing Curioso's clinical physical curriculum.
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
              Have a specific curriculum or partnership query?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We work directly with school leadership to integrate clinical physical learning into regular academic timetables.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center bg-electric hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Schedule an Institutional Consultation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
