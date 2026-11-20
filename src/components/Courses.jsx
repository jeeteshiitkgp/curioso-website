import Link from 'next/link';

export default function Courses() {
  const shortCourses = [
    {
      name: "Curiosity Classroom",
      href: "/programs/curiosity-classroom",
      desc: "Daily 45-minute activity-based learning and physical math lab hooks woven into regular science and math periods.",
    },
    {
      name: "STEM & Innovation Lab",
      href: "/programs/stem-lab",
      desc: "Set up a school STEM lab, innovation lab, and makerspace at 80% lower cost with open-market BOM and permanent teacher training.",
    },
    {
      name: "Project-Based Learning",
      href: "/programs/project-based-learning",
      desc: "12 to 30 session (20 to 60 hour) bare-chassis engineering builds from raw domestic materials, with zero plastic kits.",
    },
  ];

  return (
    <section id="programs" className="pt-0 pb-12 md:pb-20 lg:pb-24 bg-space text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-cyan uppercase mb-4">Partnership Offerings</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
          Three ways we work with schools.
        </h3>
        <p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
          No hardware markups, no proprietary kits, and no rotating college-kid trainers. We license the curriculum, hand you an open-market Bill of Materials, and train your permanent teachers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {shortCourses.map((course, idx) => (
            <Link key={idx} href={course.href} className="bg-indigo-950/40 p-8 rounded-[2rem] border border-indigo-500/20 hover:border-electric/60 backdrop-blur-md shadow-lg flex flex-col items-center transition-colors">
              <h4 className="text-xl font-bold text-white mb-3 text-center">{course.name}</h4>
              <p className="text-slate-400 text-center text-sm font-medium">{course.desc}</p>
            </Link>
          ))}
        </div>

        <Link 
          href="/programs"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] text-base font-bold text-white bg-electric hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Explore School Programs &rarr;
        </Link>
      </div>
    </section>
  );
}
