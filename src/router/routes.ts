import Layout from '/@/layout/index.vue'
// 公共路由
export default [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('/@/views/index.vue'),
        name: 'Index',
        meta: { title: '首页', icon: 'WineIcon', affix: true }
      },
    ]
  },
  // {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/error/404.vue'),
  //       name: 'Index',
  //     },
  //     {
  //       path: '401',
  //       component: () => import('@/views/error/401.vue'),
  //       name: 'error401',
  //     }
  //   ]
  // }
]