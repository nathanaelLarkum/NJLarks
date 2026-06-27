"use client";

import { m } from "framer-motion";
import { Search, Map, Paintbrush, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Understanding your business, goals, users, and what success looks like before a single line of code is written.",
  },
  {
    icon: Map,
    step: "02",
    title: "Planning",
    description: "Defining scope, architecture, and timelines. No surprises — you know exactly what's being built and when.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Design",
    description: "A working prototype tailored to your brand. You see the real product, not wireframes or mood boards.",
  },
  {
    icon: Code2,
    step: "04",
    title: "Development",
    description: "Clean, typed, tested code. Mobile-first, fast by default, and built for maintainability from day one.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description: "Domain, hosting, SSL, performance checks, and go-live. Everything handled so you can focus on your business.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Support",
    description: "Post-launch monitoring, content updates, and new features — available on demand, not locked in a retainer.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-dark1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="font-heading font-extrabold text-light1 mb-4 text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
            From idea to production
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            A lean, collaborative process designed to deliver high quality software without unnecessary friction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-light3/8 bg-dark2 p-6 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-dark3/60 border border-light3/8 flex items-center justify-center group-hover:border-accent/20 transition-colors">
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted/60 mb-1 block">{step.step}</span>
                    <h3 className="font-heading font-semibold text-light1 text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
