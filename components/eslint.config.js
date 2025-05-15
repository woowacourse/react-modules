import eslint from '@eslint/js';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      import: eslintPluginImport,
      'react-hooks': reactHooks,
      storybook: eslintPluginStorybook,
      'react-refresh': eslintPluginReactRefresh,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...eslintPluginStorybook.configs.recommended.rules,
      ...eslintPluginReactRefresh.configs.recommended.rules,
      ...eslintPluginTypeScript.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'sibling'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '@/*', group: 'internal' },
            { pattern: './*', group: 'sibling' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },

  {
    files: ['**/*.stories.{ts,tsx,js,jsx}'],
    rules: {
      'storybook/hierarchy-separator': 'error',
      'storybook/default-exports': 'error',
    },
  },
];
