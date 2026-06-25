"use client";

import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  Search,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Starter Websites",
    price: "From £100",
    description:
      "Fast, mobile-ready single-page sites for small businesses. Perfect for takeaways, trades, trainers, and local services.",
    tags: ["HTML", "Tailwind", "SEO"],
    href: "/services#starter",
    featured: false,
  },
  {
    icon: LayoutDashboard,
    title: "Business Websites",
    price: "£600–£800+",
    description:
      "Multi-page Next.js websites with CMS, analytics, Netlify Forms, and performance optimisation. Built to convert.",
    tags: ["Next.js", "CMS", "Analytics"],
    href: "/services#business",
    featured: true,
  },
  {
    icon: Search,
    title: "Internet Presence",
    price: "Bespoke",
    description:
      "Get your business found online. Google Business Profile, social accounts, SEO foundations, and AI search visibility.",
    tags: ["SEO", "Google", "Branding"],
    href: "/services#presence",
    featured: false,
  },
  {
    icon: Cpu,
    title: "Custom Software",
    price: "Scoped",
    description:
      "Enterprise SaaS, admin dashboards, customer portals, AI integrations, Stripe payments, and internal tools.",
    tags: ["SaaS", "AI", "Stripe"],
    href: "/services#custom",
    featured: false,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-light2 dark:bg-dark2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fore">
              What I build
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.href} className="block h-full group">
                  <Card
                    className={`h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                      service.featured
                        ? "border-accent/50 bg-accent-muted dark:bg-accent-muted"
                        : ""
                    }`}
                  >
                    <CardContent className="p-5 h-full flex flex-col gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          service.featured
                            ? "bg-accent text-white"
                            : "bg-light3 dark:bg-dark3 text-muted"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-semibold text-fore text-sm">
                            {service.title}
                          </h3>
                          {service.featured && (
                            <Badge variant="default" className="text-[10px] px-1.5 py-0">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs font-medium text-accent mb-2">
                          {service.price}
                        </p>
                        <p className="text-xs text-muted leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
