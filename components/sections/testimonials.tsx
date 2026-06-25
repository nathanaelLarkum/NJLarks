"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah T.",
    business: "Brick & Bean Coffee",
    quote:
      "The website was done in days and looked incredible. Customers keep telling me how professional it looks. Couldn't be happier.",
    stars: 5,
  },
  {
    name: "Mohammed A.",
    business: "Hong Kong Kitchen",
    quote:
      "I saw the demo before committing and it was exactly what I wanted. The process was easy and the result speaks for itself.",
    stars: 5,
  },
  {
    name: "James W.",
    business: "Cowley Fish Bar",
    quote:
      "Getting a proper website felt out of reach before this. Now I have one that actually brings in customers. Great value.",
    stars: 5,
  },
  {
    name: "Lisa P.",
    business: "Sunshine Ibstock",
    quote:
      "No technical jargon, no confusion. Just a great website delivered on time. Highly recommend to any small business.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-light1 dark:bg-dark1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore mb-3">
            What clients say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-light2 dark:bg-dark2 p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-fore leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-fore">{t.name}</p>
                <p className="text-xs text-muted">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
