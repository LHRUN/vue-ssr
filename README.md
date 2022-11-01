## 基于Vue3+Vite3的SSR搭建
🛠 技术栈: **Vite3** + **Vue3** + **Pinia** + **VueRouter4** + **Express**  
📝 项目详解：[Vue3+Vite3 SSR基本搭建](https://lhrun.github.io/2022/08/27/Vue3-Vite3-SSR%E5%9F%BA%E6%9C%AC%E6%90%AD%E5%BB%BA/)
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

### 目录说明
```
├─ src
│  ├─ hooks
│  ├─ pages
│  ├─ router // VueRouter
│  ├─ store // Pinia
│  ├─ types
│  ├─ App.vue
│  ├─ entry-client.ts // 客户端入口，挂载节点替换数据
│  ├─ entry-server.js // 服务端入口，处理服务端逻辑和静态资源
│  └─ main.ts // 创建app
│
├─ server.js // 服务端启动文件
├─ vite.config.ts
...
```
