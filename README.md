## SSR building based on Vue3 + Vite3
🛠 Tech Stack: **Vite3** + **Vue3** + **Pinia** + **VueRouter4** + **Express**  
📝 Document：[Vue3+Vite3 SSR基本搭建](https://lhrun.github.io/2022/08/27/Vue3-Vite3-SSR%E5%9F%BA%E6%9C%AC%E6%90%AD%E5%BB%BA/)
### Getting Started
+ dev
```
pnpm install
pnpm dev
```
+ prod
```
pnpm install
pnpm build
pnpm serve
```
+ test
```
pnpm install
pnpm test
```

### File list
```js
├─ src
│  ├─ hooks
│  ├─ pages
│  ├─ router // VueRouter
│  ├─ store // Pinia
│  ├─ types
│  ├─ App.vue
│  ├─ entry-client.ts // mount dom && replace data
│  ├─ entry-server.js // replace html strings and static resources
│  └─ main.ts // create app
│
├─ __tests__
│  ├─ test-server // test server startup file
│  └─ vuessr.spec.ts // vue ssr test
│
├─ server.js // server file
├─ start-server.js // server startup file
├─ vite.config.ts
// ...
```
