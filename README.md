## SSR building based on Vue3 + Vite3
π  Tech Stack: **Vite3** + **Vue3** + **Pinia** + **VueRouter4** + **Express**  
π DocumentοΌ[Vue3+Vite3 SSRεΊζ¬ζ­ε»Ί](https://lhrun.github.io/2022/08/27/Vue3-Vite3-SSR%E5%9F%BA%E6%9C%AC%E6%90%AD%E5%BB%BA/)
### Getting Started
+ dev
```
pnpm install
pnpm run dev
```
+ prod
```
pnpm install
pnpm run build
pnpm run serve
```

### File list
```js
ββ src
β  ββ hooks
β  ββ pages
β  ββ router // VueRouter
β  ββ store // Pinia
β  ββ types
β  ββ App.vue
β  ββ entry-client.ts // mount dom && replace data
β  ββ entry-server.js // change html strings and static resources
β  ββ main.ts // create app
β
ββ server.js // server startup file
ββ vite.config.ts
// ...
```
