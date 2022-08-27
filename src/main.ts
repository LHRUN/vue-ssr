import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from './router'
import { createPinia } from 'pinia'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)
  return { app, router, pinia }
}
