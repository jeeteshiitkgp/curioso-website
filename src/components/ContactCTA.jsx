"use client";

import { useState } from 'react';
import { Calendar, Mail, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';

export default function ContactCTA() {
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'form'
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please book a call directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 relative overflow-hidden bg-space text-ivory">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 to-space opacity-90 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-electric bg-indigo-950/80 border border-electric/30 px-3.5 py-1 rounded-full mb-4 inline-block">
            Institutional Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Bring Clinical Physical Pedagogy to <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange-400">Your School.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed">
            Schedule a 30-minute consultation directly with our curriculum architecture team or send an asynchronous inquiry.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-indigo-950/90 border border-indigo-800/80 rounded-full shadow-inner">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'calendar'
                  ? 'bg-electric text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Call (Instant)</span>
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'form'
                  ? 'bg-electric text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </div>
        </div>

        {/* Main CTA Container */}
        <div className="bg-gradient-to-tr from-indigo-950/80 via-space to-indigo-950/90 rounded-[2.5rem] p-4 sm:p-8 md:p-12 shadow-2xl border border-indigo-800/50 backdrop-blur-xl">
          
          {activeTab === 'calendar' ? (
            /* Tab 1: Instant Calendly Booking Embed */
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex justify-between items-center px-4 mb-4 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">
                  Select a convenient 30-minute slot for an institutional walkthrough
                </span>
                <a
                  href="https://calendly.com/jeetesh-curioso/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-electric hover:underline font-bold"
                >
                  Open in New Tab <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 min-h-[680px]">
                <iframe
                  src="https://calendly.com/jeetesh-curioso/30min?embed_domain=curioso.school&embed_type=Inline"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  title="Schedule a 30-Min Institutional Consultation"
                  className="w-full h-[680px]"
                ></iframe>
              </div>
            </div>
          ) : (
            /* Tab 2: Asynchronous Inquiry Form */
            <div className="max-w-2xl mx-auto py-4">
              {submitted ? (
                <div className="bg-indigo-950/90 border border-teal-500/30 rounded-3xl p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Inquiry Received</h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                    Thank you for reaching out. Your inquiry has been routed directly to Jeetesh Gulani. We will review your school requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setActiveTab('calendar');
                    }}
                    className="inline-flex items-center gap-2 bg-electric hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    Want to lock a slot now? Schedule Call
                  </button>
                </div>
              ) : (
                <div className="bg-white text-space rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-extrabold text-space mb-2">Send an Institutional Inquiry</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-8 font-medium">
                    Have a quick question about curriculum licensing, BOM procurement, or board compliance? Leave a note.
                  </p>

                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 whitespace-nowrap">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-space"
                          placeholder="e.g. Dr. Priya"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 whitespace-nowrap">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-space"
                          placeholder="e.g. Sharma"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 whitespace-nowrap">
                        Work / School Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all text-space"
                        placeholder="e.g. principal@school.edu.in"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 whitespace-nowrap">
                        Message / School Context
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all resize-none text-space"
                        placeholder="Tell us about your grade levels, student strength, or NEP 2020 science lab objectives..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-space hover:bg-electric text-white font-bold rounded-xl px-6 py-4 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Routing Inquiry...</span>
                        </>
                      ) : (
                        <span>Submit Inquiry &rarr;</span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
