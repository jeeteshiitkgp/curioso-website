import Link from 'next/link';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles
    .filter((article) => new Date(article.date) <= new Date())
    .map((article) => ({
      id: article.id,
    }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article || new Date(article.date) > new Date()) {
    return {
      title: 'Article Not Found | Curioso',
      description: 'The requested article could not be found.',
    };
  }

  const cleanDescription = article.content
    ? article.content.replace(/[#*!\[\]\(\)]/g, '').substring(0, 160).trim() + '...'
    : 'Read the latest pedagogical insight from Curioso.';

  const articleUrl = `https://www.curioso.school/blog/${article.id}`;

  return {
    title: `${article.title} | Curioso Perspectives`,
    description: cleanDescription,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | Curioso`,
      description: cleanDescription,
      url: articleUrl,
      type: 'article',
      publishedTime: article.date,
      authors: ['Jeetesh Gulani'],
      images: [
        {
          url: article.image || '/curioso_hero_robot.png',
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Curioso`,
      description: cleanDescription,
      images: [article.image || '/curioso_hero_robot.png'],
    },
  };
}

export default async function ArticleView({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article || new Date(article.date) > new Date()) {
    notFound();
  }

  const cleanDescription = article.content
    ? article.content.replace(/[#*!\[\]\(\)]/g, '').substring(0, 160).trim() + '...'
    : '';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': cleanDescription,
    'image': article.image ? [article.image] : ['https://www.curioso.school/curioso_hero_robot.png'],
    'datePublished': article.date,
    'author': {
      '@type': 'Person',
      'name': 'Jeetesh Gulani',
      'url': 'https://www.curioso.school/about',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Curioso School Foundation',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.curioso.school/curioso_hero_robot.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.curioso.school/blog/${article.id}`,
    },
  };

  const parseContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Image support
      if (paragraph.startsWith('![')) {
        const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const alt = match[1];
          const src = match[2];
          return (
            <div key={index} className="my-8 rounded-2xl overflow-hidden border border-slate-100 shadow-sm max-w-2xl mx-auto">
              <img src={src} alt={alt} className="w-full h-auto object-cover" />
            </div>
          );
        }
      }

      // Headers (H2)
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl sm:text-3xl font-bold text-space mt-10 mb-4 tracking-tight">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }

      // Headers (H3)
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl sm:text-2xl font-bold text-space mt-8 mb-3 tracking-tight">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      // List Items
      if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
        const lis = paragraph.split('\n').map((li, i) => (
          <li key={i} className="mb-2">
            {li.replace(/^[-*]\s+/, '')}
          </li>
        ));
        return (
          <ul key={index} className="list-disc pl-6 mb-6 text-base sm:text-lg text-slate-700 leading-relaxed space-y-2">
            {lis}
          </ul>
        );
      }

      // YouTube Embed
      if (paragraph.startsWith('[YOUTUBE_EMBED:')) {
        const url = paragraph.replace('[YOUTUBE_EMBED:', '').replace(']', '').trim();
        return (
          <div key={index} className="my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              width="100%"
              height="400"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        );
      }

      // Inline formatting
      const htmlContent = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-space">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-space font-mono">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-electric hover:underline font-semibold">$1</a>');

      return (
        <p
          key={index}
          className="mb-6 text-base sm:text-lg text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-ivory py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-electric transition-colors mb-8 md:mb-12"
          >
            <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Perspectives
          </Link>

          <article className="bg-white p-6 sm:p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-3 py-1 rounded-full inline-block">
                {article.category || 'Curioso Perspective'}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-space tracking-tight leading-tight border-b-4 border-electric inline-block pb-4 mb-8 sm:mb-12">
              {article.title}
            </h1>

            <div className="prose-lg max-w-none">{parseContent(article.content)}</div>
          </article>
        </div>
      </div>
    </>
  );
}
