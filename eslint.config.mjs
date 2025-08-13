import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended, // replaces "eslint:recommended"

  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals'
  ),

  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules', '.next', 'dist', 'public', 'out'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
    },
  },
];
