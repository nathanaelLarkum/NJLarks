"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah T.",
    role: "Owner",
    business: "Brick & Bean Coffee",
    quote: "The website was live in days and looked more professional than businesses that have been around for years. Customers notice it.",
    stars: 5,
  },
  {
    name: "Mohammed A.",
    role: "Proprietor",
    business: "Hong Kong Kitchen",
    quote: "I saw the demo before committing and it looked exactly like what I wanted. Straightforward process, great result.",
    stars: 5,
  },
  {
    name: "James W.",
    role: "Owner",
    business: "Cowley Fish Bar",
    quote: "I always thought a proper website was out of reach. It wasn't. It's brought in new customers I wouldn't have reached otherwise.",
    stars: 5,
  },
  {
    name: "Lisa P.",
    role: "Director",
    business: "Sunshine Ibstock",
    quote: "Clear pricing, no jargon, delivered on time. Exactly what I needed. I refer NJLarks to other business owners regularly.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-dark1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-heading font-extrabold text-light1 text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
            What clients say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-light3/8 bg-dark2 p-6 hover:border-accent/15 transition-colors"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-light1/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-light3/8">
                <div className="w-8 h-8 rounded-full bg-dark3 border border-light3/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-accent">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-light1">{t.name}</p>
                  <p className="text-[10px] text-muted">{t.role} · {t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
