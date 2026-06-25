"use client";

import { Zap, ShieldCheck, MessageSquare, TrendingUp, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Delivered fast",
    description: "Starter sites in days. Business sites in weeks. No unnecessary back-and-forth.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-free for small businesses",
    description: "See your website before you pay a penny. No commitment required.",
  },
  {
    icon: TrendingUp,
    title: "Built to perform",
    description: "Fast load times, mobile-first design, and SEO foundations built in from day one.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "No jargon. No disappearing acts. You'll always know where things stand.",
  },
  {
    icon: Sparkles,
    title: "Modern tech stack",
    description: "Next.js 15, TypeScript, Tailwind — production-grade tools for every project size.",
  },
  {
    icon: Clock,
    title: "Long-term support",
    description: "I don't disappear after launch. Updates, hosting, and support are available when needed.",
  },
];

export function WhyMe() {
  return (
    <section className="py-24 bg-light2 dark:bg-dark2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Why NJLarks
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-3">
            Simple. Modern. Reliable.
          </h2>
          <p className="text-muted leading-relaxed">
            I care about the final product as much as you do. Every project is built with attention to detail and a focus on real-world results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center mt-0.5">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-fore text-sm mb-1">{reason.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
