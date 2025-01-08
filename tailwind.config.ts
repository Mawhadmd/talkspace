import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        primaryColor: 'rgb(255, 255, 255)',
        accentColor: 'rgb(255, 170, 51)',
        secondAccent: 'rgb(32, 201, 151)',
        mainTextColor: 'rgb(0, 119, 255)',
        secTextColor: 'rgb(0, 0, 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;
