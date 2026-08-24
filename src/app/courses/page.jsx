"use client";

import { useState } from 'react';
import useSEO from '@/hooks/useSEO';

export default function CoursesPage() {
  useSEO({
    title: "Our Curriculum | Curioso",
    description: "Explore Curioso's interdisciplinary curriculum architecture, robotics engineering programs, and competitive exam coaching integration."
  });

  const [activeTab, setActiveTab] = useState(0);

  const courses = [
    {
      title: "Interdisciplinary Curriculum",
      shortName: "Interdisciplinary",
      hook: "Is learning more meaningful when subjects connect?",
      desc: "Your students don't live in separate subject silos, so why should their education? Our curriculum weaves science, math, and social studies around real-world questions students actually care about.",
      example: "Instead of 'Here's how photosynthesis works,' students explore: 'How did the Green Revolution change Indian society?' weaving chemistry, agriculture, and economics into one unified unit.",
      gains: ["Deeper understanding through context", "Knowledge that sticks because it feels relevant", "Complete alignment with NEP 2020's holistic vision"],
      benefits: ["Positions your school as an innovative leader", "Better learning outcomes without added teaching hours", "Complete teacher training and ongoing support included"],
      bg: "bg-indigo-900",
      accent: "text-indigo-600",
      bgBadge: "bg-indigo-100 text-indigo-900"
    },
    {
      title: "Robotics & Engineering",
      shortName: "Robotics",
      hook: "How far can curiosity take a child?",
      desc: "In this 20-class, 60-hour deep project continuum, students don't just study vehicles—they become engineers. From their first circuit to their final vehicle test, they experience the full design cycle.",
      example: "Students master problem-solving under strict constraints, iterating on failures, and feeling the profound pride of building and racing a working vehicle from scratch.",
      gains: ["Master circuits, motors, gears, and mechanical design", "Develop a rigorous engineering mindset", "60 solid hours of deep, hands-on project work"],
      benefits: ["Transform science from theory to lived experience", "Differentiate your school with elite STEM", "Zero infrastructure needed—we bring the lab"],
      bg: "bg-electric",
      accent: "text-electric",
      bgBadge: "bg-orange-100 text-electric"
    },
    {
      title: "Competitive Exam Coaching",
      shortName: "Exam Prep",
      hook: "Can top-tier test prep happen inside school walls? Absolutely.",
      desc: "Our rigorous 2-year competitive coaching programme brings the uncompromising quality of premium tier institutes for JEE (Mains & Advanced) and CET directly into your school—without students sacrificing their afternoons, weekends, and wellbeing.",
      example: "For Grades 11-12 students aspiring to engineering, we deliver conceptual mastery, problem-solving rigor, and advanced exam strategies through educators who understand both the content and the student journey.",
      gains: ["Integrated seamlessly with the school schedule", "Relentless focus on deep understanding", "Regular stress-tested assessments and precise feedback"],
      benefits: ["Retain your brightest students inside the school", "Eliminate extreme student burnout and commute friction", "Online teacher training available for flawless scale"],
      bg: "bg-cyan",
      accent: "text-cyan",
      bgBadge: "bg-cyan-100 text-cyan-800"
    }
  ];

  const activeCourse = courses[activeTab];

  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-20 md:pb-24">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="col-span-8 md:col-span-7 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Architecture.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                Hands-on learning environments where the freedom to fail serves as the foundation for true understanding and growth.
              </p>
            </div>

            <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] sm:blur-[60px] opacity-60 mix-blend-screen"></div>
              <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-3 sm:p-6 md:p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/curioso_hero_robot.png" 
                  alt="Student drawing with AI robot" 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Interactive Responsive Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 bg-slate-100 p-2 sm:p-3 rounded-2xl md:rounded-full border border-slate-200/50 max-w-fit mx-auto mt-8">
            {courses.map((course, idx) => (
              <button
                key={idx}
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

        {/* Dynamic State-driven Content */}
        <div className="relative min-h-[500px]">
          <div 
            key={activeTab} 
            className="bg-white rounded-xl sm:rounded-[2.5rem] p-4 sm:p-14 shadow-2xl flex flex-row gap-6 sm:gap-16 items-center border border-slate-100 transition-opacity duration-500 opacity-100 animate-[pulse_0.4s_ease-out_1]"
          >
            <div className="w-7/12 sm:w-1/2">
              <div className={`inline-flex px-3 py-1 rounded-full ${activeCourse.bgBadge} text-[8px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6`}>
                Program 0{activeTab + 1}
              </div>
              <h4 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-2 sm:mb-4 tracking-tight leading-tight">{activeCourse.title}</h4>
              <p className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-bold italic mb-4 sm:mb-6 ${activeCourse.accent}`}>"{activeCourse.hook}"</p>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-4 sm:mb-8 font-medium">{activeCourse.desc}</p>
              <div className="bg-slate-50 border-l-4 border-slate-300 pl-3 sm:pl-6 py-3 sm:py-5 rounded-r-xl sm:rounded-r-2xl">
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-semibold leading-relaxed">{activeCourse.example}</p>
              </div>
            </div>

            <div className="w-5/12 sm:w-1/2 grid sm:grid-cols-2 gap-4 sm:gap-8 bg-slate-50 p-4 sm:p-8 rounded-xl sm:rounded-[2rem] border border-slate-100 shadow-inner">
              <div>
                <h5 className="text-space font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-5 border-b border-slate-200 pb-2 sm:pb-3">What Students Gain</h5>
                <ul className="space-y-2 sm:space-y-4">
                  {activeCourse.gains.map((gain, i) => (
                    <li key={i} className="flex items-start gap-1.5 sm:gap-3">
                      <span className="text-green-500 font-black text-xs sm:text-lg leading-none">✓</span>
                      <span className="text-slate-700 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-space font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-5 border-b border-slate-200 pb-2 sm:pb-3">What Schools Get</h5>
                <ul className="space-y-2 sm:space-y-4">
                  {activeCourse.benefits.map((benefit, i) => (
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
      </div>
    </div>
  );
}
