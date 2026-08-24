"use client";

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-space border-b border-indigo-900/50">
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-cyan mb-8 text-sm font-semibold tracking-wide backdrop-blur-sm shadow-inner">
              <Sparkles size={16} />
              The K-12 Launchpad for the Future
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Active Experiential Learning in <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400 drop-shadow-sm">Schools.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg font-medium">
              We partner with forward-thinking private schools to implement competency based learning math and science curriculum without expensive, sterile kit setups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] text-base font-bold text-white bg-electric hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 transition-all duration-200">
                Explore The Curriculum <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block perspective-1000">
            {/* Visual element representing the AI / Student interaction */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[80px] opacity-60 mix-blend-screen"></div>
            <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-[2rem] p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
              <img 
                src="/curioso_hero_robot.png" 
                alt="Student drawing with AI robot" 
                className="w-full h-full object-contain filter drop-shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"; 
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
