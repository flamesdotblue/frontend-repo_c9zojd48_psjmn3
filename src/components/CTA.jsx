import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="w-full bg-neutral-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-black p-[1px]">
          <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),rgba(0,0,0,0.2))] p-8 sm:p-12">
            <div className="grid items-center gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">Start tracking with FitSnap</h3>
                <p className="mt-3 max-w-md text-white/70">
                  Built for lifters and athletes who want fast, accurate nutrition tracking with a clean, dark interface.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                    aria-label="Download on the App Store"
                  >
                    <Apple size={18} />
                    App Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
                    aria-label="Get it on Google Play"
                  >
                    <PlayCircle size={18} />
                    Google Play
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-2xl font-semibold text-emerald-400">1,980</p>
                      <p className="mt-1 text-xs text-white/60">Calories today</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-2xl font-semibold text-emerald-400">132g</p>
                      <p className="mt-1 text-xs text-white/60">Protein</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-2xl font-semibold text-emerald-400">68%</p>
                      <p className="mt-1 text-xs text-white/60">Goal</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/80">Latest meal</p>
                    <div className="mt-1 flex items-center justify-between text-sm">
                      <span className="text-white/70">Grilled Chicken + Rice</span>
                      <span className="font-medium text-emerald-400">540 kcal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
