import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '112': '48rem',
      },
      colors: {
        green1: {
          500: '#A3B18A',
        },
        green2: {
          600: '#588157',
        },
        green3: {
          700: '#3A5A40',
        },

        green4: {
          800: '#344E41',
        },
        gray1: {
          800: '#DAD7CD',
        },
       },
    },
  },
  plugins: [],
};
export default config;
