"use client";

import { m } from "framer-motion";

const techGroups = [
  {
    label: "Frontend",
    techs: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend & Database",
    techs: ["Supabase", "PostgreSQL", "Drizzle ORM", "Node.js", "REST & GraphQL"],
  },
  {
    label: "Payments & Auth",
    techs: ["Stripe", "Stripe Connect", "Clerk", "NextAuth", "JWT"],
  },
  {
    label: "AI & Automation",
    techs: ["OpenAI API", "Vercel AI SDK", "LangChain", "Webhooks", "n8n"],
  },
  {
    label: "Deployment",
    techs: ["Netlify", "Vercel", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    label: "UI & Design",
    techs: ["shadcn/ui", "Radix UI", "Lucide Icons", "Figma", "CSS Animations"],
  },
];

export function Technologies() {
  return (
    <section className="py-24 md:py-32 bg-dark2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Technology
          </p>
          <h2 className="font-heading font-extrabold text-light1 mb-4 text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
            The stack behind every build
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Production-grade tools used by the leading software companies — chosen for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techGroups.map((group, i) => (
            <m.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-light3/8 bg-dark1 p-5 hover:border-accent/15 transition-colors"
            >
              <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-3">
                {group.label}
              </p>
              <div className="flex flex-col gap-2">
                {group.techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2.5 text-sm text-light2/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    {tech}
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
