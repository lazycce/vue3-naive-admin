<template>
  <div id="tags-view-container" class="tags-view-container">
    <div class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        class="tags-view-item"
        :class="isActive() === tag.path? 'active': ''"
        :to="tag.path"
      >
        {{ tag.title }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore} from 'vuex'
import { pathResolve } from '/@/utils'

/** 当路由 重meta.affix 为 true 事 tagView 固定 */
function filterAffixTags(routes, currentPath,basePath = '/'):Array<any[]> {
  let tags = []
  routes.forEach(route => {
    const tagPath = pathResolve(basePath,  route.path) // 这边有问题
    if ((route.meta && route.meta.affix) || (!route.children && tagPath === currentPath)) {
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, currentPath, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  });
  return tags
}

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const routes = computed(() => store.state.permission.sidebarRouters)

    const addTags = () => {
      const { name } = route
      if (name) {
        store.dispatch('tagsView/addView', route)
      }
    }

    const affixTags = ref([])
    const initTags = () => {
      affixTags.value.push( ...filterAffixTags(routes.value, route.path))
      for (const tag of affixTags.value) {
        // Must have tag name
        if (tag.name) {
          store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    }

    const visitedViews = computed(() => store.state.tagsView.visitedViews)

    // 监听路由变换
    watch(route, () => {
      addTags()
    })

    const isActive = () => {
      return route.path
    }

    onMounted(() => {
      initTags()
    })

    return {
      isActive,
      visitedViews
    }
  },
})
</script>


<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      padding: 0 8px !important;
      border: 1px solid #d8dce5;
      color: #495060;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          display: inline-block;
          content: '';
          background: #fff;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>