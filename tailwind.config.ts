import type { Config } from "tailwindcss"

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Updated content path
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "", // Added prefix
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
        border: "hsl(180 21.4286% 89.0196%)", // Updated color values
        input: "hsl(180 21.4286% 89.0196%)", // Updated color values
        ring: "hsl(179.0909 26.8293% 48.2353%)", // Updated color values
        background: "hsl(0 0% 100%)", // Updated color values
        foreground: "hsl(180 17.0732% 8.0392%)", // Updated color values
        primary: {
          DEFAULT: "hsl(179.0909 26.8293% 48.2353%)", // Updated color values
          foreground: "hsl(0 0% 100%)", // Updated color values
        },
        secondary: {
          DEFAULT: "hsl(27.2449 80.9917% 52.549%)", // Updated color values
          foreground: "hsl(0 0% 100%)", // Updated color values
        },
        destructive: {
          DEFAULT: "hsl(0 84.2365% 60.1961%)", // Updated color values
          foreground: "hsl(210 40% 98.0392%)", // Updated color values
        },
        muted: {
          DEFAULT: "hsl(180 30.4348% 95.4902%)", // Updated color values
          foreground: "hsl(177.6 14.4509% 33.9216%)", // Updated color values
        },
        accent: {
          DEFAULT: "hsl(27.2449 80.9917% 52.549%)", // Updated color values
          foreground: "hsl(0 0% 100%)", // Updated color values
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)", // Updated color values
          foreground: "hsl(180 17.0732% 8.0392%)", // Updated color values
        },
        card: {
          DEFAULT: "hsl(180 45.4545% 97.8431%)", // Updated color values
          foreground: "hsl(180 17.0732% 8.0392%)", // Updated color values
        },
      },
      borderRadius: {
        lg: "0.75rem", // Updated border radius values
        md: "calc(0.75rem - 2px)", // Updated border radius values
        sm: "calc(0.75rem - 4px)", // Updated border radius values
      },
      boxShadow: {
        DEFAULT: "0px 2px 4px hsl(0 0% 0% / 0.1)", // Added boxShadow
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
