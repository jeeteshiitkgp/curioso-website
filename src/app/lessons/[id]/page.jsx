"use client";

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import useSEO from '@/hooks/useSEO';
import { lessons } from '@/data/lessons';
import { ArrowLeft, Clock, Wrench } from 'lucide-react';

export default function LessonView({ params }) {
  const { id } = use(params);
  const lesson = lessons.find(l => l.id === id);

  useSEO({
    title: lesson ? `${lesson.title} | Curioso Lessons` : "Lesson Not Found",
    description: lesson ? lesson.hook : "Lesson not found."
  });

  if (!lesson) {
    return <Navigate to="/lessons" replace />;
  }

  return (
    <div className="bg-ivory min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-space pt-12 pb-8 sm:pt-24 sm:pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/lessons" 
            className="inline-flex items-center text-cyan hover:text-white transition-colors font-semibold text-[8px] sm:text-xs md:text-sm uppercase tracking-wider mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to Lessons
          </Link>
          
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="bg-electric text-white text-[8px] sm:text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
              {lesson.difficulty}
            </span>
            <span className="flex items-center text-slate-300 text-[8px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 mr-1.5" /> {lesson.timeRequired}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            {lesson.title}
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium italic">
            "{lesson.hook}"
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl sm:rounded-[2rem] p-6 sm:p-12 shadow-xl border border-slate-100 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed prose max-w-none prose-headings:font-extrabold prose-headings:text-space prose-h2:text-xl sm:prose-h2:text-3xl prose-a:text-electric hover:prose-a:text-space prose-img:rounded-xl sm:prose-img:rounded-2xl prose-img:shadow-lg">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl sm:rounded-[2rem] p-6 sm:p-8 shadow-xl border border-slate-100 sticky top-24">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-lg">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space uppercase tracking-tight">Materials Needed</h3>
              </div>
              
              <ul className="space-y-4">
                {lesson.materials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-electric font-black mt-1 text-xs sm:text-sm">✓</span>
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-500 font-medium mb-4 italic">
                  Ready to implement this at your school?
                </p>
                <Link 
                  href="/clinical-grade-pedagogy" 
                  className="block w-full text-center bg-space hover:bg-indigo-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl text-[10px] sm:text-xs md:text-sm lg:text-base"
                >
                  View Full Pedagogy
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
