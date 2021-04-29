module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
  rules: {
    'react-native/no-inline-styles': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
