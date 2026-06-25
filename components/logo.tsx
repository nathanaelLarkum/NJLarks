import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
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
        <rect width="36" height="36" rx="8" fill="var(--accent)" />
        <path
          d="M8 10L14 10L22 22H22V10H28V26H22L14 14H14V26H8V10Z"
          fill="white"
          fillOpacity="0.95"
        />
        <circle cx="28" cy="26" r="2.5" fill="white" fillOpacity="0.5" />
      </svg>
      {showText && (
        <span className={cn("font-bold tracking-tight", s.text)}>
          <span className="text-fore">NJ</span>
          <span className="text-accent">Larks</span>
        </span>
      )}
    </Link>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="36" rx="8" fill="var(--accent)" />
      <path
        d="M8 10L14 10L22 22H22V10H28V26H22L14 14H14V26H8V10Z"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="28" cy="26" r="2.5" fill="white" fillOpacity="0.5" />
    </svg>
  );
}
