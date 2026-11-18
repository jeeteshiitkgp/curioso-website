import CoursesTabs from '@/components/CoursesTabs';

export const metadata = {
  title: "STEM School Program, Curiosity-Driven Curriculum & Makerspace Consultants",
  description: "Explore Curioso's B2B school offerings: Curiosity-Driven Daily Socratic Hooks, Multi-Week Bare-Chassis STEM School Programs, and Vendor-Neutral Makerspace School Consulting.",
  alternates: {
    canonical: "https://www.curioso.school/courses",
  },
};

export default function CoursesPage() {
  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-20 md:pb-24">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="col-span-8 md:col-span-7 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Architecture.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                Curiosity-driven school programs, bare-chassis STEM tracks, and vendor-neutral makerspace consulting where real engineering friction builds intuition.
              </p>
            </div>

            <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] sm:blur-[60px] opacity-60 mix-blend-screen"></div>
              <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-3 sm:p-6 md:p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/curioso_hero_robot.png" 
                  alt="Curioso STEM school program and makerspace curriculum" 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <CoursesTabs />
      </div>
    </div>
  );
}
