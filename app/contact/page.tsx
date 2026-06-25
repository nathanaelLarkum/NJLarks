import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NJLarks to start a project, request a free demo, or ask about services.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-light1 dark:bg-dark1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                Get in touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-fore mb-4">
                Start a project
              </h1>
              <p className="text-muted leading-relaxed mb-8">
                Fill in the form and I&apos;ll get back to you within 24 hours with a clear plan and pricing. No fluff.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:njlarks@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted hover:text-fore transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-light2 dark:bg-dark3 border border-border flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  njlarks@gmail.com
                </a>
                <a
                  href="/ask"
                  className="flex items-center gap-3 text-sm text-muted hover:text-fore transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-light2 dark:bg-dark3 border border-border flex items-center justify-center">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  Just have a question? Use the Ask form
                </a>
              </div>

              <div className="mt-10 p-5 rounded-xl border border-border bg-light2 dark:bg-dark2">
                <p className="text-xs font-semibold text-fore mb-1">Response time</p>
                <p className="text-sm text-muted">Usually within 24 hours on weekdays.</p>
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
