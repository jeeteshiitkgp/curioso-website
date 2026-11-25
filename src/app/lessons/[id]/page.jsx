import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lessons } from '@/data/lessons';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Wrench,
  ShieldCheck,
  Flame,
  ExternalLink,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    return {
      title: 'Lesson Not Found',
      description: 'The requested lesson could not be found.',
    };
  }

  const lessonUrl = `https://www.curioso.school/lessons/${lesson.id}`;
  const ogImage = lesson.image || '/images/lessons/bernoulli-airflow.jpg';

  return {
    title: lesson.title,
    description: lesson.seoDescription,
    alternates: {
      canonical: lessonUrl,
    },
    openGraph: {
      title: `${lesson.title} | Curioso`,
      description: lesson.seoDescription,
      url: lessonUrl,
      type: 'article',
      images: [
        {
          url: ogImage,
          alt: lesson.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${lesson.title} | Curioso`,
      description: lesson.seoDescription,
      images: [ogImage],
    },
  };
}

export default async function LessonView({ params }) {
  const { id } = await params;
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    notFound();
  }

  const isStoveDemo = lesson.safety.toLowerCase().includes('stove');
  const fullImageUrl = `https://www.curioso.school${lesson.image || '/images/lessons/bernoulli-airflow.jpg'}`;

  const lessonSchema = {
    '@context': 'https://schema.org',
    '@type': ['HowTo', 'LearningResource'],
    name: lesson.title,
    description: lesson.seoDescription,
    image: fullImageUrl,
    educationalLevel: lesson.grades,
    teaches: lesson.boardFit,
    learningResourceType: 'Hands-on Experiment',
    supply: lesson.materials.map((item) => ({
      '@type': 'HowToSupply',
      name: item,
    })),
    step: lesson.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.detail,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonSchema) }}
      />
      <div className="bg-ivory min-h-screen w-full min-w-0 overflow-x-hidden pb-16 md:pb-24">
        {/* Hero Section */}
        <div className="bg-space pt-10 pb-14 sm:pt-14 sm:pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/lessons"
              className="inline-flex items-center text-cyan hover:text-white transition-colors font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 sm:mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to All 11 Lessons
            </Link>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <span className="bg-indigo-950/90 border border-indigo-400/30 text-cyan text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                {lesson.category}
              </span>
              <span className="bg-electric text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                {lesson.grades}
              </span>
              <span className="flex items-center text-slate-300 text-xs font-semibold uppercase tracking-wider px-2 py-1">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-cyan" /> {lesson.timeRequired}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full ${
                  isStoveDemo
                    ? 'bg-orange-500/20 border border-orange-400/50 text-orange-200'
                    : 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-200'
                }`}
              >
                {isStoveDemo ? (
                  <Flame className="w-3.5 h-3.5" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5" />
                )}
                {lesson.safety}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.08] max-w-5xl">
              {lesson.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-semibold">
              Curriculum Fit: <span className="text-cyan">{lesson.boardFit}</span>
            </p>
          </div>
        </div>

        {/* Main 2-Column Recipe Card Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Main Column */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 min-w-0">
              {/* Photo + Reel Bar */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-900">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-full max-h-[420px] object-cover"
                  />
                </div>
                {lesson.reelUrl && (
                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      See this exact run in real time:
                    </span>
                    <a
                      href={lesson.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-electric hover:text-space transition-colors"
                    >
                      Watch 30-Second Experiment on Instagram (@curioso.school)
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                )}
              </div>

              {/* Card 1: The Prediction Trap */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-electric/30">
                <span className="text-xs font-black uppercase tracking-widest text-electric block mb-2">
                  Step 0 · Ask Before You Touch Anything
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-4">
                  The Prediction Trap
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-bold text-space leading-snug mb-5">
                  {lesson.trap.question}
                </p>

                <div className="space-y-2.5 mb-5">
                  {lesson.trap.options.map((opt) => (
                    <div
                      key={opt}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-space"
                    >
                      {opt}
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50/80 border border-orange-200 rounded-xl p-4">
                  <span className="text-xs font-black uppercase tracking-wider text-electric block mb-1">
                    Where Intuition Breaks
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {lesson.trap.commonWrongGuess}
                  </p>
                </div>
              </section>

              {/* Card 2: Run It in 3 Steps */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
                  Run It in 3 Steps
                </h2>

                {lesson.safetyNote && (
                  <div className="mb-6 bg-orange-50 border-l-4 border-electric rounded-r-xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-electric block mb-1">
                        {lesson.safety}
                      </span>
                      <p className="text-sm sm:text-base text-space font-semibold leading-relaxed">
                        {lesson.safetyNote}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {lesson.steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <span className="shrink-0 w-9 h-9 rounded-full bg-space text-white flex items-center justify-center text-sm font-extrabold">
                        0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-space mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3: What Happens & Why */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-space tracking-tight leading-tight mb-6">
                  What Happens &amp; Why
                </h2>

                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-space mb-2">
                      What You See
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                      {lesson.physics.whatHappens}
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-5">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-space mb-2">
                      The Physics Behind It
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                      {lesson.physics.mechanism}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-space mb-2">
                      Real-World Engineering Link
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                      {lesson.physics.realWorldLink}
                    </p>
                  </div>

                  {lesson.diagramImage && (
                    <div className="pt-4 border-t border-slate-200">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-3">
                        Force &amp; Geometry Breakdown
                      </span>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 max-w-md mx-auto">
                        <img
                          src={lesson.diagramImage}
                          alt={`${lesson.title} force diagram`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Cross-Links Footer */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  {lesson.relatedArticle && (
                    <Link
                      href={`/blog/${lesson.relatedArticle.slug}`}
                      className="flex items-center gap-2 text-sm sm:text-base font-bold text-indigo-700 hover:text-electric transition-colors"
                    >
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <span>Read Essay: {lesson.relatedArticle.title} &rarr;</span>
                    </Link>
                  )}
                  <Link
                    href={lesson.relatedProgram.href}
                    className="flex items-center gap-2 text-sm sm:text-base font-bold text-electric hover:text-space transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {lesson.relatedProgram.label}
                  </Link>
                </div>
                <Link
                  href="/lessons"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-100 hover:bg-space hover:text-white text-space font-bold text-sm transition-colors shrink-0"
                >
                  All 11 Experiments
                </Link>
              </section>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 min-w-0">
              {/* Materials Checklist */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
                  <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-space uppercase tracking-tight">
                    Materials Needed
                  </h2>
                </div>

                <ul className="space-y-3.5">
                  {lesson.materials.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-electric font-black mt-0.5 text-sm">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Classroom & Project Fit */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 space-y-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-space uppercase tracking-tight pb-3 border-b border-slate-200">
                  Classroom &amp; Project Fit
                </h2>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Target Grades
                  </span>
                  <p className="text-sm sm:text-base font-bold text-space">
                    {lesson.grades}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                    CBSE / NCERT Chapter Fit
                  </span>
                  <p className="text-sm sm:text-base font-medium text-slate-700">
                    {lesson.boardFit}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Best Used For
                  </span>
                  <p className="text-sm sm:text-base font-medium text-slate-700">
                    {lesson.useCase}
                  </p>
                </div>
              </div>

              {/* B2B School CTA Card */}
              <div className="bg-space text-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-cyan block mb-2">
                  For School Principals &amp; Heads
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
                  Bring No-Kit Labs to Your School
                </h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-5">
                  Run experiments like this inside regular 45-minute CBSE, ICSE, IB, and IGCSE periods with zero plastic kit lock-in.
                </p>
                <Link
                  href="/programs"
                  className="block w-full text-center bg-electric hover:bg-orange-500 text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm sm:text-base shadow-md"
                >
                  Explore School Programs
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
