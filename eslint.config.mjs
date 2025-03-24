import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific rules
      "react/no-unescaped-entities": "off", // Disable unescaped entities rule
      "prefer-const": "off", // Disable prefer-const rule
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars rule
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps rule
      "no-var": "off", // Disable no-var rule
    },
  },
];

export default eslintConfig;