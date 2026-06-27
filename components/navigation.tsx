"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { m, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dark1/80 backdrop-blur-xl border-b border-light3/10 shadow-[0_1px_0_rgba(163,196,188,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="sm" />

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-light1 hover:bg-light1/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all duration-200 group"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-light1 hover:bg-light1/5 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-dark1/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-dark2 border-l border-light3/10 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-light3/10">
                <Logo size="sm" />
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-light1 hover:bg-light1/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        pathname === link.href
                          ? "text-accent bg-accent/10 border border-accent/15"
                          : "text-light2 hover:text-light1 hover:bg-light1/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </m.div>
                ))}
              </nav>

              <div className="p-4 border-t border-light3/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-dark1 text-sm font-semibold hover:bg-light3 transition-colors"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ask"
                  className="flex items-center justify-center w-full py-3 rounded-xl text-muted text-sm hover:text-light1 transition-colors mt-2"
                >
                  Ask a quick question
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
