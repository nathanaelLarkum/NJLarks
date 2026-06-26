import type { Metadata } from "next";
import { AskForm } from "@/components/ask-form";

export const metadata: Metadata = {
  title: "Ask a Question",
  description: "Have a quick question for NJLarks? Ask without filling in a full project brief.",
};

export default function AskPage() {
  return (
    <div className="pt-16 bg-dark1 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-lg mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Quick enquiry</p>
            <h1 className="font-heading font-extrabold text-light1 text-balance mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "-0.04em" }}>
              Ask a question
            </h1>
            <p className="text-sm text-muted">
              No project brief needed. Just ask — I&apos;ll get back to you quickly.
            </p>
          </div>
          <AskForm />
        </div>
      </section>
    </div>
  );
}
