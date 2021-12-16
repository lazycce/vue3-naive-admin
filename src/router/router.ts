import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import routes from './routes'
import permission from './permission'


const isServer = typeof window === 'undefined'
const createHistory = isServer ? createMemoryHistory : createWebHistory

export default function createAppRouter () {
  const router = createRouter({
    history: createHistory(),
    routes
  })

  // 权限控制
  permission(router)
  
  return router
}