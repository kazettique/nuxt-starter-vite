module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'warn'
  },
  overrides: [
    {
      files: ['**/pages/**/*.{js,ts,vue}', '**/layouts/**/*.{js,ts,vue}', '**/app.{js,ts,vue}', '**/error.{js,ts,vue}'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
