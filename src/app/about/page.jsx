export const metadata = {
  title: "About Jeetesh Gulani",
  description: "Founded by IIT Kharagpur Aerospace Engineer Jeetesh Gulani. 10+ years building no-kit science and math curricula across 500+ Indian schools.",
  alternates: {
    canonical: "https://www.curioso.school/about",
  },
};

export default function About() {

  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-12 md:mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="md:col-span-7 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                Why I Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Curioso.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                Breaking the memorization and plastic-kit loop so school kids learn how things actually work.
              </p>
            </div>

            <div className="md:col-span-5 relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] opacity-60 pointer-events-none"></div>
              <div className="relative bg-indigo-950/50 border border-indigo-400/25 rounded-3xl p-3 sm:p-4 aspect-square flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/founder.jpg" 
                  alt="Jeetesh Gulani" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        
        {/* Origin Story Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">
            Why one shadow math lesson changed everything.
          </h2>
          
          <div className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              I started teaching my friends at 14. Funny enough, I was an average student in school and planned to take commerce after Grade 10. Three teachers changed that.
            </p>
            <p>
              My 10th-grade math teacher, Giri sir, took trigonometry out of the textbook. I still remember him making us find the height of a water tower using only the length of its shadow, our own shadows, and basic ratios. For the first time, math was not symbols on a chalkboard, it was a physical tool.
            </p>
            <p>
              Two other teachers in Grades 11 and 12 pushed me to grind through tough problems until they clicked. I still remember solving Chemistry papers with Shashi sir late into the night because neither of us wanted to leave a question half-understood.
            </p>
            <div className="bg-orange-50 border-l-4 border-electric p-5 sm:p-6 rounded-r-2xl my-6 sm:my-8">
              <p className="font-semibold text-space m-0">
                That shift took me to IIT Kharagpur for Aerospace Engineering, and then into 10+ years of building K-12 science and math programs and assessments across 500+ schools and 200,000+ students.
              </p>
            </div>
            <p>
              The pattern inside Indian schools has not changed much since I sat in class. Kids spend years memorizing definitions and solving template numericals to pass exams, with almost zero time left to touch real materials and figure out why something works or breaks.
            </p>
          </div>
        </section>

        {/* Classroom Photo */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/images/school/sticks-hands-landscape.jpg"
              alt="Hands joining wooden sticks and rubber bands on the classroom floor"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
        </section>

        {/* The Builder Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space mb-6 sm:mb-8 tracking-tight">
            A decade building K-12 science, math, and assessment products.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col items-start">
               <h3 className="text-lg sm:text-xl font-bold text-space mb-2 sm:mb-3">Product &amp; Scale</h3>
               <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Built and scaled math, science, and reasoning programs from scratch at Cuemath and LogIQids, working across product, student UX, and school rollouts.</p>
             </div>
             <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col items-start">
               <h3 className="text-lg sm:text-xl font-bold text-space mb-2 sm:mb-3">Assessments &amp; Curricula</h3>
               <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Designed conceptual science assessments for 250+ CBSE and ICSE schools and national math challenges reaching tens of thousands of students.</p>
             </div>
          </div>

          <div className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              As VP of Curriculum and Product in consumer edtech, I saw the real limit of after-school apps and tutoring: you cannot fix a child's daily schooling habits in a 1-hour weekend class when Monday through Friday is pure rote memorization.
            </p>
            <p>
              To change how students actually think, you have to work inside the school itself, alongside the regular science and math syllabus, using raw physical materials rather than expensive kit boxes.
            </p>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="bg-space text-white p-8 sm:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 tracking-tight text-white leading-tight">
              Partnering with schools to build real understanding, not glass-cupboard showrooms.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6">
              Curioso partners directly with CBSE, ICSE, IB, and IGCSE schools across India to set up low-cost STEM and innovation labs and run hands-on lessons inside regular periods. We do not sell hardware, mark up electronics, or lock schools into plastic kit contracts.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              We provide the structured lesson system, give your school a simple shopping list for local wholesale supplies, help hire or train your permanent science and math teachers through weekly check-ins and monthly workshops, and let your students build from scratch.
            </p>
           </div>
        </section>

      </div>
    </div>
  );
}
