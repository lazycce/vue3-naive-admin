<template>
  <n-menu
    :inverted="false"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :indent="20"
    :value="currentPath"
    accordion
  />
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent, computed } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { constantRouterIcon } from '/@/utils/icon'
import { pathResolve } from '/@/utils/index'

// 解析菜单
const transferRoutes2MenuList = (routes: any, parentUrl: string = '') => {
    if (!routes && routes.length === 0) {
      return
    }
    let menu = []
    routes.forEach((route: any, index: number) => {
      let children 
      if(route.children) {
        children = transferRoutes2MenuList(route.children, route.path)
      }

      const title = route.meta?.title || ''
      const path: string = pathResolve(parentUrl, route.path)
      const icon = route.meta?.icon || ''
      const hidden = !route.meta
      menu.push({
        key: path, 
        icon: constantRouterIcon[icon],
        label: () => h(
          resolveComponent('router-link'),
          {
            to: {
              path,
            }
          },
          { default: () => `${title}` }
        ),
        children,
        hidden
      })
    });
    return menu
}

// 去除隐藏菜单
const removeHiddenMenuItem = (menuItems: any) => {
  if(!menuItems || menuItems.length === 0) return

  let filterMenuItmes = []
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i]
    if (item.hidden) {
      filterMenuItmes.push(...item.children)
    } else {
      filterMenuItmes.push(item)
    }
  }
  return filterMenuItmes
}

export default defineComponent({
  setup () {
    const route = useRoute()
    const store = useStore()
    const routes = computed(() => store.getters['permission/getSidebarRouters'])
    const menuOptions = removeHiddenMenuItem(transferRoutes2MenuList(routes.value))

    console.log('menuOptions', menuOptions)

    const currentPath = computed(() => route.path)

    return {
      menuOptions,
      currentPath
    }
  }
})
</script>

<style scoped>
</style>
