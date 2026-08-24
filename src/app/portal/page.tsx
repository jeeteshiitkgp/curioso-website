import Link from 'next/link';

export default function PortalDashboard() {
  return (
    <div className="flex-grow bg-space py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-ivory tracking-tighter mb-8">Your Curriculum</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-12">
          Welcome to the Curioso learning portal. Access your activated interdisciplinary modules below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Static Placeholder for the WW2 Thermite Pathway until connected to DB */}
          <Link href="/portal/module/accessory-to-war" className="block bg-indigo-950/40 rounded-[2rem] border border-indigo-500/20 p-8 hover:bg-indigo-900/40 transition-colors shadow-lg">
            <div className="text-xs font-bold text-cyan tracking-widest uppercase mb-4">Module 1</div>
            <h2 className="text-2xl font-bold text-ivory mb-4">Accessory to War</h2>
            <p className="text-slate-300 text-sm mb-6">
              Reverse-engineer the chemistry of Thermite by studying the strategic arms race of World War II. 
            </p>
            <div className="text-electric font-bold text-sm flex items-center">
              Start Pathway &rarr;
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
