const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const reactNativePlugin = require('eslint-plugin-react-native');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*']
  },
  {
    plugins: {
      prettier: prettierPlugin,
      'react-native': reactNativePlugin
    },
    rules: {
      // Prettier rules
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'none',
          semi: true,
          tabWidth: 2,
          printWidth: 80,
          arrowParens: 'always'
        }
      ],
      // React Native specific rules
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      // 'react-native/no-inline-styles': 'warn',
      // 'react-native/no-color-literals': 'warn',
      'react-native/no-raw-text': 'error'
    }
  },
  prettierConfig
]);
