export default function ContactCTA() {
  return (
    <section id="contact" className="pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-space"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-space opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-electric to-orange-500 rounded-[3rem] p-10 md:p-20 shadow-[-20px_20px_60px_rgba(249,115,22,0.2)] flex flex-col lg:flex-row items-center justify-between gap-16 border border-orange-400/50">
          
          <div className="text-white max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Ready to ignite potential?</h2>
            <p className="text-orange-100 text-lg md:text-xl font-medium mb-10 leading-relaxed opacity-90">
              Partner with Curioso to bring our revolutionary, AI-integrated curriculum directly into your existing school infrastructure. Secure a competitive advantage built entirely on real-world capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-sm font-medium leading-tight text-white/80">Schools<br/>Audited</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-3xl font-bold">Zero</span>
                <span className="text-sm font-medium leading-tight text-white/80">Setup<br/>Friction</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white rounded-[2rem] p-10 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan/20 blur-2xl rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-extrabold text-space mb-8">We'd love to hear from you</h3>
            <form name="partnership-inquiry" method="POST" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="partnership-inquiry" />
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name *</label>
                  <input type="text" name="first-name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" name="last-name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email *</label>
                <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-space text-white font-bold rounded-xl px-4 py-4 hover:bg-electric hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-4 outline-none">
                Submit Partnership Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
