export default {
  plugins: ["prettier-plugin-tailwindcss"],

  // Settings provided for prettier-plugin-tailwindcss (https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
  // For Tailwind v4, specify path to import tailwind using tailwindStylesheet
  // tailwindStylesheet: "./src/app/global.css",
  tailwindAttributes: ["className"],
  tailwindFunctions: ["cn", "clsx", "cva"],
};
