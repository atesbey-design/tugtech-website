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
      colors: {
        "--Shade-light" : "#E7DAED",
        "--Gray-900": "#1A202C",
        "light-blue" : "#F1F2FF",
        "light-green" : "#F0FFF7",
        "light-pink" : "#FFF4F4",
      },
    },
  },
  plugins: [],
};
export default config;
