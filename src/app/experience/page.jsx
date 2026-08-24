"use client";

import { useState } from 'react';
import Link from 'next/link';
import useSEO from '@/hooks/useSEO';

export default function Experience() {
  useSEO({
    title: "Experiential Science & Math Labs | Competency Based Learning | Curioso",
    description: "Discover our physical-to-digital learning ecosystem. We replace rote memorization with hands-on science activities and active diagnostic modeling to build fluid reasoning."
  });

  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'ilb', name: 'Individual Learning Bands', position: 'top-[35%] left-[5%] md:left-[12%]', link: '/blog/individualized-learning-pathway', image: '/images/nodes/individual_learning.png' },
    { id: 'hol', name: 'Hands On Learning', position: 'top-[10%] left-[30%] md:left-[38%]', link: '/blog/hands-on-learning', image: '/images/nodes/hands_on.png' },
    { id: 'se', name: 'Self Explore', position: 'top-[15%] right-[20%] md:right-[32%]', link: '/blog/nurturing-self-exploration', image: '/images/nodes/self_explore.png' },
    { id: 'fc', name: 'Fluid Curricula', position: 'top-[42%] right-[5%] md:right-[12%]', link: '/blog/fluid-curriculum', image: '/images/nodes/fluid_curricula.png' },
    { id: 'p2p', name: 'Peer to Peer Learning', position: 'top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10', link: '/blog/peer-to-peer-learning', image: '/images/nodes/peer_to_peer.png', isCenter: true },
    { id: 'men', name: 'Mentorships', position: 'bottom-[15%] left-[5%] md:left-[12%]', link: '/blog/mentorship-real-world', image: '/images/nodes/mentorship.png' },
    { id: 'bc', name: 'Buddy Chain', position: 'bottom-[12%] left-[28%] md:left-[35%]', link: '/blog/buddy-chain', image: '/images/nodes/buddy_chain.png' },
    { id: 'pw', name: 'Biomechanical Interplay', position: 'bottom-[18%] right-[18%] md:right-[28%]', link: '/blog/physical-quotient', image: '/images/nodes/physical_workout.png' },
  ];

  return (
    <div className="bg-ivory min-h-screen pb-12 md:pb-16">
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-20 md:pb-24">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="col-span-8 md:col-span-7 max-w-2xl">
              <span className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.2em] text-electric mb-2 sm:mb-4 block">Our System</span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                The Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Experience.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                A whole school reformation where principled cause directly drives measurable, holistic outcomes.
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pedagogy Definition */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-8 tracking-tight">
            What is Clinical-Grade Pedagogy?
          </h2>
          
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p className="leading-relaxed text-slate-700 font-bold border-l-4 border-electric pl-6 py-2 mb-8">
              Clinical-Grade Pedagogy is an instructional framework that treats learning outcomes not as variables left to chance, but as engineered milestones. It demands that every lesson, assessment, and environmental variable be purposefully designed, rigorously tested, and objectively measured.
            </p>
            
            <p>
              In traditional K-12 systems, teaching is highly subjective. A student's success depends almost entirely on the individual intuition of their classroom teacher. The curriculum is a loose guide, and the execution is left to chance. 
            </p>
            <p>
              We reject this model. In medicine or engineering, processes are "clinical-grade" when they are stripped of ambiguity and optimized for maximum efficacy. We apply this exact standard to education. When a school utilizes Clinical-Grade Pedagogy, it means the curriculum architecture guarantees the delivery of high-performance knowledge transfer, regardless of external friction.
            </p>
          </div>
        </section>

        {/* The 3 Pillars */}
        <section className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.1em] text-space uppercase mb-10 text-center border-b border-slate-200 pb-4">The Three Core Principles</h3>
          
          <div className="space-y-12">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-orange-50 text-electric p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">1</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">Diagnostic Precision</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  Before we prescribe a learning intervention, we diagnose. Clinical-grade pedagogy does not assume all students start at the same baseline. Through diagnostic assessments and continuous feedback loops, we map the precise cognitive and emotional state of the learner, adjusting the difficulty curve dynamically to keep them in the state of "flow."
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-cyan-50 text-cyan p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">2</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">Interdisciplinary Integration</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  The real world does not operate in isolated silos of "Physics," "History," or "Math." Therefore, clinical-grade instruction cannot be siloed. We engineer cross-disciplinary units where robotics relies on advanced mathematics, and scientific discovery is contextualized through historical sociology. This creates deep, long-term neural connections.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-indigo-50 text-indigo-600 p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">3</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">The Four-Quotient Metric</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  We refuse to measure human potential through academic test scores alone. Clinical-grade measurement requires holistic data. We track growth across four uncompromising axes: <strong>Intelligence Quotient (IQ)</strong> for cognitive rigor, <strong>Emotional Quotient (EQ)</strong> for empathy, <strong>Physical Quotient (PQ)</strong> for biomechanics and team wellness, and <strong>Creative Quotient (CQ)</strong> for out-of-the-box innovation.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Mission Hook */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-6">What We Intend To Achieve</h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed font-medium">
            We believe that education must transcend rote memorization. Our mission is to measure and maximize student growth across four critical axes: <strong className="text-space">Intelligence, Emotion, Physicality, and Creativity</strong>. By integrating dynamic methodologies like the Buddy Chain and Fluid Curricula, we don't just teach—we reform the entire learning ecosystem.
          </p>
        </div>

        {/* The 4-Quadrant Graphical Approach */}
        <section className="mb-12 md:mb-16">
          <div className="text-center mb-12">
            <h2 className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] font-extrabold text-electric uppercase mb-4">Key Learning Methodologies</h2>
          </div>
          
          {/* 4x2 Grid of Cards (Uniform Desktop & Mobile) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {nodes.map((node) => (
              <Link
                key={node.id}
                href={node.link}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-4 text-center hover:shadow-md hover:border-electric/30 hover:scale-[1.02] active:scale-98 transition-all duration-300 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-200 relative bg-slate-50 flex items-center justify-center shadow-inner">
                  <img src={node.image} alt={node.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-space group-hover:text-electric transition-colors leading-tight break-words max-w-full">
                  {node.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* The 4-Axis Details (Outcomes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/intelligence-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Intelligence (IQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Focuses on cognitive mastery and analytical problem-solving. We don't rely uniformly on standard testing; instead, we gauge an individual learning band's agility to grasp advanced logic and systems thinking.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/emotional-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Emotion (EQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Empathy and self-exploration. Utilizing frameworks like the Buddy Chain and Real-world Mentorships, we map a student's capacity to build relationships, self-regulate, and collaborate safely.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/physical-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Physicality (PQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Wellness and team cooperation. Measuring resilience, spatial awareness, and the behavioral ability to respond to both victory and defeat gracefully through team mechanics.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
             <Link href="/blog/creative-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Creativity (CQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Fluid innovation frameworks. A metric quantified through observational testing of a student's capacity to challenge boundaries, ask alternative questions, and iterate on failure.
            </p>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <section className="bg-space text-white p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Stop Teaching. Start Engineering.</h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            If you are a school founder or leader ready to transition from traditional operations to a clinical-grade architecture, we are your implementation partner.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-base lg:text-lg font-black text-space bg-electric rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,65,24,0.4)]">
            Explore Partnership
          </a>
        </section>

      </div>
    </div>
  );
}
