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
        // Azul Marinho para autoridade
        navy: {
          DEFAULT: '#002147',
          dark: '#00152e',
        },
        // Dourado para prosperidade
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F7E7CE',
        },
      },
    },
  },
  plugins: [],
};
export default config;