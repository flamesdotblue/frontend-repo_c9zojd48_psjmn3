import React from 'react';
import { Camera, Image, Brain, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Snap or Upload',
    desc: 'Use your camera or gallery to capture meals in seconds with a smooth, mobile-like experience.',
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    desc: 'Recognizes dishes and estimates calories, protein, carbs, and fats per item.',
  },
  {
    icon: BarChart,
    title: 'Macro Tracking',
    desc: 'Automatically aggregates daily totals and visualizes your progress.',
  },
  {
    icon: Image,
    title: 'Meal Logging',
    desc: 'Categorize by breakfast, lunch, dinner, or snacks, and review your history.',
  },
  {
    icon: Shield,
    title: 'Private by Design',
    desc: 'Your data stays secure. Export or sync when you want.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <h2 className="text-3xl font-semibold md:text-4xl">Everything you need to track smarter</h2>
          <p className="mt-3 text-white/70">
            FitSnap blends powerful AI with a focused, gym‑ready interface so you can stay consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Icon size={20} />
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

export default Features;
