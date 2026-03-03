import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1C1A17", "bg-soft": "#232018", "bg-card": "#211F1B", "bg-light": "#2A2720",
        stone: "#8C8070", "stone-lt": "#B0A090",
        brass: { DEFAULT:"#B8955A", light:"#CDA96E", dark:"#8A6A30" },
        cream: { DEFAULT:"#EDE8E0", dark:"#C8BFB0" },
      },
      fontFamily: {
        serif: ["Cormorant Garamond","serif"],
        sans: ["Jost","Montserrat","sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
