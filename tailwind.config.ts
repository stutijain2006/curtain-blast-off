import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        "flash": {
          "0%": { opacity: "0" },
          "10%": { opacity: "0.8" },
          "20%": { opacity: "0" },
          "30%": { opacity: "0.6" },
          "40%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "curtain-open-left": {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "100%": { transform: "translateX(-100%) scaleX(0.3)" },
        },
        "curtain-open-right": {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0.3)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "spotlight-sweep": {
          "0%": { transform: "translateX(-100%) rotate(-5deg)" },
          "100%": { transform: "translateX(100%) rotate(5deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "particle-float": {
          "0%": { transform: "translateY(100vh) translateX(0) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(50px) scale(1)", opacity: "0" },
        },
        "ripple-from-left": {
          "0%": {
            transform: "translateX(0) scale(0.5)",
            opacity: "0"
          },
          "50%": {
            opacity: "0.8"
          },
          "100%": {
            transform: "translateX(600px) scale(2)",
            opacity: "0"
          }
        },
        "earthquake-shake-slow": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-4px) rotate(-0.5deg)" },
          "20%": { transform: "translateX(4px) rotate(0.5deg)" },
          "30%": { transform: "translateX(-3px) rotate(-0.3deg)" },
          "40%": { transform: "translateX(3px) rotate(0.3deg)" },
          "50%": { transform: "translateX(-2px)" },
          "60%": { transform: "translateX(2px)" },
          "70%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
          "90%": { transform: "translateX(-0.5px)" },
        },
        "earthquake-shake-fast": {
          "0%, 100%": { transform: "translateX(0)" },
          "5%": { transform: "translateX(-12px) rotate(-2deg)" },
          "10%": { transform: "translateX(12px) rotate(2deg)" },
          "15%": { transform: "translateX(-10px) rotate(-1.5deg)" },
          "20%": { transform: "translateX(10px) rotate(1.5deg)" },
          "25%": { transform: "translateX(-8px) rotate(-1deg)" },
          "30%": { transform: "translateX(8px) rotate(1deg)" },
          "35%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "45%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "55%": { transform: "translateX(-3px)" },
          "60%": { transform: "translateX(3px)" },
          "65%": { transform: "translateX(-2px)" },
          "70%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
        },
        "enlarge": {
          "0%": {
            transform: "scale(1)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0.8"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "curtain-open-left": "curtain-open-left 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards",
        "curtain-open-right": "curtain-open-right 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards",
        "fade-in-scale": "fade-in-scale 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "spotlight-sweep": "spotlight-sweep 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "particle-float": "particle-float 8s ease-in-out infinite",
        "flash": "flash 2s ease-out",
        "zoom-out": "zoom-out 2s ease-in forwards",
        "ripple-from-left-fast": "ripple-from-left 1.5s ease-out forwards",
        "ripple-from-left-slow": "ripple-from-left 3s ease-out forwards",
        "earthquake-shake-slow": "earthquake-shake-slow 0.8s ease-in-out infinite",
        "earthquake-shake-fast": "earthquake-shake-fast 0.3s ease-in-out infinite",
        "enlarge": "enlarge 2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
