import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 bg-dark2">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="relative rounded-2xl border border-light3/10 bg-dark1 p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-dark3/20 blur-[80px] rounded-full" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium">Available for new projects</span>
            </div>

            <h2 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
              Ready to build something that matters?
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto mb-10 leading-relaxed">
              Whether it&apos;s a simple website or a complex software platform — let&apos;s discuss your project and find the right path forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-dark1 text-sm font-semibold transition-all duration-300 hover:bg-light3 hover:shadow-[0_0_30px_rgba(163,196,188,0.35)] hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/ask"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-light1/10 text-light2 text-sm font-medium transition-all duration-300 hover:border-accent/30 hover:text-light1 hover:bg-light1/5"
              >
                <MessageSquare className="h-4 w-4" />
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
