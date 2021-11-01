import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import routes from './routes'

const isServer = typeof window === 'undefined'
const createHistory = isServer ? createMemoryHistory : createWebHistory

export default function createAppRouter () {
  return createRouter({
    history: createHistory(),
    routes
  })
}