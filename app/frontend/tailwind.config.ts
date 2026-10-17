import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg: "#0b0d0b", card: "#101310", accent: "#8df25b" } } },
  plugins: [],
} satisfies Config;
