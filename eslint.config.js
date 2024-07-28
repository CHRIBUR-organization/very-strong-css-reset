import pluginJs from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import global from 'globals';
import tseslint from 'typescript-eslint';

/**
 * Array of TypeScript file extensions.
 * @type {string[]}
 */
const typeScriptExtensions = ['ts'];
/**
 * Configuration object for TypeScript ESLint.
 * @type {import("eslint").Linter.Config}
 * @property {string[]} files - An array of file patterns to include for linting.
 * @property {object} languageOptions - Options for the TypeScript language service.
 * @property {string} languageOptions.parser - The parser to use for TypeScript files.
 * @property {object} languageOptions.parserOptions - Additional options for the parser.
 * @property {string} languageOptions.parserOptions.project - The path to the tsconfig.json file.
 * @property {object} languageOptions.parserOptions.ecmaFeatures - ECMAScript features to enable.
 * @property {object} plugins - ESLint plugins to use.
 * @property {object} plugins.typescript - The TypeScript plugin for ESLint.
 * @property {object} rules - ESLint rules to apply.
 */
const typeScriptConfig = {
  files: typeScriptExtensions.map((ext) => `**/*.${ext}`),
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: './tsconfig.json',
    },
    globals: {
      ...global.browser,
      ...global.node,
      ...global.jest,
    },
  },
  plugins: {
    typescript: tseslint,
  },
  rules: {
    ...tseslint.configs.strictTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
  },
};
/**
 * Array of formatted file extensions.
 * @type {string[]}
 */
const formattedExtensions = ['js', 'mjs', 'cjs', 'ts'];
/** @type {import("eslint").Linter.Config[]}*/
export default [
  {
    ignores: ['**/node_modules**', '**/out**', '**/dist**', 'eslint.config.js'],
  },
  typeScriptConfig,
  {
    files: formattedExtensions.map((extension) => `**/*.${extension}`),
    plugins: {
      eslint: pluginJs,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: eslintConfigPrettier,
    },
    settings: {
      'import/parsers': {
        espree: formattedExtensions,
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      ...eslintConfigPrettier.rules,
    },
  },
];
