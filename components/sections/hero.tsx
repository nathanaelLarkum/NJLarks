"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Clock } from "lucide-react";
import { m } from "framer-motion";

const trustIndicators = [
  "Full Stack Engineer",
  "Next.js Specialist",
  "SaaS & AI Development",
  "UK Based",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark1">
      <div className="absolute inset-0 hero-grid" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-dark3/30 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-dark2/40 blur-[160px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* Floating card 1 — Lighthouse performance */}
        <div className="absolute top-20 right-10 md:right-24 w-56 rounded-2xl border border-accent/15 bg-dark2/80 rotate-12 animate-float overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-accent/12 flex items-center justify-center">
                <Zap className="h-3 w-3 text-accent" strokeWidth={2} />
              </div>
              <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Performance</span>
            </div>
            <div className="text-[2rem] font-extrabold text-light1 font-heading leading-none mb-0.5">95+</div>
            <div className="text-[10px] text-muted mb-4">Lighthouse Score</div>
            <div className="space-y-2">
              {[
                { label: "Speed", value: 98, w: "98%" },
                { label: "SEO", value: 100, w: "100%" },
                { label: "Access.", value: 96, w: "96%" },
              ].map(({ label, value, w }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[9px] text-muted">{label}</span>
                    <span className="text-[9px] font-semibold text-light2">{value}</span>
                  </div>
                  <div className="h-[3px] bg-dark3/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-light3 rounded-full" style={{ width: w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card 2 — Recent delivery with mini site mockup */}
        <div className="absolute bottom-32 left-8 md:left-16 w-40 rounded-xl border border-light2/10 bg-dark2/80 rotate-[-8deg] animate-float-delayed overflow-hidden">
          <div className="p-3.5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <CheckCircle2 className="h-3 w-3 text-accent" />
              <span className="text-[9px] font-semibold text-accent">Just Delivered</span>
            </div>
            <div className="w-full h-[70px] rounded-lg bg-dark1 overflow-hidden mb-2.5 border border-light3/8">
              <div className="h-[13px] bg-dark3/60 border-b border-light3/8 flex items-center gap-1 px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="flex-1 h-[3px] rounded-full bg-light2/15 mx-1" />
              </div>
              <div className="p-1.5 space-y-1">
                <div className="w-full h-1.5 rounded-sm bg-light2/12" />
                <div className="w-3/4 h-1.5 rounded-sm bg-light2/8" />
                <div className="flex gap-1 mt-1.5">
                  <div className="w-1/2 h-5 rounded-sm bg-dark3/70" />
                  <div className="w-1/2 h-5 rounded-sm bg-dark3/40" />
                </div>
              </div>
            </div>
            <div className="text-[9px] text-muted">
              Live in <span className="text-light1 font-semibold">3 days</span> · 10+ delivered
            </div>
          </div>
        </div>

        {/* Floating card 3 — Response time badge */}
        <div className="absolute top-1/2 right-4 md:right-8 w-[84px] rounded-xl border border-accent/12 bg-dark2/75 rotate-6 animate-float-slow overflow-hidden">
          <div className="p-3 text-center">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="text-[17px] font-extrabold text-light1 font-heading leading-none">~4hr</div>
            <div className="text-[8px] text-muted mt-1 leading-tight">avg. reply<br />time</div>
          </div>
        </div>

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-32 text-center">
        <m.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/8 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-accent tracking-wider uppercase">
            Available for new projects
          </span>
        </m.div>

        <m.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading font-extrabold tracking-tight leading-[1.02] text-balance mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          <span className="text-light1">Software That Helps</span>
          <br />
          <span className="gradient-text-hero">Businesses Move Faster.</span>
        </m.h1>

        <m.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          From affordable business websites to custom SaaS platforms, admin dashboards,
          payment systems and AI-powered tools.
        </m.p>

        <m.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-dark1 text-sm font-semibold transition-all duration-300 hover:bg-light3 hover:shadow-[0_0_30px_rgba(163,196,188,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-light1/10 text-light2 text-sm font-medium transition-all duration-300 hover:border-accent/30 hover:text-light1 hover:bg-light1/5"
          >
            View Work
          </Link>
        </m.div>

        <m.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustIndicators.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
              <span className="text-xs text-muted">{item}</span>
            </div>
          ))}
        </m.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/30" />
      </div>
    </section>
  );
}
