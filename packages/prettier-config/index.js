export default {
  printWidth: 100,
  /* Settings provided for prettier-plugin-tailwindcss (https://github.com/tailwindlabs/prettier-plugin-tailwindcss) */
  // For Tailwind v4, do not forget to specify path to importing tailwind using 'tailwindStylesheet'
  // tailwindStylesheet: "./src/app/global.css",
  // todo: Replace array of many attributes names with simple regex when a feature-request will be merged https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/373.
  tailwindAttributes: ["className", "wrapperClassName", "titleClassName"],
  tailwindFunctions: ["cn", "clsx", "cva"],
};
