import { BookOpen, Users, Activity, Target, Compass, Sparkles } from 'lucide-react';

const pillars = [
  { 
    name: 'Fluid Curriculum', 
    icon: BookOpen, 
    hook: "What if a student could shape their own learning journey?",
    desc: 'Education doesn’t have to be a straight line. Our curriculum dynamically opens up when a student shows deep interest, bringing in expert mentors to chart highly advanced, unique pathways.' 
  },
  { 
    name: 'Buddy Chain', 
    icon: Users, 
    hook: "Who do students turn to when things get hard?",
    desc: 'Not every concern is easy to share with adults. We pair each student with an older peer to create a safe, supportive network that drastically improves mental well-being and overall school culture.' 
  },
  { 
    name: 'Peer-to-Peer Learning', 
    icon: Sparkles, 
    hook: "Is teaching the ultimate form of learning?",
    desc: 'When students step up to explain a concept, true comprehension is locked in. Sharing what excites them builds explosive, contagious enthusiasm and yields massive empirical improvements in test scores.' 
  },
  { 
    name: 'Hands-On Discovery', 
    icon: Activity, 
    hook: "Why are the best lessons built, not memorized?",
    desc: 'Real learning kicks in when projects stall or inevitably fall apart. Tinkering with circuits and structures turns textbook theory into lived experience, forging a relentless, unshakeable engineering mindset.' 
  },
  { 
    name: 'Self-Exploration', 
    icon: Compass, 
    hook: "Who am I? What truly interests me?",
    desc: 'We provide the dedicated bandwidth and safety for students to chase down their own "why". Developing this deep self-awareness yields highly measurable spikes in creativity, resilience, and problem-solving.' 
  },
  { 
    name: 'Authentic Mentorship', 
    icon: Target, 
    hook: "How do we connect classroom theory to the real world?",
    desc: 'Instead of sending students out, we bring engineers and entrepreneurs securely into the school. Students collaborate on actual real-world cases, seeing exactly what their future careers look like.' 
  },
];

export default function Pillars() {
  return (
    <section id="methodology" className="py-32 bg-slate-50 text-space">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <h2 className="text-sm font-bold tracking-[0.2em] text-cyan uppercase mb-4">Our Methodology</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-space mb-20 tracking-tight">
          How do we build the future?
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((pillar, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl border border-slate-100 hover:border-cyan/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 text-electric rounded-2xl flex items-center justify-center mb-8 group-hover:bg-electric group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                <pillar.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-space transition-colors leading-tight">{pillar.name}</h4>
              <p className="text-cyan font-bold text-sm italic mb-5 leading-relaxed px-4">"{pillar.hook}"</p>
              <p className="text-slate-600 leading-relaxed font-semibold">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
