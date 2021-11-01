// 公共路由
export default [
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    hidden: true
  },
  
]