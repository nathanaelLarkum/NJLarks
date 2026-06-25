import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light1 dark:bg-dark1">
      <div className="absolute inset-0 hero-grid opacity-[0.4] dark:opacity-[0.15]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent-muted text-accent text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Full-Stack Software Engineer
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          <span className="text-fore">I build software</span>
          <br />
          <span className="gradient-text">that drives results.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          From £100 starter sites to enterprise SaaS platforms — I design, build, and launch
          fast, modern software that helps businesses grow online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs text-muted">
          {[
            ["10+", "Projects Delivered"],
            ["4+", "Years Experience"],
            ["£100", "Starting From"],
            ["100%", "Satisfaction Rate"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-fore">{num}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
