import Link from 'next/link';
import { lessons } from '@/data/lessons';
import { ArrowRight, Clock, ShieldCheck, Flame } from 'lucide-react';

export const metadata = {
  title: "No-Kit Science Experiments & Physics Projects",
  description: "11 free science experiments at home and no-kit physics projects for Grades 4 to 10 using paper, coins, ice, and leaves. Mapped to CBSE & ICSE.",
  keywords: [
    "science experiments at home",
    "no kit physics experiments",
    "science project ideas for middle school",
    "physics project with household materials",
    "science working model without kits",
    "inspire award science project ideas",
    "cbse activity based science lessons"
  ],
  alternates: {
    canonical: "https://www.curioso.school/lessons",
  },
  openGraph: {
    title: "No-Kit Science Experiments & Physics Projects | Curioso",
    description: "11 free science experiments at home and no-kit physics projects for Grades 4 to 10 using paper, coins, ice, and leaves. Mapped to CBSE & ICSE.",
    url: "https://www.curioso.school/lessons",
  },
};

export default function Lessons() {
  const summaryMetrics = [
    {
      value: "11 Desk & Kitchen Demos",
      detail: "Zero store-bought science kits",
    },
    {
      value: "5 to 15 Minutes",
      detail: "Household paper, coins, water, ice, leaves",
    },
    {
      value: "Grades 4 to 10",
      detail: "Mapped to NCERT, CBSE, ICSE & IB",
    },
  ];

  return (
    <div className="bg-ivory min-h-screen w-full min-w-0 overflow-x-hidden">
      {/* Hero Header */}
      <div className="bg-space text-white pt-10 pb-14 sm:pt-20 sm:pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-950/80 border border-indigo-400/30 text-cyan text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest mb-4">
            Open-Access Micro-Demos &amp; Builds
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            Classroom <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Lessons</span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            11 runnable science and physics demos from @curioso.school built with items already on a desk or kitchen counter. Each card starts with a prediction trap before explaining the rule.
          </p>
        </div>
      </div>

      {/* 3-Metric Summary Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 mb-10 md:mb-14 relative z-20">
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

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const isStoveDemo = lesson.safety.toLowerCase().includes('stove');
            return (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col border border-slate-200"
              >
                <div className="h-48 sm:h-52 overflow-hidden bg-slate-900 relative">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-space/90 text-white text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
                      {lesson.category}
                    </span>
                    <span className="bg-electric text-white text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
                      {lesson.grades}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2 leading-snug group-hover:text-electric transition-colors">
                    {lesson.title}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 mb-5 flex-grow leading-relaxed">
                    {lesson.hook}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-[8px] sm:text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {lesson.timeRequired}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                        isStoveDemo
                          ? 'bg-orange-100 text-electric'
                          : 'bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      {isStoveDemo ? (
                        <Flame className="w-3 h-3" />
                      ) : (
                        <ShieldCheck className="w-3 h-3" />
                      )}
                      {lesson.safety}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* High-Signal Section for Parents, Teachers & Science Exhibitions */}
        <section className="mt-12 md:mt-16 bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-slate-200">
          <span className="text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-electric mb-2 block">
            Desk, Home &amp; Exhibition Fit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-4">
            Using These Demos for a School Science Project or Science Exhibition
          </h2>
          <div className="space-y-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-4xl">
            <p>
              Whether you are looking for quick science experiments at home, a middle-school physics project, or a live science working model for a school science exhibition or INSPIRE Award pitch, skip the pre-packed plastic science kit and robotics kit boxes. Boxed kits hide the failure points behind pre-cut parts and manuals.
            </p>
            <p>
              Take any anomaly above and ask visitors to bet on the wrong answer first: fold an A4 sheet until it holds 50 coins, float ice to the glass brim and let judges watch it melt without spilling, or tilt a phone on an open palm to prove static friction pushes uphill. When a student can build, break, and explain raw household materials under questioning, they own the concept.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-6 items-center">
            <Link
              href="/programs/curiosity-classroom"
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
            >
              Curiosity Classroom (45-Min School Math &amp; Science Lab) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/programs/stem-lab"
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-electric hover:text-space transition-colors"
            >
              STEM &amp; Innovation Lab Setup (80% Lower Cost) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
