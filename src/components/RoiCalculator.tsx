import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

interface RoiCalculatorProps {
  onPlanWithBudget: (budget: number, roas: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onPlanWithBudget }) => {
  const [budget, setBudget] = useState<number>(1500);
  const [targetRoas, setTargetRoas] = useState<number>(3.5);

  const estimatedRevenue = Math.round(budget * targetRoas);
  const estimatedProfitGain = Math.round(estimatedRevenue - budget);
  const estimatedOrders = Math.round(estimatedRevenue / 65); // assuming approx $65 average order value

  return (
    <section className="py-20 relative overflow-hidden bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-navy-850 to-navy-900 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
                <Calculator className="w-3.5 h-3.5" />
                Interactive Growth Projection
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Estimate Your Campaign <span className="text-gradient-electric">Return on Ad Spend</span>
              </h3>

              <p className="text-sm text-slate-300">
                Slide the parameters below based on your planned monthly media budget to see realistic baseline revenue projections based on structured campaign optimization.
              </p>

              {/* Slider 1: Monthly Budget */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Planned Monthly Ad Spend:
                  </label>
                  <span className="text-xl font-black text-electric-400 font-mono">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>$500/mo (Starter)</span>
                  <span>$5,000/mo (Growth)</span>
                  <span>$10,000/mo (Scale)</span>
                </div>
              </div>

              {/* Slider 2: Target ROAS */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Target Return on Ad Spend (ROAS):
                  </label>
                  <span className="text-xl font-black text-emerald-400 font-mono">
                    {targetRoas.toFixed(1)}x
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[2.5, 3.2, 4.0, 5.0].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setTargetRoas(val)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        targetRoas === val
                          ? 'bg-electric-600 text-white shadow-glow-sm'
                          : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {val.toFixed(1)}x ROAS
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Projected Output Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-navy-950/90 border border-slate-700/80 p-6 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Projected Gross Pipeline / Sales
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gradient-electric">
                    ${estimatedRevenue.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Gross Gain Over Ad Spend</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">
                      +${estimatedProfitGain.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Est. Conversions / Orders</span>
                    <span className="text-base font-bold text-electric-400 font-mono">
                      ~{estimatedOrders.toLocaleString()} units
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-normal">
                  * Projections illustrate expected revenue ranges based on optimized conversion funnel benchmark rates and targeted audience reach.
                </div>

                <button
                  onClick={() => onPlanWithBudget(budget, targetRoas)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-electric-600 hover:bg-blue-600 shadow-glow-sm transition-all"
                >
                  <span>Lock in This Strategy Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
