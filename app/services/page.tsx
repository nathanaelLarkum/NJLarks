import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and software development services from NJLarks. Starter websites from £100, business websites £600–£800+, custom software, and internet presence packages.",
};

const services = [
  {
    id: "starter",
    title: "Starter Websites",
    price: "From £100",
    timeline: "3–5 days",
    badge: "Most Accessible",
    description:
      "A professional, fast-loading website for businesses that need to get online quickly and affordably. Perfect for local businesses, sole traders, and anyone wanting a clean web presence without breaking the bank.",
    for: [
      "Takeaways & restaurants",
      "Trades & contractors",
      "Personal trainers",
      "Hobby businesses",
      "Local services",
      "Small companies",
    ],
    deliverables: [
      "Fast single-page website",
      "Mobile responsive design",
      "Contact form",
      "SEO basics (meta, titles, headings)",
      "Hosting guidance",
      "Domain registration advice",
    ],
    featured: false,
  },
  {
    id: "business",
    title: "Business Websites",
    price: "£600–£800+",
    timeline: "2–4 weeks",
    badge: "Most Popular",
    description:
      "A proper multi-page Next.js website built for performance, conversions, and long-term growth. Includes everything a serious business needs to compete online.",
    for: [
      "Growing businesses",
      "Professional services",
      "E-commerce brands",
      "Agencies & studios",
      "Companies needing a CMS",
    ],
    deliverables: [
      "Next.js multi-page website",
      "CMS / admin content editing",
      "Netlify Forms integration",
      "Google Analytics setup",
      "Full SEO optimisation",
      "Performance optimisation (95+ Lighthouse)",
      "Mobile & accessibility first",
    ],
    addons: [
      { label: "Admin dashboard", price: "£200–£400" },
      { label: "Stripe payments", price: "£200–£400" },
      { label: "Booking system", price: "POA" },
      { label: "Customer portal", price: "POA" },
      { label: "AI features", price: "POA" },
    ],
    featured: true,
  },
  {
    id: "presence",
    title: "Internet Presence Package",
    price: "Bespoke",
    timeline: "1–2 weeks",
    badge: "For New Businesses",
    description:
      "For businesses starting from scratch online. I set up and optimise your entire digital presence — from Google to social media — so customers can find you wherever they look.",
    for: [
      "Brand new businesses",
      "Businesses with no online presence",
      "Companies being rebranded",
      "Local businesses targeting Google Maps",
    ],
    deliverables: [
      "Google Business Profile setup & optimisation",
      "Social media account setup",
      "SEO foundations",
      "AI search visibility optimisation",
      "Online branding guidance",
      "Consistency audit across platforms",
    ],
    featured: false,
  },
  {
    id: "custom",
    title: "Custom Software",
    price: "Scoped per project",
    timeline: "Varies by scope",
    badge: "Enterprise",
    description:
      "Full-scale software engineering for complex business problems. From SaaS platforms to internal tools, AI integrations to payment systems — built properly, with production architecture from the start.",
    for: [
      "SaaS startups",
      "Businesses needing internal tools",
      "Companies with complex workflows",
      "Businesses requiring AI features",
      "Stripe subscription products",
    ],
    deliverables: [
      "Enterprise SaaS applications",
      "Admin dashboards & internal tools",
      "Customer portals",
      "AI integrations (OpenAI, etc.)",
      "Stripe payment & subscription systems",
      "Business management systems",
      "Lead generation platforms",
    ],
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-light1 dark:bg-dark1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fore mb-4">
            What I offer
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            From a simple local business website to a complex SaaS platform — clear pricing, honest timelines, and production-quality work every time.
          </p>
        </div>
      </section>

      <div className="pb-24 space-y-0">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={i % 2 === 0 ? "py-20 bg-light2 dark:bg-dark2" : "py-20 bg-light1 dark:bg-dark1"}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant={service.featured ? "default" : "accent"}
                      className="text-xs"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-fore mb-2">
                    {service.title}
                  </h2>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-2xl font-bold text-accent">
                      {service.price}
                    </span>
                    <span className="text-sm text-muted border border-border px-2 py-0.5 rounded-full">
                      {service.timeline}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-fore uppercase tracking-wider mb-3">
                      Best for
                    </p>
                    <ul className="space-y-1.5">
                      {service.for.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Get a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-light1 dark:bg-dark3 p-6">
                    <p className="text-xs font-semibold text-fore uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.addons && (
                    <div className="rounded-xl border border-border bg-light1 dark:bg-dark3 p-6">
                      <p className="text-xs font-semibold text-fore uppercase tracking-wider mb-4">
                        Optional add-ons
                      </p>
                      <ul className="space-y-2.5">
                        {service.addons.map((addon) => (
                          <li
                            key={addon.label}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm text-muted">{addon.label}</span>
                            <span className="text-xs font-semibold text-accent">
                              {addon.price}
                            </span>
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
