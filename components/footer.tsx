import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Starter Websites", href: "/services#starter" },
    { label: "Business Websites", href: "/services#business" },
    { label: "Internet Presence", href: "/services#presence" },
    { label: "Custom Software", href: "/services#custom" },
  ],
  Connect: [
    { label: "Start a Project", href: "/contact" },
    { label: "Ask a Question", href: "/ask" },
    { label: "njlarks@gmail.com", href: "mailto:njlarks@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-light3/8 bg-dark1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo size="sm" className="mb-5" />
            <p className="text-xs text-muted leading-relaxed max-w-xs mb-6">
              A software studio building fast, modern applications for businesses of every size — from local shops to SaaS products.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="mailto:njlarks@gmail.com"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-light3/10 text-muted hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Email"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-light3/10 text-muted hover:text-accent hover:border-accent/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-light3/10 text-muted hover:text-accent hover:border-accent/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[10px] font-semibold text-light1 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted hover:text-light2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-light3/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted/60">
            © {new Date().getFullYear()} NJLarks. All rights reserved.
          </p>
          <p className="text-[11px] text-muted/40">
            Next.js · TypeScript · Tailwind · Netlify
          </p>
        </div>
      </div>
    </footer>
  );
}
