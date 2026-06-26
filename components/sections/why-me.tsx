"use client";

import { Zap, ShieldCheck, MessageSquare, TrendingUp, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Fast delivery",
    description: "Starter sites in days. Business sites in 2–4 weeks. No lengthy discovery phases for straightforward projects.",
  },
  {
    icon: ShieldCheck,
    title: "See it before you pay",
    description: "For small business sites — I build the demo first. You see the real product before committing a penny.",
  },
  {
    icon: TrendingUp,
    title: "Built to perform",
    description: "95+ Lighthouse scores. Fast load times. SEO-ready from day one. Performance is non-negotiable.",
  },
  {
    icon: MessageSquare,
    title: "Straight communication",
    description: "Clear timelines, honest pricing, direct updates. No project management overhead or account managers.",
  },
  {
    icon: Sparkles,
    title: "Production-grade stack",
    description: "Next.js 15, TypeScript, Supabase, Stripe — the same stack used by leading software companies.",
  },
  {
    icon: Clock,
    title: "Available after launch",
    description: "Updates, new features, and ongoing support don't require raising a ticket or waiting in a queue.",
  },
];

export function WhyMe() {
  return (
    <section className="py-24 md:py-32 bg-dark2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              The difference
            </p>
            <h2 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
              Why work with NJLarks
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              Independent studios move faster, communicate better, and invest more in every project than large agencies. This is what you get from a senior engineer who cares about the outcome.
            </p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center mt-0.5">
                    <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-light1 text-sm mb-1">{reason.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
