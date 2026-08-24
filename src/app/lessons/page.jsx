"use client";

import Link from 'next/link';
import useSEO from '@/hooks/useSEO';
import { lessons } from '@/data/lessons';
import { ArrowRight, Clock, Wrench } from 'lucide-react';

export default function Lessons() {
  useSEO({
    title: "Clinical-Grade Physics & STEM Lessons | Curioso",
    description: "Explore our database of open-source experiential science lessons. We provide NCERT CBSE/ICSE aligned physics activities with zero expensive lab hardware required."
  });

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-space text-white pt-12 pb-8 sm:pt-24 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Lesson Repository</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover how we teach complex scientific principles using everyday materials and productive friction.
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              href={`/lessons/${lesson.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col border border-slate-100"
            >
              <div className="h-40 sm:h-48 overflow-hidden bg-slate-100 relative">
                <img 
                  src={lesson.image} 
                  alt={lesson.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-electric text-white text-[8px] sm:text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    {lesson.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-3 line-clamp-2 leading-snug group-hover:text-electric transition-colors">
                  {lesson.title}
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 mb-6 flex-grow italic line-clamp-3">
                  "{lesson.hook}"
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-[8px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {lesson.timeRequired}</span>
                  </div>
                  <span className="text-electric group-hover:text-space transition-colors">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
