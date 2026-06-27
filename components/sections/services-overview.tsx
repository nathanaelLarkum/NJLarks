"use client";

import Link from "next/link";
import { Globe, LayoutDashboard, Search, Cpu, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Starter Websites",
    price: "From £100",
    description: "Fast, professional single-page sites for local businesses that need to get online with no budget risk.",
    tags: ["HTML", "Tailwind", "SEO"],
    href: "/services#starter",
  },
  {
    icon: LayoutDashboard,
    title: "Business Websites",
    price: "£600 – £800+",
    description: "Multi-page Next.js websites with CMS, analytics, forms, and performance optimised to convert.",
    tags: ["Next.js", "CMS", "Analytics"],
    href: "/services#business",
    featured: true,
  },
  {
    icon: Search,
    title: "Internet Presence",
    price: "Bespoke",
    description: "Complete digital setup — Google Business Profile, social accounts, SEO foundations, AI search visibility.",
    tags: ["SEO", "Google", "Branding"],
    href: "/services#presence",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    price: "Scoped",
    description: "Enterprise SaaS, admin dashboards, customer portals, AI integrations, Stripe payment systems.",
    tags: ["SaaS", "AI", "Stripe"],
    href: "/services#custom",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-dark2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Services
            </p>
            <h2 className="font-heading font-extrabold text-light1 text-balance" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}>
              What I build
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-light3 transition-colors group flex-shrink-0"
          >
            All services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group block h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1",
                    service.featured
                      ? "border-accent/25 bg-accent/6 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(163,196,188,0.1)]"
                      : "border-light3/8 bg-dark1 hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center mb-4",
                    service.featured ? "bg-accent/15 text-accent" : "bg-dark3/40 text-light2"
                  )}>
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </div>

                  <p className="text-xs font-semibold text-accent mb-1">{service.price}</p>
                  <h3 className="font-heading font-semibold text-light1 text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-dark3/50 border border-light3/6 text-light2/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
