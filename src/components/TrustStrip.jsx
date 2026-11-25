export default function TrustStrip() {
  const stats = [
    {
      label: "IIT Kharagpur",
      detail: "Aerospace Engineering Founder",
    },
    {
      label: "500+ Schools",
      detail: "200,000+ Students Reached",
    },
    {
      label: "80%+ Lower Cost",
      detail: "Everyday Local Supplies, Zero Kit Markups",
    },
    {
      label: "CBSE · ICSE · IB",
      detail: "NEP 2020 & NCF 2023 Aligned",
    },
  ];

  return (
    <section className="bg-indigo-950/90 border-b border-indigo-900/60 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-electric/70 pl-4">
              <p className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
