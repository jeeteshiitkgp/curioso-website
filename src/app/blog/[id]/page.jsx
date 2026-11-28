import Link from 'next/link';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import InteractiveExplainer from '@/components/explainers/InteractiveExplainer';

function getPublishedArticles() {
  return articles.filter((article) => !article.date || new Date(article.date) <= new Date());
}

function getRelatedArticles(currentArticle, publishedArticles) {
  const currentCategory = currentArticle.category || 'Essays';
  const sameCategory = publishedArticles.filter(
    (a) => (a.category || 'Essays') === currentCategory
  );
  const picked = [];
  const seen = new Set([currentArticle.id]);

  const catIdx = sameCategory.findIndex((a) => a.id === currentArticle.id);
  if (catIdx !== -1 && sameCategory.length > 1) {
    for (let offset = 1; offset < sameCategory.length && picked.length < 2; offset++) {
      const candidate = sameCategory[(catIdx + offset) % sameCategory.length];
      if (!seen.has(candidate.id)) {
        seen.add(candidate.id);
        picked.push(candidate);
      }
    }
  }

  const allIdx = publishedArticles.findIndex((a) => a.id === currentArticle.id);
  if (allIdx !== -1) {
    for (let offset = 1; offset < publishedArticles.length && picked.length < 3; offset++) {
      const candidate = publishedArticles[(allIdx + offset) % publishedArticles.length];
      if (!seen.has(candidate.id)) {
        seen.add(candidate.id);
        picked.push(candidate);
      }
    }
  }

  return picked;
}

function getPrimaryProgram(currentArticle) {
  const text = `${currentArticle.id} ${currentArticle.title} ${currentArticle.category || ''}`.toLowerCase();

  if (/\b(lab|atl|robotics|cost|kit|equipment|budget)\b/.test(text)) {
    return {
      href: '/programs/stem-lab',
      title: 'Set Up a Low-Cost School STEM Lab',
      desc: 'Build a hands-on innovation lab using local supplies at 80% lower cost than robotics kit packages.',
    };
  }

  if (/\b(math|geometry|triangle|nep|syllabus|classroom|curriculum)\b/.test(text)) {
    return {
      href: '/programs/curiosity-classroom',
      title: 'Curiosity Classroom & Physical Math Lab',
      desc: 'Hands-on science and math activities built directly into regular 45-minute CBSE, ICSE, IB, and IGCSE periods.',
    };
  }

  if (/\b(robot|engine|project|build|hydraulic|bridge|lever|friction)\b/.test(text)) {
    return {
      href: '/programs/project-based-learning',
      title: 'Multi-Week Engineering Project Tracks',
      desc: 'Students build electric cars, hydraulic cranes, and solar coolers from raw materials instead of boxed kits.',
    };
  }

  return {
    href: '/programs/stem-lab',
    title: 'Set Up a Low-Cost School STEM Lab',
    desc: 'Build a hands-on innovation lab using local supplies at 80% lower cost than robotics kit packages.',
  };
}

const HUB_LINKS = [
  { href: '/programs/stem-lab', label: 'School STEM Lab Setup' },
  { href: '/programs/curiosity-classroom', label: 'Curiosity Classroom' },
  { href: '/programs/project-based-learning', label: 'Engineering Projects' },
  { href: '/lessons', label: '11 No-Kit Experiments' },
];

export async function generateStaticParams() {
  return getPublishedArticles().map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article || (article.date && new Date(article.date) > new Date())) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const cleanDescription = article.content
    ? article.content.replace(/\[(?:INTERACTIVE|YOUTUBE_EMBED):[^\]]+\]/g, '').replace(/[#*!\[\]\(\)]/g, '').substring(0, 150).trim() + '...'
    : 'Classroom notes and essays from Curioso.';

  const articleUrl = `https://www.curioso.school/blog/${article.id}`;

  return {
    title: article.title,
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
          url: article.image || '/images/blog/messy-prototyping-lab.jpg',
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Curioso`,
      description: cleanDescription,
      images: [article.image || '/images/blog/messy-prototyping-lab.jpg'],
    },
  };
}

export default async function ArticleView({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article || (article.date && new Date(article.date) > new Date())) {
    notFound();
  }

  const cleanDescription = article.content
    ? article.content.replace(/\[(?:INTERACTIVE|YOUTUBE_EMBED):[^\]]+\]/g, '').replace(/[#*!\[\]\(\)]/g, '').substring(0, 160).trim() + '...'
    : '';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': cleanDescription,
    'image': article.image ? [article.image] : ['https://www.curioso.school/images/blog/messy-prototyping-lab.jpg'],
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
        'url': 'https://www.curioso.school/favicon.svg',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.curioso.school/blog/${article.id}`,
    },
  };

  const parseContent = (content) => {
    const formatInline = (text) =>
      text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-space">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-space font-mono">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, (_, label, href) => {
          const isExternal = /^https?:\/\//i.test(href);
          return `<a href="${href}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''} class="text-electric hover:underline font-semibold">${label}</a>`;
        });

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
          <li key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: formatInline(li.replace(/^[-*]\s+/, '')) }} />
        ));
        return (
          <ul key={index} className="list-disc pl-6 mb-6 text-base sm:text-lg text-slate-700 leading-relaxed space-y-2">
            {lis}
          </ul>
        );
      }

      // Interactive Coded Explainer
      if (paragraph.startsWith('[INTERACTIVE:')) {
        const name = paragraph.replace('[INTERACTIVE:', '').replace(']', '').trim();
        return <InteractiveExplainer key={index} name={name} />;
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

      return (
        <p
          key={index}
          className="mb-6 text-base sm:text-lg text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatInline(paragraph) }}
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
            Back to All Notes
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

          {/* Continue Reading: 3 Related Notes */}
          {(() => {
            const publishedArticles = getPublishedArticles();
            const relatedArticles = getRelatedArticles(article, publishedArticles);
            const primaryProgram = getPrimaryProgram(article);
            const secondaryLinks = HUB_LINKS.filter((item) => item.href !== primaryProgram.href);

            return (
              <>
                {relatedArticles.length > 0 && (
                  <section className="mt-10 sm:mt-12" aria-labelledby="continue-reading-heading">
                    <h2
                      id="continue-reading-heading"
                      className="text-xl sm:text-2xl font-extrabold text-space tracking-tight mb-5"
                    >
                      Continue Reading
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {relatedArticles.map((rel) => (
                        <Link
                          key={rel.id}
                          href={`/blog/${rel.id}`}
                          className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-electric transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-electric mb-2 block">
                              {rel.category || 'Essays'}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-space leading-snug mb-3 group-hover:text-electric transition-colors">
                              {rel.title}
                            </h3>
                          </div>
                          <span className="text-xs font-bold text-electric">
                            Read note &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Bring This to Your School */}
                <section
                  className="mt-8 bg-space text-white rounded-2xl p-6 sm:p-8 shadow-lg"
                  aria-label="Bring This to Your School"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-cyan block mb-2">
                    For School Principals &amp; Teachers
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    {primaryProgram.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {primaryProgram.desc}
                  </p>
                  <Link
                    href={primaryProgram.href}
                    className="inline-flex items-center justify-center bg-electric hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Explore Program &rarr;
                  </Link>
                  <div className="mt-5 pt-5 border-t border-slate-700/80 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-300">
                    {secondaryLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-cyan transition-colors underline underline-offset-4 decoration-slate-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              </>
            );
          })()}
        </div>
      </div>
    </>
  );
}
