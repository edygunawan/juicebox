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
        PrimaryColoursLight: "var(--Brand-Colours-Primary-Colours-light)",
        PrimaryBlack: "var(--primary-black)",
        SecondaryBlack: "var(--secondary-black)",
        TypeLightHeading: "var(--Type-light-heading)"
      },
    },
  },
  plugins: [],
} satisfies Config;
