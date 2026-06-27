"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight, Calendar, Building2 } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-light3/10 bg-dark2 overflow-hidden hover:border-accent/25 transition-all duration-400 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(163,196,188,0.06)] hover:-translate-y-1"
      >
        <div className={cn("relative h-44 bg-gradient-to-br overflow-hidden", project.gradient)}>
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="font-heading font-bold text-light1/80 text-lg mb-1">{project.name}</p>
              <p className="text-xs text-accent/70 uppercase tracking-wider">{project.category}</p>
            </div>
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-dark1/60 backdrop-blur-sm border border-light3/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="h-3.5 w-3.5 text-accent" />
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3 mb-3">
            <h3 className="font-heading font-semibold text-light1 text-base">{project.name}</h3>
          </div>

          <div className="flex items-center gap-4 mb-3 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <Building2 className="h-3 w-3" />
              <span>{project.clientType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>{project.completedDate}</span>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-dark3/60 border border-light3/8 text-light2/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </m.div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 bg-dark1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Selected Work
            </p>
            <h2 className="font-heading font-extrabold text-light1 text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
              Delivered for real clients
            </h2>
            <p className="text-muted mt-2 max-w-md text-sm leading-relaxed">
              Every project below is live, serving real customers, and built to a production standard.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-light3 transition-colors group flex-shrink-0"
          >
            All projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
