module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'promise', 'prettier', 'html', 'react-hooks'],
  rules: {
    // delete rule for production only for starter purposes
    'jsx-a11y/anchor-is-valid': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': 'error',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-absolute-path': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
