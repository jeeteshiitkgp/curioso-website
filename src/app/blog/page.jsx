import Link from 'next/link';
import { articles as localArticles } from '@/data/articles';

export const metadata = {
  title: "Educational Foresight & Curriculum Research | Curioso Perspectives",
  description: "Data-backed research and reflections on scaling K-12 experiential learning, cognitive physics, and NEP 2020 curriculum deployments in Indian schools.",
  alternates: {
    canonical: "https://www.curioso.school/blog",
  },
  openGraph: {
    title: "Educational Foresight & Curriculum Research | Curioso Perspectives",
    description: "Data-backed reflections on experiential science and math program deployments in Indian private schools.",
    url: "https://www.curioso.school/blog",
  }
};

export default function Blog() {
  return (
    <div className="bg-ivory min-h-screen pb-12 md:pb-16">
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-space border-b border-indigo-900/50 mb-8 md:mb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-10 md:pb-12">
            <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
              
              <div className="col-span-8 md:col-span-7 max-w-2xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Foresight.</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed">
                  Data-backed research and reflections on scaling K-12 experiential learning, cognitive physics, and non-linear student growth.
                </p>
              </div>

              <div className="col-span-4 md:col-span-5 relative w-full max-w-[120px] sm:max-w-[200px] md:max-w-md mx-auto perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-electric/20 rounded-3xl blur-[40px] sm:blur-[60px] opacity-60 mix-blend-screen"></div>
                <div className="relative bg-indigo-950/40 border border-indigo-400/20 rounded-xl sm:rounded-[2rem] p-3 sm:p-6 md:p-10 aspect-square flex items-center justify-center shadow-2xl backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/curioso_hero_robot.png" 
                    alt="Curioso Experiential Science Curriculum" 
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {localArticles
            .filter((article) => new Date(article.date) <= new Date())
            .map((article) => {
            return (
              <Link 
                key={article.id} 
                href={`/blog/${article.id}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex-grow"
              >
                {article.image && (
                  <div className="relative h-64 w-full overflow-hidden bg-space flex items-center justify-center">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                )}
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-3 py-1 rounded-full">
                      {article.category || 'Article'}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-space mb-4 group-hover:text-electric transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {article.content ? article.content.replace(/[#*!\[\]\(\)]/g, '').substring(0, 160) + '...' : ''}
                  </p>

                  <div className="flex items-center text-sm font-bold text-electric group-hover:translate-x-1 transition-transform">
                    Read Analysis &rarr;
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
