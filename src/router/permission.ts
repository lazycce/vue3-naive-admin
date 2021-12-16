import store from '../store/index'

export default function handlePermisson(router: any) {
  router.beforeEach((to: any, from: any, next: any) => {
    const roles = store.getters['user/getRoles']
    if ( roles.length === 0) {
      store.dispatch('permission/GenerateRoutes').then(accessRoutes => {
        // 根据roles权限生成可访问的路由表
        // 动态添加可访问路由表
        router.addRoute(...accessRoutes) 
        store.commit('user/SET_ROLES', ['admin'])
        // next() // hack方法 确保addRoutes已完成
        next({...to, replace: true})
      })
    } else {
      next()
    }
  })
}