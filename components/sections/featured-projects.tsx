"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/data/projects";
import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-light1 dark:bg-dark1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore">
              Recent work
            </h2>
            <p className="text-muted mt-2 max-w-md">
              A selection of live sites built for local businesses across the UK.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-light1 dark:bg-dark2 p-5 hover:border-accent/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <Badge variant="accent" className="text-[10px] mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-fore">{project.name}</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-0.5" />
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
