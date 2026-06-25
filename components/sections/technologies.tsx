"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Netlify", category: "Hosting" },
  { name: "Supabase", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "OpenAI", category: "AI" },
  { name: "Framer Motion", category: "Animation" },
  { name: "shadcn/ui", category: "Components" },
  { name: "Vercel", category: "Deployment" },
];

export function Technologies() {
  return (
    <section className="py-24 bg-light2 dark:bg-dark2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-3">
            Tools I work with
          </h2>
          <p className="text-muted">
            Production-grade technologies chosen for performance, developer experience, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center justify-between rounded-xl border border-border bg-light1 dark:bg-dark3 px-4 py-3 hover:border-accent/50 transition-colors group"
            >
              <span className="text-sm font-medium text-fore">{tech.name}</span>
              <span className="text-[10px] text-muted bg-light2 dark:bg-dark2 px-1.5 py-0.5 rounded">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
