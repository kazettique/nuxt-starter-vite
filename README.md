# Nuxt 3 Starter with Vite

Nuxt 3 POC created by Vite, with eslint, prettier, tailwind, and more.

中文版請走 👉 [這裡](https://github.com/kazettique/nuxt-starter-vite/blob/main/README.zh-tw.md)

## Todo List

### Core (JavaScript, Vue, TypeScript)

- [x] eslint
- [x] prettier
- [ ] event bus alternatives
  - [ ] [mitt](https://github.com/developit/mitt)
  - [ ] inject & provide
  - [ ] pinia
- [x] disable Nuxt auto imports
- [ ] Component "go to definition" error

### Style

- [x] tailwindcss
  - [ ] custom gradient color
  - [x] CSS class name sorting
- [ ] icons
- [ ] scrollbar style
- [x] CSS properties sorting with [stylelint](https://stylelint.io)

### Testing (Maybe)

- [ ] component testing
- [ ] E2E testing
  - [ ] [playwright](https://playwright.dev)
  - [ ] [cypress](https://www.cypress.io)
  - [ ] [puppeteer](https://github.com/puppeteer/puppeteer)

### Other

- [ ] Internationalization aka **i18n**
- [ ] Accessibility aka **a11y**
- [ ] Dark theme
- [ ] Git push validation ([husky](https://github.com/typicode/husky))

## Solutions

### eslint & prettier setup

- [[Day 04] Nuxt 3 + TypeScript + ESLint + Prettier 環境建置 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10293758)

### "Go to definition" of components in VS Code

No resolve yet in **Nuxt 3**, but works for **Vue 3** with Volar.

Ref:

- ["Go to definition" doesn't work in .vue files · Issue #707 · vuejs/vetur](https://github.com/vuejs/vetur/issues/707)

### CSS Sorting

To sort in CSS class, using prettier-plugin-tailwindcss recommended by [Tailwind official site](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).

To sort CSS properties in style of component, using [stylelint-order](https://github.com/hudochenkov/stylelint-order) with rules from [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order)

### Git Validation

- [Husky - Git hooks](https://typicode.github.io/husky/#/)
