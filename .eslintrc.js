module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 2,
    'import/prefer-default-export': ['off'],
    'react/destructuring-assignment': ['off'],
    'no-underscore-dangle': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'global-require': ['off'],
    'no-nested-ternary': ['off'],
  },
};
