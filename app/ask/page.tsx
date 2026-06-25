import type { Metadata } from "next";
import { AskForm } from "@/components/ask-form";

export const metadata: Metadata = {
  title: "Ask a Question",
  description:
    "Have a quick question for NJLarks? Ask without filling out a full project brief.",
};

export default function AskPage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-light1 dark:bg-dark1">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Quick enquiry
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-fore mb-4">
              Ask a question
            </h1>
            <p className="text-muted">
              No project brief needed. Just ask — I&apos;ll get back to you quickly.
            </p>
          </div>
          <AskForm />
        </div>
      </section>
    </div>
  );
}
