import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, LayoutDashboard, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "NJLarks is a software studio built by a full-stack engineer focused on building clean, modern software that helps businesses grow.",
};

const builds = [
  { icon: Globe, label: "Lead generation & local business websites" },
  { icon: LayoutDashboard, label: "Admin dashboards & internal tooling" },
  { icon: Cpu, label: "Enterprise SaaS applications" },
  { icon: Code2, label: "AI-powered integrations & automations" },
  { icon: Target, label: "Customer portals & booking systems" },
  { icon: Lightbulb, label: "Stripe payment & subscription platforms" },
];

const philosophy = [
  {
    title: "Simplicity is the constraint",
    body: "Every dependency, abstraction, and line of code is a liability. I default to the simplest approach that solves the problem fully — and add complexity only when the data demands it.",
  },
  {
    title: "Performance is non-negotiable",
    body: "Every millisecond matters. Fast sites rank higher, convert better, and feel more trustworthy. Performance is designed in from the start, not optimised at the end.",
  },
  {
    title: "Ship and learn",
    body: "The best feedback comes from real users interacting with real software. I get working products in front of people quickly, then iterate based on what actually happens.",
  },
  {
    title: "Honest communication",
    body: "If a deadline is at risk, you hear about it before it matters. If an approach is wrong, I say so early. No surprises at the end of a project.",
  },
];

const stack = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
  "Supabase", "PostgreSQL", "Drizzle ORM", "Stripe",
  "OpenAI API", "Vercel AI SDK", "Netlify", "Vercel",
  "Framer Motion", "shadcn/ui", "Clerk", "n8n",
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-dark1 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">About</p>
            <h1 className="font-heading font-extrabold text-light1 text-balance mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}>
              A software studio built for results.
            </h1>
            <p className="text-muted leading-relaxed mb-4">
              NJLarks is a one-person software studio run by a full-stack engineer with experience across every tier of the stack — from pixel-perfect interfaces to production-grade backend systems, payment integrations, and AI tooling.
            </p>
            <p className="text-muted leading-relaxed">
              What started as a way to make quality web development accessible to small local businesses has grown into a full-service practice. Today that means anything from a £100 starter site to a complex SaaS platform — with the same attention to quality at every scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark2">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-heading font-bold text-light1 text-xl mb-8">What I build</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {builds.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-light3/8 bg-dark1">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-light2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark1">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-heading font-bold text-light1 text-xl mb-8">Development philosophy</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophy.map((point) => (
              <div key={point.title} className="rounded-xl border border-light3/8 bg-dark2 p-5">
                <h3 className="font-heading font-semibold text-light1 text-sm mb-2">{point.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark2">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-heading font-bold text-light1 text-xl mb-4">Technology stack</h2>
          <p className="text-muted text-sm mb-8 max-w-lg">
            A focused set of modern, production-proven tools — chosen for scalability, performance, and long-term maintainability.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-lg border border-light3/10 bg-dark1 text-light2/80">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark1">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="font-heading font-bold text-light1 text-xl mb-6">Working together</h2>
          <div className="max-w-2xl space-y-4 text-sm text-muted leading-relaxed mb-10">
            <p>
              Every engagement starts with clarity. Before any code is written, I want to understand the business goal, the users, and what good looks like. From there I&apos;ll give you an honest scope, a clear timeline, and a fixed price or a well-defined hourly rate.
            </p>
            <p>
              For smaller projects, I often move straight to building — a working prototype in days rather than weeks of back-and-forth. For larger builds, I break work into milestones so progress is always visible.
            </p>
            <p>
              After launch, I&apos;m available. New features, content updates, or something unexpected — you can reach me directly, not through a support system.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent text-dark1 text-sm font-semibold hover:bg-light3 hover:shadow-[0_0_24px_rgba(163,196,188,0.3)] transition-all group"
          >
            Work with me
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
