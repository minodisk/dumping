// @ts-check

import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as imp from "eslint-plugin-import";
import sonarjs from "eslint-plugin-sonarjs";
import strictDeps from "eslint-plugin-strict-dependencies";
import unusedImports from "eslint-plugin-unused-imports";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": ts.plugin,
    },
    rules: {
      // https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "function",
          format: ["PascalCase", "camelCase"],
        },
      ],
      "@typescript-eslint/semi": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        },
      ],

      // Use unused-imports/no-unused-vars
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["./*.js", "./src/**/*.ts"],
    plugins: {
      import: imp,
      sonarjs,
      "strict-dependencies": strictDeps,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-undef": "off",
      curly: "error",
      eqeqeq: "error",
      semi: "off",
      "object-shorthand": "error",
      "no-useless-rename": "error",
      "no-throw-literal": "warn",

      "sonarjs/no-ignored-return": "error",

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: false,
          },
        },
      ],
      "import/no-unresolved": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "strict-dependencies/strict-dependencies": [
        "error",
        [],
        {
          resolveRelativeImport: true,
        },
      ],
    },
  },
  {
    ignores: ["out"],
  },
];
