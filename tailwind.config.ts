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
        // This connects class="font-heading" to Samarkan
        heading: ["Samarkan", "serif"], 
        // This connects class="font-body" to Cormorant Garamond
        body: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;