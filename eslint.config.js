import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
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
