import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WhyMe } from "@/components/sections/why-me";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "NJLarks — Software Studio",
  description:
    "From affordable business websites to custom SaaS platforms, admin dashboards, payment systems and AI-powered tools.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <WhyMe />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
