module.exports = {
  ignoreFiles: ['dist/**/*',
    '**/src/assets/**'],
  extends: [
    // 'stylelint-config-standard',
    // 'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    // 'stylelint-config-recommended-vue/scss',
    // 'stylelint-config-clean-order',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    "no-empty-source": false
  }
};
