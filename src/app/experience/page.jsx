import Link from 'next/link';

export const metadata = {
  title: "Hands-On Pedagogy & Four-Quotient Model",
  description: "How Curioso replaces memorization and boxed plastic kits with hands-on builds, guided questions, and the Four-Quotient model (IQ, EQ, PQ, CQ).",
  alternates: {
    canonical: "https://www.curioso.school/experience",
  },
};

export default function Experience() {

  const nodes = [
    { id: 'ilb', name: "Learning at Each Child's Pace", link: '/blog/individualized-learning-pathway', image: '/images/nodes/individual_learning.png' },
    { id: 'hol', name: 'Hands On Learning', link: '/blog/hands-on-learning', image: '/images/nodes/hands_on.png' },
    { id: 'se', name: 'Self Explore', link: '/blog/nurturing-self-exploration', image: '/images/nodes/self_explore.png' },
    { id: 'fc', name: 'Connected Subjects', link: '/blog/fluid-curriculum', image: '/images/nodes/fluid_curricula.png' },
    { id: 'p2p', name: 'Peer to Peer Learning', link: '/blog/peer-to-peer-learning', image: '/images/nodes/peer_to_peer.png' },
    { id: 'men', name: 'Mentorships', link: '/blog/mentorship-real-world', image: '/images/nodes/mentorship.png' },
    { id: 'bc', name: 'Buddy Chain', link: '/blog/buddy-chain', image: '/images/nodes/buddy_chain.png' },
    { id: 'pw', name: 'Physical Coordination', link: '/blog/physical-quotient', image: '/images/nodes/physical_workout.png' },
  ];

  return (
    <div className="bg-ivory min-h-screen pb-12 md:pb-16">
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-12 md:mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="md:col-span-7 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                The Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Experience.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                How we build real understanding, troubleshooting habits, and patience into regular school hours.
              </p>
            </div>

            <div className="md:col-span-5 relative w-full max-w-md mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] opacity-60 pointer-events-none"></div>
              <div className="relative bg-indigo-950/50 border border-indigo-400/25 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/school/cardboard-hands-circle.jpg"
                  alt="Hands cutting and assembling cardboard pieces and wooden sticks"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pedagogy Definition */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space mb-6 tracking-tight">
            How Hands-On Learning Works Here
          </h2>

          <div className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed space-y-6">
            <p className="leading-relaxed text-slate-800 font-bold border-l-4 border-electric pl-6 py-2 mb-6">
              Most classrooms treat understanding as luck. If a student gets a great teacher who brings props to class, they understand. If not, they memorize definitions for the exam and forget them next Monday. We strip out that guesswork by starting every lesson with a real-world puzzle students solve with their hands.
            </p>

            <p>
              In regular K-12 classrooms, a lesson starts with a definition on a chalkboard followed by five template textbook questions. Students learn how to spot keywords and plug numbers into formulas without ever touching how the thing actually works.
            </p>
            <p>
              In a Curioso classroom, every topic starts with a surprising physical puzzle using everyday objects. Before a teacher writes a formula, students see where their first guess goes wrong, test raw materials with their hands, and figure out why something failed.
            </p>
          </div>
        </section>

        {/* The 3 Pillars */}
        <section className="mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.1em] text-space uppercase mb-8 text-center border-b border-slate-200 pb-4">Three Rules We Build Around</h3>

          <div className="space-y-8">

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-row gap-5 sm:gap-8 items-start">
              <div className="bg-orange-50 text-electric p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">1</div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-space mb-2">Spot Where Thinking Breaks First</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Students do not all get stuck at the same step. Instead of lecturing the entire room at one fixed speed, our tasks show exactly where a child's guess went wrong, so teachers know what to nudge right away.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-row gap-5 sm:gap-8 items-start">
              <div className="bg-cyan-50 text-cyan p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">2</div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-space mb-2">Connect Subjects Together</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The real world does not split problems into separate buckets of Physics, Biology, and Math. When students build a paper bridge, 8th-grade triangle geometry explains why it holds weight. When they examine a tiger's camouflage, light colors meet how animal eyes work.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-row gap-5 sm:gap-8 items-start">
              <div className="bg-indigo-50 text-indigo-600 p-3 sm:p-4 rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 font-black text-xl sm:text-2xl">3</div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-space mb-2">Build Four Strengths, Not Just Marks</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Test scores only tell you who memorized the notes. We build four connected strengths in class: <strong>IQ</strong> for reasoning through new problems, <strong>EQ</strong> for staying calm and helping teammates, <strong>PQ</strong> for steady hands and stamina, and <strong>CQ</strong> for inventing workarounds without a manual.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {/* Mission Hook */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space mb-5">How the Four Pieces Fit Together</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Passing tests is easy when someone hands you the steps. Real problem solving happens when the manual disappears and students rely on <strong className="text-space">Intelligence, Emotional Control, Physical Stamina, and Creative Thinking</strong> together.
          </p>
        </div>

        {/* The 4x2 Grid */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {nodes.map((node) => (
              <Link
                key={node.id}
                href={node.link}
                className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 text-center hover:shadow-md hover:border-electric/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-200 relative bg-slate-50 flex items-center justify-center shadow-inner">
                  <img src={node.image} alt={node.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-space group-hover:text-electric transition-colors leading-tight break-words max-w-full">
                  {node.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* The 4-Axis Details (Outcomes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16">
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <Link href="/blog/intelligence-quotient" className="group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Intelligence (IQ) &rarr;
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Can the student reason through an unseen problem without a formula sheet? We push students past memorized drills into clear, logical thinking.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <Link href="/blog/emotional-quotient" className="group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Emotion (EQ) &rarr;
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Can they keep their cool when a build fails and guide a younger classmate without snatching the tool away? That is how we build real patience and teamwork.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <Link href="/blog/physical-quotient" className="group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Physicality (PQ) &rarr;
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Steady hands, spatial judgment, and physical focus. Students learn how cardboard, wood, and wires behave under load while staying calm under time limits.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <Link href="/blog/creative-quotient" className="group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-space mb-4 border-b-2 border-electric inline-block pb-2 hover:text-electric transition-colors">
                Creativity (CQ) &rarr;
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Inventing a fix when the "official" part is missing. When students build a book switch out of lunchbox aluminum foil, they stop waiting for a manual.
            </p>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <section className="bg-space text-white p-8 sm:p-14 rounded-[2.5rem] shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 tracking-tight">Stop Memorizing. Start Building.</h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            If you run a school and want your science and math classes to build real intuition instead of ticking compliance boxes, let's talk.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-black text-space bg-electric rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,65,24,0.4)]">
            Partner With Us
          </a>
        </section>

      </div>
    </div>
  );
}
