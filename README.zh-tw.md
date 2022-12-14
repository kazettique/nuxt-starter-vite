# Nuxt 3 Starter with Vite

由 Vite 建立的 Nuxt 3 POC 專案，附有 eslint、prettier、tailwind 及更多功能。

## 代辦事項

### 基本核心（JavaScript、Vue、TypeScript）

- [x] eslint
- [x] prettier
- [ ] event bus 替代方案
  - [ ] [mitt](https://github.com/developit/mitt)
  - [ ] inject & provide
  - [ ] pinia
- [x] 停用 Nuxt 自動引入
- [ ] 元件「前往定義」功能失效

### 樣式

- [x] tailwindcss
  - [ ] 自定義漸層色
  - [x] CSS class 名稱排序（[prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)）
- [ ] icons
- [ ] 捲軸樣式
- [x] 用 [stylelint](https://stylelint.io) 做 CSS 屬性排序整理

### 測試（或許）

- [ ] 元件測試
- [ ] E2E 測試
  - [ ] [playwright](https://playwright.dev)
  - [ ] [cypress](https://www.cypress.io)
  - [ ] [puppeteer](https://github.com/puppeteer/puppeteer)

### 其他

- [ ] 多國語系 i18n
- [ ] 無障礙 a11y
- [ ] 暗主題
- [ ] Git 推送驗證([husky](https://github.com/typicode/husky))

## 解決方案

### eslint & prettier 設定

- [[Day 04] Nuxt 3 + TypeScript + ESLint + Prettier 環境建置 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10293758)

### CSS 排序與整理

依 [Tailwind 官網推薦](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)使用 prettier-plugin-tailwindcss 做 CSS class 排序

使用 [stylelint-order](https://github.com/hudochenkov/stylelint-order) 及 [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) 規則做 CSS 屬性排序及整理
