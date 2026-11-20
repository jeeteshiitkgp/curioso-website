import Link from 'next/link';
import ProgramHeader from '@/components/ProgramHeader';
import { programsList } from '@/data/programs';

export const metadata = {
  title: "School Programs: Curiosity Classroom, STEM & Innovation Lab, Project-Based Learning",
  description: "Explore Curioso's B2B K-12 school programs in India: Curiosity Classroom daily Socratic hooks, STEM & Innovation Lab setup, and multi-week Project-Based Learning.",
  alternates: {
    canonical: "https://www.curioso.school/programs",
  },
  openGraph: {
    title: "School Programs | Curioso",
    description: "Curiosity Classroom, STEM & Innovation Lab setup, and Project-Based Learning for progressive CBSE, ICSE, IB, and IGCSE schools.",
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
        subtitle="Three focused B2B implementations for progressive CBSE, ICSE, IB, and IGCSE schools in India. Click any program below to inspect curriculum structure, lab specifications, and unit economics."
        imageAlt="Curioso K-12 School Programs"
      />

      <section className="py-10 md:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programsList.map((program) => (
            <Link
              key={program.slug}
              href={program.href}
              className={`group bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-lg border border-slate-200 ${program.borderHover} hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className={`inline-flex px-3 py-1 rounded-full ${program.badgeClass} text-[8px] sm:text-xs md:text-sm font-black uppercase tracking-widest mb-4`}>
                  Program {program.number}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space tracking-tight leading-tight mb-3 group-hover:text-electric transition-colors">
                  {program.title}
                </h2>

                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-snug mb-3">
                  {program.headline}
                </h3>

                <p className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold italic mb-5 ${program.accentClass}`}>
                  "{program.hook}"
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[8px] sm:text-xs md:text-sm font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-space font-extrabold text-[10px] sm:text-xs md:text-sm lg:text-base group-hover:text-electric transition-colors">
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
