import Link from 'next/link';
import { articles as localArticles } from '@/data/articles';

export const metadata = {
  title: "Classroom Notes & School Lab Essays",
  description: "Notes from the classroom on physical science, math intuition, school STEM lab economics, NEP 2020 compliance, and why boxed kits fail students.",
  alternates: {
    canonical: "https://www.curioso.school/blog",
  },
  openGraph: {
    title: "Classroom Notes & School Lab Essays | Curioso",
    description: "Notes from the classroom on physical science, math intuition, school STEM lab economics, NEP 2020 compliance, and why boxed kits fail students.",
    url: "https://www.curioso.school/blog",
  }
};

export default function Blog() {
  return (
    <div className="bg-ivory min-h-screen pb-12 md:pb-16">
      {/* Compact Header Hero */}
      <div className="bg-space border-b border-indigo-900/50 mb-10 md:mb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Classroom Notes &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Essays.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Direct notes from the classroom on physical science, math intuition, school lab costs, and why boxed kits fail students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {localArticles
            .filter((article) => !article.date || new Date(article.date) <= new Date())
            .map((article) => {
              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex-grow"
                >
                  {article.image && (
                    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-space flex items-center justify-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space/70 via-transparent to-transparent opacity-60"></div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-3 py-1 rounded-full">
                        {article.category || 'Article'}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-space mb-3 group-hover:text-electric transition-colors leading-tight">
                      {article.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {article.content ? article.content.replace(/\[(?:INTERACTIVE|YOUTUBE_EMBED):[^\]]+\]/g, '').replace(/[#*!\[\]\(\)]/g, '').substring(0, 160) + '...' : ''}
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
