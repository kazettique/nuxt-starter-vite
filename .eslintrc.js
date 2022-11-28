module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    semi: 'off',
    'vue/v-on-style': 'off',
  },
  // overrides: [
  //   {
  //     files: ['**/pages/**/*.{js,ts,vue}', '**/layouts/**/*.{js,ts,vue}', '**/app.{js,ts,vue}', '**/error.{js,ts,vue}'],
  //     rules: {
  //       // 'vue/multi-word-component-names': 'off'
  //     }
  //   }
  // ]
};
