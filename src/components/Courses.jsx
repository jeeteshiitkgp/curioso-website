import Link from 'next/link';

export default function Courses() {
  const shortCourses = [
    {
      name: "Curiosity Classroom",
      href: "/programs/curiosity-classroom",
      image: "/images/lessons/corrugated-paper-bridge.jpg",
      alt: "Accordion-folded paper bridge holding coins across two books",
      desc: "Hands-on science and math (with a physical math lab) inside regular school periods.",
    },
    {
      name: "STEM & Innovation Lab",
      href: "/programs/stem-lab",
      image: "/images/school/cardboard-ev-desk-closeup.jpg",
      alt: "Students testing a scratch-built cardboard electric car",
      desc: "A full school STEM lab at 80% lower cost using everyday local supplies.",
    },
    {
      name: "Project-Based Learning",
      href: "/programs/project-based-learning",
      image: "/images/school/sticks-hands-landscape.jpg",
      alt: "Students building wooden stick and rubber band frames on the floor",
      desc: "Multi-week working engineering builds from raw materials, zero kits.",
    },
  ];

  return (
    <section id="programs" className="pt-8 pb-16 md:pb-20 bg-space text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight leading-tight max-w-3xl mx-auto">
          Three ways we work with schools.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {shortCourses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group bg-indigo-950/50 rounded-[2rem] border border-indigo-500/25 hover:border-electric/70 backdrop-blur-md shadow-lg overflow-hidden flex flex-col text-left transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-electric transition-colors">{course.name}</h3>
                <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed flex-grow mb-4">{course.desc}</p>
                <span className="text-xs sm:text-sm font-bold text-cyan group-hover:text-electric transition-colors">
                  Explore Program &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
