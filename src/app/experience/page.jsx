import Link from 'next/link';

export const metadata = {
  title: "Hands-On Pedagogy & Four-Quotient Model",
  description: "How Curioso replaces rote memorization and boxed plastic kits with physical mechanics, Socratic inquiry, and the Four-Quotient model (IQ, EQ, PQ, CQ).",
  alternates: {
    canonical: "https://www.curioso.school/experience",
  },
};

export default function Experience() {

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
                How we build physical intuition, diagnostic rigor, and problem-solving endurance into regular school hours.
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
            What Does "Clinical-Grade" Pedagogy Mean?
          </h2>

          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p className="leading-relaxed text-slate-700 font-bold border-l-4 border-electric pl-6 py-2 mb-8">
              Most classrooms treat understanding as luck. If a student gets a great teacher who brings props to class, they understand. If not, they memorize definitions for the exam and forget them next Monday. We strip out that guesswork by engineering every lesson around physical anomalies and real troubleshooting.
            </p>

            <p>
              In regular K-12 classrooms, a lesson starts with a definition on a chalkboard followed by five template textbook numericals. Students learn how to spot keywords and plug numbers into formulas without ever touching the physical mechanics behind them.
            </p>
            <p>
              In a Curioso classroom, every topic starts with a counter-intuitive physical problem using everyday objects. Before a teacher writes a formula, students see where their intuition breaks, test raw materials with their hands, and figure out why something failed.
            </p>
          </div>
        </section>

        {/* The 3 Pillars */}
        <section className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.1em] text-space uppercase mb-10 text-center border-b border-slate-200 pb-4">Three Rules We Build Around</h3>

          <div className="space-y-12">

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-orange-50 text-electric p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">1</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">Diagnose Before Teaching</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  Students do not all get stuck at the same step. Instead of lecturing the entire room at one fixed speed, our tasks expose exactly where a child's mental model breaks down, so teachers know what to redirect in real time.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-cyan-50 text-cyan p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">2</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">Break Subject Silos</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  The real world does not split problems into isolated buckets of Physics, Biology, and Math. When students build a paper bridge, 8th-grade SSS geometry explains why triangles hold weight. When they examine a tiger's camouflage, light wavelengths meet retinal biology and evolution.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-row gap-6 sm:gap-8 items-start">
              <div className="bg-indigo-50 text-indigo-600 p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">3</div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-2 sm:mb-3">Track Four Quotients, Not Just Marks</h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed">
                  Test scores only tell you who memorized the notes. We structure classroom friction to develop and observe four connected capacities: <strong>IQ</strong> for reasoning through new problems, <strong>EQ</strong> for handling stress and team friction, <strong>PQ</strong> for physical stamina and motor control, and <strong>CQ</strong> for inventing solutions without a manual.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* Mission Hook */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-6">How the Four Pieces Fit Together</h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed font-medium">
            Passing tests is easy when someone hands you the steps. Real engineering happens when the manual disappears and students have to rely on <strong className="text-space">Intelligence, Emotional Control, Physical Stamina, and Creative Problem Solving</strong> together.
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
              Can the student reason through an unseen problem without a formula sheet? We push students past memorized drills into fluid logic and systems thinking.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/emotional-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Emotion (EQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Can they keep their cool when a build fails and guide a younger peer without snatching the tool away? That is how we load-test patience and communication.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/physical-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Physicality (PQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Hands-on dexterity, spatial awareness, and physical stamina. Students learn how materials bend, cut, and hold load while managing frustration under time pressure.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Link href="/blog/creative-quotient" className="group">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Creativity (CQ) &rarr;
              </h3>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Inventing a solution when the "official" part is missing. When students build a book switch out of lunchbox aluminum foil, they break design fixation.
            </p>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <section className="bg-space text-white p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Stop Memorizing. Start Building.</h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            If you run a school and want your science and math classes to build real intuition instead of ticking compliance boxes, let's talk.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-base lg:text-lg font-black text-space bg-electric rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,65,24,0.4)]">
            Partner With Us
          </a>
        </section>

      </div>
    </div>
  );
}
