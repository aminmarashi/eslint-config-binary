module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    // Restrict
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'func-names': ['error', 'as-needed'],
    indent: ['error', 4, {SwitchCase: 1}],
    'key-spacing': ['error', {align: 'colon'}],
    'max-len': [
      'error',
      120,
      4,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
    ],
    'prefer-template': 'error',
    radix: ['error', 'as-needed'],
    'wrap-iife': ['error', 'inside', {functionPrototypeMethods: true}],
    'no-nested-ternary': 'error',
    curly: 'error',
    quote: ['error', 'single'],

    // Warning
    'no-nested-ternary': 'warn',
    'one-var': 'warn',
    'no-useless-escape': 'warn',
    'no-console': 'warn',
    'no-underscore-dangle': 'warn',

    // Allow
    'func-names': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
  },
};

