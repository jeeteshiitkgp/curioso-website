"use client";

import { useState } from 'react';

export default function CoursesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const courses = [
    {
      title: "Curiosity-Driven School Program (Daily Socratic Hooks)",
      shortName: "Curiosity Program",
      hook: "What happens when every textbook chapter starts with a physical anomaly that breaks student intuition?",
      desc: "Our curiosity-driven school program weaves 45-minute physical inquiry hooks directly into your regular CBSE, ICSE, IB, or IGCSE science and math timetable. Before touching a formula, students confront counter-intuitive physical phenomena using everyday raw materials.",
      example: "From the Tilted Palm friction test and the Submerged Breathing Leaf to the Tiger's Dichromatic Blindspot and Accordion Paper Trusses, students link physics, biology, and geometry without subject silos.",
      gains: [
        "Connects textbook equations to lived physical reality",
        "Eliminates rote memorization across Physics, Biology, and Math",
        "Builds intuition through counter-intuitive observations"
      ],
      benefits: [
        "Integrates into existing 45-minute school periods",
        "Maps directly to CBSE, ICSE, IB, and IGCSE concepts",
        "Zero sterile plastic kits or proprietary lab lock-in"
      ],
      accent: "text-indigo-600",
      bgBadge: "bg-indigo-100 text-indigo-900"
    },
    {
      title: "Multi-Week STEM School Program (Flagship Engineering Arcs)",
      shortName: "STEM Engineering",
      hook: "Can middle-schoolers build real working machines without pre-molded plastic robotics kits?",
      desc: "In this 12 to 30 session (20 to 60 hour) deep STEM school program, students build functional mechanical and electrical systems from scratch using raw domestic materials: copper wire, syringes, sheet metal, scrap wood, and DC motors.",
      example: "Students design, calibrate, fail, and rebuild across five flagship engineering arcs: Bare-Chassis EV Racers, Solar-Tracked Evaporative Coolers, 3-Axis Hydraulic Cranes, Dual-Motor Tank-Drive Rovers, and Multi-Stage Water Purifiers.",
      gains: [
        "Master circuits, gearing, hydraulics, and structural tolerances",
        "Debug real mechanical failures without instruction manuals",
        "Build 20 to 60 hours of authentic engineering prototypes"
      ],
      benefits: [
        "Replaces high-capex kit assembly with real engineering",
        "Open-market Bill of Materials cuts recurring costs by over 80%",
        "Creates tangible student portfolios for admissions and showcases"
      ],
      accent: "text-electric",
      bgBadge: "bg-orange-100 text-electric"
    },
    {
      title: "Makerspace School Consultants & Lab Advisory",
      shortName: "Makerspace Advisory",
      hook: "Why spend 15 to 25 lakhs on a glass-cupboard robotics lab when an open-market makerspace costs 80% less?",
      desc: "As independent makerspace school consultants, we help school trustees and directors set up or overhaul physical STEM labs without vendor hardware lock-in. We do not sell kits or mark up electronics.",
      example: "We provide a vendor-neutral open-market Bill of Materials (BOM) procured locally at wholesale rates, assist with facilitator hiring and induction, and run weekly Socratic lesson-prep syncs plus monthly on-campus faculty workshops.",
      gains: [
        "Safe, raw-material workshops designed for independent iteration",
        "Guided by trained school faculty instead of rotating outside staff",
        "Continuous progression from Grade 1 to Grade 10"
      ],
      benefits: [
        "Vendor-neutral Bill of Materials procured at open-market rates",
        "Facilitator hiring, induction, and weekly Socratic prep syncs",
        "Monthly on-campus teacher workshops and lab audits"
      ],
      accent: "text-cyan",
      bgBadge: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <>
      <div className="text-center max-w-4xl mx-auto mb-16">
        {/* Interactive Responsive Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 bg-slate-100 p-2 sm:p-3 rounded-2xl md:rounded-full border border-slate-200/50 max-w-fit mx-auto mt-8">
          {courses.map((course, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3.5 rounded-xl md:rounded-full font-extrabold text-sm tracking-wide transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-space text-white shadow-xl transform scale-105'
                  : 'text-slate-500 hover:text-space hover:bg-slate-200'
              }`}
            >
              {course.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Render all 3 offerings in DOM so search crawlers index every program */}
      <div className="relative min-h-[500px]">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={activeTab === idx ? 'block' : 'hidden'}
          >
            <div className="bg-white rounded-xl sm:rounded-[2.5rem] p-4 sm:p-14 shadow-2xl flex flex-row gap-6 sm:gap-16 items-center border border-slate-100 transition-opacity duration-500">
              <div className="w-7/12 sm:w-1/2">
                <div className={`inline-flex px-3 py-1 rounded-full ${course.bgBadge} text-[8px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6`}>
                  Program 0{idx + 1}
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-2 sm:mb-4 tracking-tight leading-tight">
                  {course.title}
                </h2>
                <p className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-bold italic mb-4 sm:mb-6 ${course.accent}`}>
                  "{course.hook}"
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-4 sm:mb-8 font-medium">
                  {course.desc}
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-300 pl-3 sm:pl-6 py-3 sm:py-5 rounded-r-xl sm:rounded-r-2xl">
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-semibold leading-relaxed">
                    {course.example}
                  </p>
                </div>
              </div>

              <div className="w-5/12 sm:w-1/2 grid sm:grid-cols-2 gap-4 sm:gap-8 bg-slate-50 p-4 sm:p-8 rounded-xl sm:rounded-[2rem] border border-slate-100 shadow-inner">
                <div>
                  <h3 className="text-space font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-5 border-b border-slate-200 pb-2 sm:pb-3">
                    What Students Gain
                  </h3>
                  <ul className="space-y-2 sm:space-y-4">
                    {course.gains.map((gain, i) => (
                      <li key={i} className="flex items-start gap-1.5 sm:gap-3">
                        <span className="text-green-500 font-black text-xs sm:text-lg leading-none">✓</span>
                        <span className="text-slate-700 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed">{gain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-space font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-5 border-b border-slate-200 pb-2 sm:pb-3">
                    What Schools Get
                  </h3>
                  <ul className="space-y-2 sm:space-y-4">
                    {course.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5 sm:gap-3">
                        <span className="text-amber-500 font-black text-xs sm:text-lg leading-none">★</span>
                        <span className="text-slate-700 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
