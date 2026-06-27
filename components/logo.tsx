import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 30, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="36" height="36" rx="8" fill="url(#logo-gradient)" />
        <path
          d="M7 9L13 9L21 21.5H21V9H27V27H21L13 14.5H13V27H7V9Z"
          style={{ fill: "var(--light1)" }}
          fillOpacity="0.95"
        />
        <circle cx="27" cy="27" r="2.5" style={{ fill: "var(--accent)" }} fillOpacity="0.7" />
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop style={{ stopColor: "var(--dark3)" }} />
            <stop offset="1" style={{ stopColor: "var(--dark1)" }} />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className={cn("font-heading font-bold tracking-tight", s.text)}>
          <span className="text-light1">NJ</span>
          <span className="text-accent">Larks</span>
        </span>
      )}
    </Link>
  );
}
