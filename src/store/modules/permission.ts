import routesJson from '../json/sojson.com.json'
import constantRoutes from '/@/router/routes'
import Layout from '/@/layout/index.vue'

const state = {
  routes: [],
  addRoutes: [],
  defaultRoutes: [],
  topbarRouters: [],
  sidebarRouters: []
}

const  getters = {
  getRoutes: (state: any) => {
    return state.routes
  },

  getSidebarRouters: (state: any) => {
    return state.sidebarRouters
  }
}

const actions = {
  // 生成路由
  GenerateRoutes({ commit } :any) {
    // 后端反参的路由
    return new Promise(resolve => {
      const sdata = JSON.parse(JSON.stringify(routesJson.data))
      const rdata = JSON.parse(JSON.stringify(routesJson.data))

      const sidebarRoutes = filterAsyncRouter(sdata)
      constantRoutes.push(...sidebarRoutes)
      const rewriteRoutes = filterAsyncRouter(rdata, false, true)
      commit('SET_ROUTES', rewriteRoutes)
      commit('SET_SIDEBAR_ROUTES', constantRoutes)

      resolve(sidebarRoutes)
    })
  }
}

const mutations = {
  SET_SIDEBAR_ROUTES: (state: any , routers: any) => {
    // 侧边菜单栏
    state.sidebarRouters = routers
  },

  SET_ROUTES: (state: any , routes: any) => {
    state.routes = routes
  }
}

let dynamicViewsModules : any

// 遍历后台传来的路由字符串，转化为组件对象
function filterAsyncRouter(asyncRouterMap :Array<any> , lastRouter = false, type = false) {
  return  asyncRouterMap.filter( route => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    } else {
      delete route['children']
      delete route['redirect']
    }
    return true
  })
}

/**  */
function filterChildren(childrenMap, lastRouter = false) {
  var children = []
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView') {
        el.children.forEach(c => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    children = children.concat(el)
  })
  return children
}

// 懒加载路由
export const loadView = (component: any) => {
  // 解析项目文件
  dynamicViewsModules = dynamicViewsModules || import.meta.glob('../../views/**/*.{vue,tsx}');
  const keys = Object.keys(dynamicViewsModules)
  const matchKeys = keys.filter(key => {
    const k = key.replace('../../views', '')
    const startFlag = component.startsWith('/')
    const endFlag = component.endsWith('.vue') || component.endsWith('.tsx')
    const startIndex = startFlag ? 0 : 1
    const lastIndex = endFlag ? k.length : k.lastIndexOf('.')
    return k.substring(startIndex, lastIndex) === component
  })
  
  if (matchKeys?.length === 1) {
    return dynamicViewsModules[matchKeys[0]];
  } else if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure',
    );
    return;
  } else {
    console.warn(`在src/views/下找不到${component}, 请自行创建!`);
    return;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}