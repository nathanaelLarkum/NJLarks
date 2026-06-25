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
  title: "NJLarks — Full-Stack Software Engineer",
  description:
    "NJLarks builds fast, modern websites and custom software. From £100 starter sites to enterprise SaaS — see your website before you pay a penny.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyMe />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
