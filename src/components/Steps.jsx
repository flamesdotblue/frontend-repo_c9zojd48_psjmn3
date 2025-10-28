import React from 'react';
import { LogIn, Camera, Brain, Save } from 'lucide-react';

const steps = [
  {
    icon: LogIn,
    title: 'Sign in',
    desc: 'Create your profile and set calorie and protein goals to personalize your journey.',
  },
  {
    icon: Camera,
    title: 'Snap a meal',
    desc: 'Open the camera or pick from gallery. One tap to capture.',
  },
  {
    icon: Brain,
    title: 'AI analyzes',
    desc: 'Detects the dish and estimates macros and calories per item.',
  },
  {
    icon: Save,
    title: 'Log & track',
    desc: 'Save to breakfast, lunch, dinner, or snacks and watch your progress update.',
  },
];

const Steps = () => {
  return (
    <section id="how-it-works" className="w-full bg-black py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From snap to stats in seconds.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-semibold text-white/60">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
