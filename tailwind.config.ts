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
        background: "var(--background)",
        primary: "var(--primary)",
        textExtralight: "var(--text-extralight)",
        textDark: "var(--text-dark)",
        bgGray: "var(--bg-gray)",
        bgLightGray: "var(--bg-light-gray)",
        darkGray: "var(--dark-gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
