export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "function-disallowed-list": ["rgba", "hsla", "rgb", "hsl"],
    "color-function-notation": "modern",
    "color-no-hex": true,
    "import-notation": null,
    "at-rule-no-unknown": [true, { ignoreAtRules: ["theme"] }],
    "lightness-notation": "number",
  },
};
