"use client";

import { motion } from "framer-motion";
import { Search, Paintbrush, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We start with a conversation — understanding your business, goals, and what you need from your website or software.",
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "Design",
    description:
      "I design and build a fully working prototype tailored to your brand. You see the real thing, not wireframes.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description:
      "Clean, modern code. Mobile-first. Fast by default. Every build is production-ready from the ground up.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description:
      "Domain setup, hosting configuration, SSL, and go-live — I handle everything so you can focus on your business.",
  },
  {
    icon: Headphones,
    step: "05",
    title: "Support",
    description:
      "Post-launch support, content updates, and ongoing maintenance available whenever you need it.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-light1 dark:bg-dark1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-3">
            The process
          </h2>
          <p className="text-muted">
            A clear, collaborative workflow designed to get your project from idea to live with minimal friction.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-border bg-light1 dark:bg-dark2 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted mb-1">{step.step}</span>
                  <h3 className="font-semibold text-fore mb-2">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
