import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light1: "#D2D6D4",
        light2: "#A3B1B0",
        light3: "#A3C4BC",
        dark1: "#181C22",
        dark2: "#23293A",
        dark3: "#413C58",
        accent: "#A3C4BC",
        "accent-dark": "#413C58",
        "accent-muted": "rgba(163,196,188,0.12)",
        fore: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero-sm": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "hero-md": ["clamp(3rem, 8vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "800" }],
        "hero-lg": ["clamp(3.5rem, 10vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.05em", fontWeight: "800" }],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #413C58, #181C22)",
        "gradient-accent": "linear-gradient(135deg, #A3C4BC, #D2D6D4)",
        "gradient-card": "linear-gradient(135deg, rgba(35,41,58,0.8), rgba(24,28,34,0.9))",
        "gradient-border": "linear-gradient(135deg, rgba(163,196,188,0.4), rgba(65,60,88,0.2))",
      },
      animation: {
        "fade-up": "fadeSlideUp 0.6s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3), 0 0 40px rgba(163,196,188,0.08)",
        "glow-accent": "0 0 60px rgba(163,196,188,0.15), 0 0 120px rgba(163,196,188,0.05)",
        "button": "0 0 0 0 rgba(163,196,188,0)",
        "button-hover": "0 0 20px rgba(163,196,188,0.3)",
      },
      backdropBlur: {
        "glass": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
