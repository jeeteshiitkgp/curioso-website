import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';
import { programsList } from '@/data/programs';

export const metadata = {
  title: "School STEM Lab, Math Lab & PBL Programs",
  description: "Explore three hands-on school programs from Curioso in India: Curiosity Classroom, low-cost STEM & innovation labs, and project-based learning.",
  alternates: {
    canonical: "https://www.curioso.school/programs",
  },
  openGraph: {
    title: "School STEM Lab, Math Lab & PBL Programs | Curioso",
    description: "Explore three hands-on school programs from Curioso in India: Curiosity Classroom, low-cost STEM & innovation labs, and project-based learning.",
    url: "https://www.curioso.school/programs",
  },
};

export default function ProgramsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <ProgramHeader
        badge="School Programs"
        titlePrefix="School"
        titleHighlight="Programs."
        subtitle="Three ways we work with CBSE, ICSE, IB, and IGCSE schools in India. Pick a program below to see how it runs, what materials are used, and what it costs."
        heroImage="/images/school/cardboard-hands-circle.jpg"
        imageAlt="Overhead view of students' hands measuring and assembling cardboard structures from scratch"
      />

      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programsList.map((program) => (
            <Link
              key={program.slug}
              href={program.href}
              className="group bg-white rounded-2xl sm:rounded-[2rem] shadow-lg border border-slate-200 hover:border-electric/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-space tracking-tight leading-tight mb-3 group-hover:text-electric transition-colors">
                    {program.title}
                  </h2>

                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug mb-3">
                    {program.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-5">
                    {program.hook}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between text-electric font-extrabold text-sm sm:text-base group-hover:text-space transition-colors">
                <span>Explore Program</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
