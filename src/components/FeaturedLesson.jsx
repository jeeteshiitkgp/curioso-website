import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';

export default function FeaturedLesson() {
  return (
    <section className="bg-ivory py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <span className="text-electric font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Open Access</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-space tracking-tight">
              Featured Lesson
            </h2>
          </div>
          <Link 
            href="/clinical-grade-pedagogy/lessons" 
            className="hidden md:flex items-center text-electric font-semibold hover:text-space transition-colors"
          >
            View Lesson Repository <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-space p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-electric to-transparent"></div>
            <div className="relative z-10">
              <span className="inline-block bg-electric text-space font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-6">Physics Demo</span>
              <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">The Bernoulli Paper Experiment</h3>
              <p className="text-slate-300 italic mb-8">"Why does blowing air between two sheets of paper pull them together?"</p>
              
              <div className="flex items-center gap-4 text-cyan text-sm font-semibold mb-8">
                <span className="flex items-center"><Wrench className="w-4 h-4 mr-2" /> 2 Sheets of Paper</span>
              </div>

              <Link 
                href="/clinical-grade-pedagogy/lessons/bernoulli-paper-experiment" 
                className="inline-flex items-center justify-center bg-electric text-space font-bold py-3 px-6 rounded-xl hover:bg-orange-500 hover:text-white transition-colors w-max"
              >
                Access Lesson
              </Link>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12">
            <h4 className="text-xl font-bold text-space mb-4">Breaking Intuition</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              When we teach physics to middle schoolers, the standard procedure is to hand them a textbook and tell them to memorize "Bernoulli's Principle". They will highlight it, write it on a test, and promptly forget it by the weekend.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you want a student to actually understand physics, you cannot start with the textbook. You must start with a problem that breaks their intuition. By using nothing but two sheets of paper, we can simulate the exact invisible forces that keep a 400-ton Boeing 747 in the sky.
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Concepts Covered</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">Fluid Dynamics</span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">Air Pressure</span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">Aerodynamic Lift</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/clinical-grade-pedagogy/lessons" 
            className="inline-flex items-center text-electric font-semibold hover:text-space transition-colors"
          >
            View Lesson Repository <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
