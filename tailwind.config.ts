import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4EBD9",
        sepia: "#4A3B32",
        saffron: "#D97706",
      },
      fontFamily: {
        heading: ["Samarkan", "serif"], 
        body: ["Cormorant Garamond", "serif"],
      },
      // ADD THIS SECTION FOR ANIMATIONS
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        drift: 'drift 20s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;