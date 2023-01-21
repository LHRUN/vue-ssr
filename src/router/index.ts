import {
  createRouter as _createRrouter,
  createMemoryHistory,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/about.vue')
  }
]

export function createRouter() {
  return _createRrouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
