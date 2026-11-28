import BlogGrid from '@/components/BlogGrid';
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
  const now = new Date();
  const publishedArticles = localArticles
    .filter((article) => !article.date || new Date(article.date) <= now)
    .map((article) => ({
      id: article.id,
      title: article.title,
      category: article.category || 'Essays',
      image: article.image || null,
      dateLabel: article.date
        ? new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : '',
      excerpt: article.content
        ? article.content.replace(/\[(?:INTERACTIVE|YOUTUBE_EMBED):[^\]]+\]/g, '').replace(/[#*!\[\]\(\)]/g, '').substring(0, 160) + '...'
        : '',
    }));

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
        <BlogGrid articles={publishedArticles} />
      </div>
    </div>
  );
}
