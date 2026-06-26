import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development services from NJLarks. Starter websites from £100, business websites, custom SaaS, AI integrations, and internet presence packages.",
};

const services = [
  {
    id: "starter",
    title: "Starter Websites",
    price: "From £100",
    timeline: "3–5 days",
    badge: "Risk-Free",
    description:
      "A professional, fast-loading website for businesses that need an online presence without a large budget. Built to the same standard as everything else — just scoped smaller.",
    for: ["Takeaways & restaurants", "Trades & contractors", "Personal trainers", "Local services", "Small companies"],
    deliverables: ["Fast single-page website", "Mobile responsive design", "Contact form", "SEO fundamentals", "Domain & hosting guidance"],
    featured: false,
  },
  {
    id: "business",
    title: "Business Websites",
    price: "£600 – £800+",
    timeline: "2–4 weeks",
    badge: "Most Popular",
    description:
      "A proper multi-page Next.js website built for performance, conversion, and growth. Every business that takes its online presence seriously should be building at this level.",
    for: ["Growing businesses", "Professional services", "Agencies & studios", "Companies needing a CMS"],
    deliverables: [
      "Next.js multi-page site",
      "CMS / content editing",
      "Netlify Forms",
      "Google Analytics",
      "Full SEO setup",
      "95+ Lighthouse performance",
      "Mobile-first, accessible",
    ],
    addons: [
      { label: "Admin dashboard", price: "£200–£400" },
      { label: "Stripe payments", price: "£200–£400" },
      { label: "Booking system", price: "POA" },
      { label: "AI features", price: "POA" },
    ],
    featured: true,
  },
  {
    id: "presence",
    title: "Internet Presence",
    price: "Bespoke",
    timeline: "1–2 weeks",
    badge: "For New Businesses",
    description:
      "For businesses starting from scratch or with a fragmented online presence. I set up and optimise every digital touchpoint so customers can find you wherever they look.",
    for: ["Brand new businesses", "Companies with no online presence", "Businesses being rebranded"],
    deliverables: [
      "Google Business Profile setup",
      "Social media account setup",
      "SEO foundations",
      "AI search visibility",
      "Online branding consistency",
    ],
    featured: false,
  },
  {
    id: "custom",
    title: "Custom Software",
    price: "Scoped per project",
    timeline: "Agreed per scope",
    badge: "Enterprise",
    description:
      "Full-scale software engineering for complex business problems. SaaS platforms, internal tools, AI integrations, payment systems — built properly with production architecture from day one.",
    for: ["SaaS startups", "Businesses needing internal tools", "Companies requiring AI or Stripe", "Complex workflow automation"],
    deliverables: [
      "Enterprise SaaS applications",
      "Admin dashboards",
      "Customer portals",
      "AI integrations",
      "Stripe payment systems",
      "Internal tools",
      "Business management systems",
    ],
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-dark1 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Services</p>
          <h1 className="font-heading font-extrabold text-light1 text-balance mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}>
            What I offer
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Clear pricing. Honest timelines. Production-quality work at every price point.
          </p>
        </div>
      </section>

      <div className="pb-24">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={i % 2 === 0 ? "py-16 bg-dark2" : "py-16 bg-dark1"}
          >
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-wider border border-accent/25 bg-accent/8 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-light1 text-2xl mb-2" style={{ letterSpacing: "-0.03em" }}>
                    {service.title}
                  </h2>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-xl font-bold text-accent font-heading">{service.price}</span>
                    <span className="text-xs text-muted border border-light3/10 px-2.5 py-1 rounded-full">{service.timeline}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-8">{service.description}</p>

                  <div className="mb-8">
                    <p className="text-[10px] font-semibold text-light1 uppercase tracking-wider mb-3">Best for</p>
                    <ul className="space-y-1.5">
                      {service.for.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-muted">
                          <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-dark1 text-sm font-semibold hover:bg-light3 hover:shadow-[0_0_24px_rgba(163,196,188,0.3)] transition-all group"
                  >
                    Get a quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="rounded-xl border border-light3/10 bg-dark1 p-5">
                    <p className="text-[10px] font-semibold text-light1 uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-xs text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.addons && (
                    <div className="rounded-xl border border-light3/10 bg-dark1 p-5">
                      <p className="text-[10px] font-semibold text-light1 uppercase tracking-wider mb-4">
                        Optional add-ons
                      </p>
                      <ul className="space-y-2.5">
                        {service.addons.map((addon) => (
                          <li key={addon.label} className="flex items-center justify-between">
                            <span className="text-xs text-muted">{addon.label}</span>
                            <span className="text-xs font-semibold text-accent">{addon.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
