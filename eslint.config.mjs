import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Add rules as needed
    },
  },
];
