"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";

export function FAQ() {
  return (
    <section className="py-24 bg-light2 dark:bg-dark2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-3">
            Common questions
          </h2>
          <p className="text-muted">
            Can&apos;t find the answer? Use the{" "}
            <a href="/ask" className="text-accent hover:underline">
              Ask a Question
            </a>{" "}
            form.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
