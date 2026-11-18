export const metadata = {
  title: "About Jeetesh Gulani | Makerspace & STEM School Program Architects",
  description: "Founded by IIT Kharagpur Aerospace Engineer Jeetesh Gulani. Over a decade building curiosity-driven school programs, STEM assessments, and no-kit physical curricula for 500+ schools and 200,000+ students.",
  alternates: {
    canonical: "https://www.curioso.school/about",
  },
};

export default function About() {

  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-20 md:pb-24">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            <div className="col-span-8 md:col-span-7 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                The Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">The Driver.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                Breaking predetermined molds to cultivate curiosity from the ground up.
              </p>
            </div>

            <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] sm:blur-[60px] opacity-60 mix-blend-screen"></div>
              <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-1.5 sm:p-4 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 overflow-hidden">
                <img 
                  src="/founder.jpg" 
                  alt="Jeetesh Gulani" 
                  className="w-full h-full object-cover rounded-lg sm:rounded-2xl filter drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        
        {/* Origin Story Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-[8px] sm:text-xs font-bold tracking-[0.2em] text-electric uppercase mb-2 sm:mb-4">The Origin Story</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">
            Curiosity is not taught, it's <span className="underline decoration-electric decoration-4 underline-offset-4 cursor-text">ignited.</span>
          </h3>
          
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              I started teaching at the age of 14 when I started tutoring my friends. Ironically, I was just an average student in school who wanted to study commerce after grade 10, until fate introduced me to three remarkable teachers.
            </p>
            <p>
              First, my 10th-grade math teacher, Giri sir illuminated the classroom with engaging lessons that tied math to the real world. I remember when he guided me to discover the height of a water tower using the size of its shadow, our own shadows, and the concepts of trigonometry. 
            </p>
            <p>
              The other two, who guided me through grades 11 and 12, instilled in me the virtues of diligence and resilience. I still remember solving Chemistry question papers with Shashi sir late into the night, not only because he wanted me to practice, but also because we were both deeply invested in the subject matter. 
            </p>
            <div className="bg-orange-50 border-l-4 border-electric p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl my-6 sm:my-8">
              <p className="font-semibold text-space m-0">
                Collectively, they ignited my passion for the subjects I now teach and, more profoundly, nurtured a boundless curiosity about the world. This directly guided me towards graduating as an Aerospace Engineer from IIT Kharagpur, and spending the next 7+ years as a STEM educator and curriculum designer.
              </p>
            </div>
            <p>
              I've come to realize that the present education system often falls short in nurturing this intrinsic drive; instead, it attempts to shape students into a predetermined mold. With tedious lectures and overwhelming homework, students find themselves with scarce time and energy to explore their innate curiosity.
            </p>
          </div>
        </section>

        {/* The Builder Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-[8px] sm:text-xs font-bold tracking-[0.2em] text-cyan uppercase mb-2 sm:mb-4">The Engine Builder</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">
            A decade scaling EdTech and building curriculum architectures.
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start pt-8 sm:pt-10">
               <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2 sm:mb-3">Product Leadership</h4>
               <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">Built learning experiences from the ground up, from content architecture to platform launch across major EdTechs like Cuemath and LogiQids.</p>
             </div>
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start pt-8 sm:pt-10">
               <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2 sm:mb-3">Curriculum Frameworks</h4>
               <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">Authored Science and Math frameworks deployed globally. Realigned online testing architectures and diagnostic assessment models.</p>
             </div>
          </div>

          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              During my last role, I was the Vice President of an EdTech firm, driving product and customer experience. Even though I had oversight of the entire curriculum and student experience, it was evident that the gaps created by their daily traditional schooling were too significant to be filled by an after-school intervention alone.
            </p>
            <p>
              Through these experiences, I uncovered what I believe is the absolute essence of impactful education: cultivating curiosity and explicit practical application simultaneously.
            </p>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="bg-space text-white p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="relative z-10">
            <h2 className="text-[8px] sm:text-xs font-bold tracking-[0.2em] text-electric uppercase mb-2 sm:mb-4">The Mission</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight text-white leading-tight">
              Partnering with progressive schools to build real engineering intuition, not glass-cupboard showrooms.
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed mb-6">
              Curioso partners directly with forward-thinking CBSE, ICSE, IB, and IGCSE schools across India as their curriculum architect and makerspace consultant. We do not sell proprietary plastic kits or lock schools into expensive hardware vendor contracts.
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed">
              Instead, we license a structured physical curriculum built on an open-market Bill of Materials, train and induct your science and math faculty through weekly Socratic syncs and monthly campus workshops, and turn regular classrooms into active engineering labs.
            </p>
           </div>
        </section>

      </div>
    </div>
  );
}
