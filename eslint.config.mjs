import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  // Arquivos a serem verificados
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts}"],
    },
    {
      files: ["**/*.js"],
      languageOptions: { sourceType: "script" },
    },
  ],
  languageOptions: {
    parser: tseslintParser, // Parser do TypeScript
    globals: globals.browser, // Globais de navegador
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Regras recomendadas para TypeScript
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error", // Erro ao usar `any`
  },
};

export default eslintConfig;
