"use client";

import { useState } from 'react';
import Link from 'next/link';

const CATEGORY_ORDER = ['STEM Decoded', 'Essays', 'School Models', 'Competitions'];

export default function BlogGrid({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryCounts = articles.reduce((acc, article) => {
    const cat = article.category || 'Essays';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const visibleCategories = CATEGORY_ORDER.filter((cat) => (categoryCounts[cat] || 0) > 0);
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => (article.category || 'Essays') === selectedCategory);

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8 sm:mb-10" role="group" aria-label="Filter articles by category">
        <button
          type="button"
          onClick={() => setSelectedCategory('All')}
          aria-pressed={selectedCategory === 'All'}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
            selectedCategory === 'All'
              ? 'bg-space text-white border-space'
              : 'bg-white text-space border-slate-300 hover:border-space'
          }`}
        >
          All ({articles.length})
        </button>
        {visibleCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-space text-white border-space'
                : 'bg-white text-space border-slate-300 hover:border-space'
            }`}
          >
            {cat} ({categoryCounts[cat]})
          </button>
        ))}
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredArticles.map((article) => {
          return (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex-grow"
            >
              {article.image && (
                <div className="relative aspect-[1200/630] w-full overflow-hidden bg-slate-100 border-b border-slate-200 flex items-center justify-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-electric bg-orange-50 px-3 py-1 rounded-full">
                    {article.category || 'Essays'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {article.dateLabel}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-space mb-3 group-hover:text-electric transition-colors leading-tight">
                  {article.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {article.excerpt}
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
  );
}
