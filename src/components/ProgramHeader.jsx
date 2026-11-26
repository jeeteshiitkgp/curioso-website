import Link from 'next/link';
import { programsList } from '@/data/programs';

export default function ProgramHeader({
  badge = "School Programs",
  titlePrefix,
  titleHighlight,
  subtitle,
  activeSlug,
  heroImage,
  imageAlt = "Curioso School Programs",
}) {
  return (
    <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-10 md:mb-14">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className={heroImage ? "lg:col-span-7 max-w-2xl" : "lg:col-span-10 max-w-3xl"}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link
                href="/programs"
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cyan hover:text-white transition-colors"
              >
                Programs
              </Link>
              {activeSlug && (
                <>
                  <span className="text-xs sm:text-sm text-slate-500">/</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-electric">
                    {badge}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-5">
              {titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">
                {titleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6">
              {subtitle}
            </p>

            {/* Sibling program switcher */}
            {activeSlug && (
              <div className="flex flex-wrap gap-2.5">
                {programsList.map((prog) => {
                  const isActive = prog.slug === activeSlug;
                  return (
                    <Link
                      key={prog.slug}
                      href={prog.href}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-electric text-white shadow-lg"
                          : "bg-indigo-950/70 text-slate-300 border border-indigo-500/30 hover:border-cyan hover:text-white"
                      }`}
                    >
                      {prog.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {heroImage && (
            <div className="lg:col-span-5 relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] opacity-60 pointer-events-none"></div>
              <div className="relative bg-indigo-950/50 border border-indigo-400/25 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt={imageAlt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
