import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Starter Websites", href: "/services#starter" },
    { label: "Business Websites", href: "/services#business" },
    { label: "Internet Presence", href: "/services#presence" },
    { label: "Custom Software", href: "/services#custom" },
  ],
  Connect: [
    { label: "Ask a Question", href: "/ask" },
    { label: "njlarks@gmail.com", href: "mailto:njlarks@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-light2 dark:bg-dark2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo size="sm" className="mb-4" />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full-stack developer building fast, modern websites and software for businesses of all sizes.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:njlarks@gmail.com"
                className="p-2 rounded-lg border border-border hover:bg-light3 dark:hover:bg-dark3 text-muted hover:text-fore transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-light3 dark:hover:bg-dark3 text-muted hover:text-fore transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-light3 dark:hover:bg-dark3 text-muted hover:text-fore transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-fore uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-fore transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} NJLarks. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js · Tailwind CSS · Deployed on Netlify
          </p>
        </div>
      </div>
    </footer>
  );
}
