export const metadata = {
  title: "School STEM & Math Lab FAQ",
  description: "Straight answers for school trustees and principals on NEP 2020 compliance, STEM and math lab costs, everyday supplies, and teacher training.",
  alternates: {
    canonical: "https://www.curioso.school/faq",
  },
  openGraph: {
    title: "School STEM & Math Lab FAQ | Curioso",
    description: "Straight answers for school trustees and principals on NEP 2020 compliance, STEM and math lab costs, everyday supplies, and teacher training.",
    url: "https://www.curioso.school/faq",
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: "NEP 2020 & Board Alignment",
      question: "How does Curioso help CBSE and ICSE schools comply with NEP 2020 mandates?",
      answer: "Curioso maps every hands-on lesson directly to NCERT, CBSE, and ICSE competency goals. Rather than treating practicals as a disconnected Saturday hobby club, we weave hands-on inquiry straight into regular science and math class hours."
    },
    {
      category: "No-Kit Learning",
      question: "How does Curioso differ from traditional robotics labs or Atal Tinkering Labs (ATL)?",
      answer: "Traditional robotics labs rely on expensive, pre-cut plastic kits where parts only snap together one way, teaching manual-following. Curioso uses everyday materials like copper wire, syringes, wood, paper, and cardboard so students actually fix mistakes and understand how things work."
    },
    {
      category: "Setup Costs & Savings",
      question: "What is the cost of implementing Curioso compared to a traditional STEM lab?",
      answer: "Traditional STEM and innovation labs cost ₹10 Lakhs to ₹25 Lakhs in fragile imported hardware plus steep yearly kit fees. Curioso provides the lesson system and teacher training with zero hardware markups. Schools buy everyday raw supplies locally, cutting total setup and yearly costs by over 80%."
    },
    {
      category: "Teacher Training",
      question: "Do existing science and math teachers need specialized engineering or coding backgrounds?",
      answer: "No. Curioso gives your existing teachers simple question guides, lists of common student mistakes, weekly prep check-ins, and monthly campus workshops so they run every session without visiting vendor trainers."
    },
    {
      category: "Grades Covered",
      question: "What grades and age groups does the Curioso curriculum cover?",
      answer: "Curioso covers Grades 1 through 10 across four stages: Foundational (Grades 1 to 2), Preparatory (Grades 3 to 5), Middle (Grades 6 to 8), and Secondary (Grades 9 to 10), across Physics, Mathematics, Biology, and hands-on building."
    },
    {
      category: "Classroom Safety & Supplies",
      question: "How does a school manage raw materials and classroom safety?",
      answer: "Every Curioso activity is built for safe classroom execution using low-voltage batteries and everyday materials. Schools get a clear shopping list showing what to buy locally, how to store it safely, and how to hand out trays across classes."
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
        {/* Compact Hero Section */}
        <div className="bg-space border-b border-indigo-900/50 mb-10 md:mb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Questions.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Direct answers for school directors, trustees, and principals on setup costs, NEP 2020 compliance, classroom safety, and teacher training.
            </p>
          </div>
        </div>

        {/* FAQs Grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-3 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-space mb-3 leading-snug">
                  {faq.question}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12 md:mt-16 bg-space rounded-3xl p-8 md:p-12 border border-indigo-900/60 text-center text-white relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Have a question about your school's timetable or lab budget?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's get on a quick walkthrough call and look at how this fits your classrooms and existing science and math teachers.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-electric hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Book a Walkthrough &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
