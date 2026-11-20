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
                Why I Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Curioso.</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                Breaking the memorization and plastic-kit loop so school kids learn how things actually work.
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
            Why one shadow math lesson changed everything.
          </h3>
          
          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              I started teaching my friends at 14. Funny enough, I was an average student in school and planned to take commerce after Grade 10. Three teachers changed that.
            </p>
            <p>
              My 10th-grade math teacher, Giri sir, took trigonometry out of the textbook. I still remember him making us find the height of a water tower using only the length of its shadow, our own shadows, and basic ratios. For the first time, math was not symbols on a chalkboard, it was a physical tool.
            </p>
            <p>
              Two other teachers in Grades 11 and 12 pushed me to grind through tough problems until they clicked. I still remember solving Chemistry papers with Shashi sir late into the night because neither of us wanted to leave a question half-understood.
            </p>
            <div className="bg-orange-50 border-l-4 border-electric p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl my-6 sm:my-8">
              <p className="font-semibold text-space m-0">
                That shift took me to IIT Kharagpur for Aerospace Engineering, and then into 10+ years of building K-12 science and math programs and assessments across 500+ schools and 200,000+ students.
              </p>
            </div>
            <p>
              The pattern inside Indian schools has not changed much since I sat in class. Kids spend years memorizing definitions and solving template numericals to pass exams, with almost zero time left to touch real materials and figure out why something works or breaks.
            </p>
          </div>
        </section>

        {/* The Builder Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-[8px] sm:text-xs font-bold tracking-[0.2em] text-cyan uppercase mb-2 sm:mb-4">The Track Record</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">
            A decade building K-12 science, math, and assessment products.
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start pt-8 sm:pt-10">
               <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2 sm:mb-3">Product &amp; Scale</h4>
               <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">Built and scaled math, science, and reasoning programs from scratch at Cuemath and LogIQids, working across product, student UX, and B2B school rollouts.</p>
             </div>
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start pt-8 sm:pt-10">
               <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-space mb-2 sm:mb-3">Assessments &amp; Curricula</h4>
               <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">Designed conceptual science assessments for 250+ CBSE and ICSE schools and national math challenges reaching tens of thousands of students.</p>
             </div>
          </div>

          <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              As VP of Curriculum and Product in consumer edtech, I saw the real limit of after-school apps and tutoring: you cannot fix a child's daily schooling habits in a 1-hour weekend class when Monday through Friday is pure rote memorization.
            </p>
            <p>
              To change how students actually think, you have to work inside the school itself, alongside the regular science and math syllabus, using raw physical materials rather than expensive kit boxes.
            </p>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="bg-space text-white p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="relative z-10">
            <h2 className="text-[8px] sm:text-xs font-bold tracking-[0.2em] text-electric uppercase mb-2 sm:mb-4">How We Work With Schools</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight text-white leading-tight">
              Partnering with progressive schools to build real engineering intuition, not glass-cupboard showrooms.
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed mb-6">
              Curioso partners directly with CBSE, ICSE, IB, and IGCSE schools across India to set up low-cost STEM and innovation labs and run hands-on curriculum inside regular periods. We do not sell hardware, mark up electronics, or lock schools into proprietary kit contracts.
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 font-medium leading-relaxed">
              We license the structured physical curriculum, hand your team an open-market Bill of Materials bought at wholesale rates, help hire or train your permanent science and math faculty through weekly syncs and monthly campus workshops, and let your students build from scratch.
            </p>
           </div>
        </section>

      </div>
    </div>
  );
}
