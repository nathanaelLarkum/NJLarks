import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NJLarks to start a project or request a quote.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 bg-dark1 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Contact</p>
              <h1 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em" }}>
                Start a project
              </h1>
              <p className="text-sm text-muted leading-relaxed mb-10">
                Fill in the form and I&apos;ll respond within 24 hours with a clear plan, honest pricing, and no obligation.
              </p>

              <div className="space-y-3 mb-10">
                <a
                  href="mailto:njlarks@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl border border-light3/10 bg-dark2 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <Mail className="h-3.5 w-3.5 text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm text-muted group-hover:text-light2 transition-colors">njlarks@gmail.com</span>
                </a>
                <a
                  href="/ask"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl border border-light3/10 bg-dark2 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <MessageSquare className="h-3.5 w-3.5 text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm text-muted group-hover:text-light2 transition-colors">Quick question? Use the Ask form</span>
                </a>
              </div>

              <div className="rounded-xl border border-light3/10 bg-dark2 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <p className="text-xs font-semibold text-light1">Response time</p>
                </div>
                <p className="text-xs text-muted">Usually within 24 hours on weekdays. Often much sooner.</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
