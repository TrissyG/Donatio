import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "donatio-white": "#FAFAFA",
        "donatio-cream": "#F8FAEC",
        "donatio-green": "#50A45A",
        "donatio-red": "#EA4141",
        "donatio-black": "#232323",
      },
    },
  },
  plugins: [],
};
export default config;
