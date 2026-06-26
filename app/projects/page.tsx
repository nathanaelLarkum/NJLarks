import type { Metadata } from "next";
import { ExternalLink, Calendar, Building2, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of websites and software built by NJLarks for businesses across the UK.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-16 bg-dark1 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h1 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}>
              Work
            </h1>
            <p className="text-muted leading-relaxed">
              Every project below is live, delivered to a real client, and running in production. Built to perform from day one.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-5">Featured projects</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {featured.map((project, i) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-light3/10 bg-dark2 overflow-hidden hover:border-accent/25 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(163,196,188,0.06)] hover:-translate-y-1"
                >
                  <div className={cn("relative h-40 bg-gradient-to-br overflow-hidden", project.gradient)}>
                    <div className="absolute inset-0 hero-grid opacity-25" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div>
                        <span className="text-[10px] text-accent/70 uppercase tracking-wider">{project.category}</span>
                        <p className="font-heading font-bold text-light1/90 text-sm">{project.name}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-dark1/70 backdrop-blur-sm border border-light3/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-3 w-3 text-accent" />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2.5 text-[10px] text-muted">
                      <span className="flex items-center gap-1"><Building2 className="h-3 w-3" />{project.clientType}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{project.completedDate}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-dark3/50 border border-light3/6 text-light2/60">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-5">All projects</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rest.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-xl border border-light3/8 bg-dark2 p-4 hover:border-accent/20 hover:bg-dark2/80 transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-accent/70 uppercase tracking-wide">{project.category}</span>
                    </div>
                    <p className="font-heading font-semibold text-light1 text-sm mb-1">{project.name}</p>
                    <p className="text-[10px] text-muted leading-relaxed">{project.description}</p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-accent/15 bg-accent/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-semibold text-light1 mb-1">Want your business here?</p>
              <p className="text-xs text-muted">I build a free demo first — you only commit if you love it.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-dark1 text-sm font-semibold hover:bg-light3 transition-colors flex-shrink-0"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
