import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
      },
      extend: {
         fontFamily: {
            rem: ["REM", "sans-serif"],
         },
         colors: {
            primary: "#a18aff",
            secondary: "#ca8bfe",
            freelance: "#3fd4f4",
            personal: "#fd99af",
            work: "#fac608",
            unactiveGrey: "#717082",
         },
      },
   },
   plugins: [],
};
export default config;
