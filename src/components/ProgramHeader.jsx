import Link from 'next/link';
import { programsList } from '@/data/programs';

export default function ProgramHeader({
  badge = "School Programs",
  titlePrefix,
  titleHighlight,
  subtitle,
  activeSlug,
  imageAlt = "Curioso School Programs",
}) {
  return (
    <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-12 md:mb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-20 md:pb-24">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
          <div className="col-span-8 md:col-span-7 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link
                href="/programs"
                className="text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-cyan hover:text-white transition-colors"
              >
                Programs
              </Link>
              {activeSlug && (
                <>
                  <span className="text-[8px] sm:text-xs md:text-sm text-slate-500">/</span>
                  <span className="text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-electric">
                    {badge}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">
              {titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">
                {titleHighlight}
              </span>
            </h1>

            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed mb-6">
              {subtitle}
            </p>

            {/* Sibling program switcher */}
            <div className="flex flex-wrap gap-2">
              {programsList.map((prog) => {
                const isActive = prog.slug === activeSlug;
                return (
                  <Link
                    key={prog.slug}
                    href={prog.href}
                    className={`px-3 py-1.5 rounded-full text-[8px] sm:text-xs md:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-electric text-white shadow-lg"
                        : "bg-indigo-950/70 text-slate-300 border border-indigo-500/30 hover:border-cyan hover:text-white"
                    }`}
                  >
                    {prog.number}. {prog.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] sm:blur-[60px] opacity-60 mix-blend-screen"></div>
            <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-3 sm:p-6 md:p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
              <img
                src="/curioso_hero_robot.png"
                alt={imageAlt}
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
