import Link from 'next/link'
import { ShieldCheck, Cpu, Lightbulb } from 'lucide-react';

export default function ExperienceTeaser() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Inside Regular Periods",
      desc: "Maps directly to CBSE, ICSE, IB, and NEP 2020 chapters.",
    },
    {
      icon: Cpu,
      title: "Local Everyday Supplies",
      desc: "Wire, cardboard, syringes, and ₹50 motors. Zero kits.",
    },
    {
      icon: Lightbulb,
      title: "Your Own Teachers",
      desc: "We train your faculty permanently. No rotating outsiders.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight">
            How It Runs Inside Your School
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex gap-4 p-5 rounded-2xl bg-ivory border border-slate-200/80 shadow-sm"
              >
                <div className="flex-shrink-0 text-electric mt-1">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-space mb-1">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-normal font-medium">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold rounded-full text-white bg-space hover:bg-electric transition-colors shadow-lg shadow-indigo-900/20"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
