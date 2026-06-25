import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of websites and software built by NJLarks for local businesses across the UK. Takeaways, pubs, cafes, and more.",
};

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-light1 dark:bg-dark1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-4">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fore mb-4">
              Projects
            </h1>
            <p className="text-muted leading-relaxed">
              Live websites built for real businesses. Every one of these was delivered to a paying client and is running in production.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 mt-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-light2 dark:bg-dark3 text-muted cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-light2 dark:bg-dark2 p-5 hover:border-accent/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <Badge variant="accent" className="text-[10px] mb-2">
                      {project.category}
                    </Badge>
                    <h2 className="font-semibold text-fore">{project.name}</h2>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-5" />
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-accent/30 bg-accent-muted p-8 text-center">
            <h2 className="font-semibold text-fore mb-2">Want to be next?</h2>
            <p className="text-sm text-muted mb-4">
              Your business could have a site like these. Get in touch and I&apos;ll build you a free demo.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Start a project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
