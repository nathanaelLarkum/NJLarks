import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 bg-light1 dark:bg-dark1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="rounded-2xl border border-border bg-light2 dark:bg-dark2 p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent-muted text-accent text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for new projects
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-4">
              Ready to build something great?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you need a simple website or a full custom software platform, 
              let&apos;s talk about what you need and find the right fit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ask">
                  <MessageSquare className="h-4 w-4" />
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
