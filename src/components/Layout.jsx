"use client";

"use client";

"use client";

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ContactCTA from './ContactCTA';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Pedagogy', path: '/clinical-grade-pedagogy' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' }
  ];

  const anchorLinks = [
    { name: "Why 'Why' Matters", path: '/#problem' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-ivory font-sans">
      {/* Global Navigation */}
      <nav className="sticky top-0 z-50 bg-space border-b border-indigo-900/50 shadow-sm backdrop-blur-md bg-opacity-98">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            
            {/* Logo */}
            <div className="flex flex-col items-center select-none cursor-pointer">
              <Link href="/" className="flex items-center text-[2.5rem] font-black tracking-tighter hover:opacity-90 transition-opacity" style={{ color: '#E84118', lineHeight: '1' }}>
                <span>CUR</span>
                <svg width="22" height="38" viewBox="0 0 20 40" className="mx-[1px] transform translate-y-[2px]" fill="#E84118">
                  <rect x="2" y="0" width="16" height="40" rx="1" />
                  <line x1="12" y1="6" x2="18" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="11" x2="18" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="16" x2="18" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="21" x2="18" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="26" x2="18" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="31" x2="18" y2="31" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="36" x2="18" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>OSO</span>
              </Link>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan mt-1">Engineered for Curiosity</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex ml-8 space-x-6 items-center">
              {anchorLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-slate-300 hover:text-white transition-colors px-2 py-2 text-sm font-semibold tracking-wide"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'text-electric border-b-2 border-electric'
                        : 'text-slate-300 hover:text-ivory hover:border-b-2 border-transparent transition-all duration-300'
                    } px-2 py-2 text-sm font-semibold tracking-wide`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-electric border-b-2 border-electric'
                      : 'text-slate-300 hover:text-ivory hover:border-b-2 border-transparent transition-all duration-300'
                  } px-2 py-2 text-sm font-semibold tracking-wide`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-lg text-sm font-bold text-space bg-cyan hover:bg-teal-400 hover:scale-105 transition-all duration-200">
                Partner With Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-space border-b border-indigo-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {anchorLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-slate-300 hover:bg-indigo-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'bg-indigo-900/50 text-electric'
                      : 'text-slate-300 hover:bg-indigo-800 hover:text-white'
                  } block px-3 py-2 rounded-md text-base font-semibold uppercase`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Page Content rendered here */}
      <main className="flex-grow flex flex-col justify-start">
        <Outlet />
      </main>

      {/* Global Form explicitly injected everywhere above footer */}
      <div id="contact">
        <ContactCTA />
      </div>

      {/* Global Footer */}
      <footer className="bg-space text-center py-10 border-t border-indigo-900/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex flex-col items-center select-none cursor-pointer hover:opacity-90 transition-opacity">
              <div className="flex items-center text-3xl font-black tracking-tighter" style={{ color: '#E84118', lineHeight: '1' }}>
                <span>CUR</span>
                <svg width="18" height="30" viewBox="0 0 20 40" className="mx-[1px] transform translate-y-[1px]" fill="#E84118">
                  <rect x="2" y="0" width="16" height="40" rx="1" />
                  <line x1="12" y1="6" x2="18" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="11" x2="18" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="16" x2="18" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="21" x2="18" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="26" x2="18" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="31" x2="18" y2="31" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="36" x2="18" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>OSO</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm font-medium">
              © {currentYear} Curioso School Foundation. Engineered for Curiosity.
            </p>
        </div>
      </footer>
    </div>
  );
}
