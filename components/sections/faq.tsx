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
    <section className="py-24 md:py-32 bg-dark1">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
            Common questions
          </h2>
          <p className="text-muted text-sm">
            Something else?{" "}
            <a href="/ask" className="text-accent hover:text-light3 transition-colors">
              Ask directly.
            </a>
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
