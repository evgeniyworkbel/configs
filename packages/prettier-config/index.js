export default {
  plugins: ["prettier-plugin-tailwindcss"],

  /* Settings provided for prettier-plugin-tailwindcss (https://github.com/tailwindlabs/prettier-plugin-tailwindcss) */
  // For Tailwind v4, do not forget to specify path to importing tailwind using 'tailwindStylesheet' property
  // tailwindStylesheet: "./src/app/global.css",
  // Track the feature-request https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/373. Replace array of many attributes names with simple regex
  tailwindAttributes: ["className", "wrapperClassName", "titleClassName"],
  tailwindFunctions: ["cn", "clsx", "cva"],
};
