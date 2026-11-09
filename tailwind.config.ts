import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#030508", // Pure OLED Black
          900: "#070B12", // Machined Obsidian
          850: "#0D1320", // Deep Glass Core
          800: "#141D30", // Hairline Border Neutral
          750: "#1C2740",
        },
        gold: {
          DEFAULT: "#D4AF37", // Metallic Starlight Gold
          light: "#F3E5AB",   // Champagne highlight
          dark: "#AA8022",    // Burnished bronze
          muted: "rgba(212, 175, 55, 0.12)",
        },
        vermilion: {
          DEFAULT: "#E11D48", // Crimson Ember
          light: "#FB7185",
          dark: "#9F1239",
          muted: "rgba(225, 29, 72, 0.12)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-vietnam)", "var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        number: ["var(--font-jakarta)", "var(--font-vietnam)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "inner-gold": "inset 0 1px 2px 0 rgba(212, 175, 55, 0.25)",
        "gold-glow": "0 0 35px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 60px -10px rgba(212, 175, 55, 0.35)",
        "island": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "haptic": "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 7s cubic-bezier(0.37, 0, 0.63, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
