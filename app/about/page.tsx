import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, LayoutDashboard, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NJLarks — a full-stack software engineer building modern websites, SaaS platforms, and custom software for businesses.",
};

const stack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "OpenAI",
  "Netlify",
  "Vercel",
  "Framer Motion",
  "shadcn/ui",
];

const builds = [
  { icon: Globe, label: "Lead generation & local business websites" },
  { icon: LayoutDashboard, label: "Admin dashboards & internal tools" },
  { icon: Cpu, label: "Enterprise SaaS applications" },
  { icon: Code2, label: "AI-powered integrations" },
  { icon: Target, label: "Customer portals & booking systems" },
  { icon: Lightbulb, label: "Stripe payment & subscription systems" },
];

const philosophyPoints = [
  {
    title: "Simplicity first",
    body: "Complex problems deserve elegant solutions. I choose the simplest approach that fully solves the problem — no over-engineering, no unnecessary dependencies.",
  },
  {
    title: "Performance is a feature",
    body: "Every millisecond matters. Fast sites rank better, convert better, and feel better. Performance is baked in from line one, not bolted on at the end.",
  },
  {
    title: "Ship, then iterate",
    body: "A live imperfect product beats a perfect product in development. I get things in front of real users quickly, then refine based on what the data says.",
  },
  {
    title: "Honest timelines",
    body: "I tell you what's achievable and when. If something is going to take longer, you'll know before it affects you — not after.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-light1 dark:bg-dark1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fore mb-6">
              Hi, I&apos;m the developer behind NJLarks.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-4">
              I&apos;m a full-stack software engineer with a focus on building clean, modern software that helps businesses grow. I&apos;ve worked across every tier of the stack — from pixel-perfect front ends to production-grade backend systems.
            </p>
            <p className="text-muted leading-relaxed">
              NJLarks started as a way to make quality web development accessible to small local businesses. It&apos;s grown into a full-service practice covering everything from £100 starter sites to complex enterprise applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light2 dark:bg-dark2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-fore mb-8">What I build</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {builds.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-light1 dark:bg-dark3"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-fore">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light1 dark:bg-dark1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-fore mb-8">Development philosophy</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophyPoints.map((point) => (
              <div key={point.title}>
                <h3 className="font-semibold text-fore mb-2">{point.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light2 dark:bg-dark2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-fore mb-6">Technology stack</h2>
          <p className="text-muted mb-8">
            I work with a focused set of modern, production-proven tools. No switching stacks every six months — mastery over novelty.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-3 py-1.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light1 dark:bg-dark1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-fore mb-6">Working process</h2>
          <div className="prose prose-sm max-w-none text-muted space-y-4">
            <p>
              Every project starts with a conversation. I want to understand what you&apos;re building, who it&apos;s for, and what success looks like. From there I&apos;ll give you an honest assessment of scope, timeline, and cost.
            </p>
            <p>
              For smaller projects, I often move straight to building a working demo — you&apos;ll see the real product faster than you&apos;d expect. For larger builds, we&apos;ll agree milestones so you always know what&apos;s coming next.
            </p>
            <p>
              After launch, I stick around. Whether you need content updates, new features, or something breaks — I&apos;m reachable and responsive.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                Work with me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
