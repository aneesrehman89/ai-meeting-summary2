<<<<<<< HEAD
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
=======
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
>>>>>>> fd172a4e4d7cd1eb8eb866f9ae5d1325208b9730

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

<<<<<<< HEAD
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
=======
const eslintConfig = [
  {
    ignores: ['.next', 'node_modules', 'out', 'dist', 'public', 'coverage']
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript')
];

export default eslintConfig;
>>>>>>> fd172a4e4d7cd1eb8eb866f9ae5d1325208b9730
