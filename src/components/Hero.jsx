import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles size={16} className="text-emerald-400" />
          <span className="text-xs tracking-wide text-white/80">AI-powered food tracking</span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          FitSnap
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Snap meals. Track macros. Hit goals.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          Capture your meals and let AI estimate calories, protein, carbs, and fats. Stay on track with a clean, gym‑themed experience.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            <Camera size={18} />
            Try the demo
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn more
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
