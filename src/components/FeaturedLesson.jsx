import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';

export default function FeaturedLesson() {
  return (
    <section className="bg-ivory py-12 md:py-18 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-space tracking-tight">
            Featured Classroom Lesson
          </h2>
          <Link
            href="/lessons"
            className="flex items-center text-electric font-semibold hover:text-space transition-colors text-sm sm:text-base"
          >
            View All Lessons <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-5/12 relative overflow-hidden bg-slate-900 min-h-[240px] sm:min-h-[280px]">
            <img
              src="/images/lessons/bernoulli-airflow.jpg"
              alt="Bernoulli airflow experiment with two sheets of paper"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-electric text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full shadow">
              Physics Demo
            </span>
          </div>

          <div className="lg:w-7/12 p-6 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-space mb-3 leading-tight">
              The Bernoulli Paper Experiment
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed font-medium">
              Hold two sheets of paper apart and blow between them. Most students guess they fly apart, then watch them pull together.
            </p>
            <p className="text-slate-700 text-sm sm:text-base mb-6 leading-relaxed font-semibold">
              Two sheets of paper explain the same air-pressure shift that lifts an airplane wing.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/lessons/bernoulli-paper-experiment"
                className="inline-flex items-center justify-center bg-electric text-white font-bold py-3 px-6 rounded-full hover:bg-orange-500 transition-colors text-sm sm:text-base shadow-md"
              >
                Access Lesson
              </Link>
              <span className="flex items-center text-slate-600 text-sm font-semibold">
                <Wrench className="w-4 h-4 mr-2 text-electric" /> 2 Sheets of Paper
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
