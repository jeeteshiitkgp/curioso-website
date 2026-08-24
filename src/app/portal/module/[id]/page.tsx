import { supabase } from '@/lib/supabase';

// In a real implementation, you would fetch the module data based on the ID.
// For now, we mock the UI for the "Accessory to War" pathway.

export default async function ModuleView({ params }: { params: { id: string } }) {
  // const { data } = await supabase.from('modules').select('*').eq('slug', params.id).single();
  
  return (
    <div className="flex-grow bg-ivory text-space">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-sm font-bold text-cyan tracking-widest uppercase mb-4">Module 1</div>
        <h1 className="text-5xl font-black tracking-tighter mb-8 text-space">Accessory to War</h1>
        
        <div className="prose prose-lg prose-indigo max-w-none text-slate-700">
          <h2 className="text-3xl font-bold text-space mt-12 mb-6">1. The Historical Hook</h2>
          <p>
            Instead of teaching chemistry as abstract formulas on a chalkboard, science here is taught as the 
            tools used by historical figures to change the course of the world. We study how World War 2 
            fundamentally altered human history through the lens of incendiary warfare, and then reverse-engineer 
            the chemistry of <strong>Thermite</strong> to understand the horrifying, world-changing power of science.
          </p>

          <h2 className="text-3xl font-bold text-space mt-12 mb-6">2. The Mechanics of Destruction</h2>
          <p>
            How did engineers create a compound that burns at 2,500°C without needing external oxygen?
            We break down the chemical reaction between metal powder (like aluminum) and metal oxide (like iron oxide). 
            We explore <strong>Exothermic Reactions</strong>, <strong>Oxidation-Reduction (Redox)</strong>, and <strong>Activation Energy</strong>.
          </p>

          <div className="bg-space p-8 rounded-[2rem] my-12 text-ivory shadow-xl">
            <h3 className="text-xl font-bold text-electric mb-4">Laboratory Exercise</h3>
            <p className="text-slate-300">
              The exact experiment requires supervision, but understanding the heat transfer mathematically starts here.
              Review the structural differences between Fe2O3 and Al2O3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
