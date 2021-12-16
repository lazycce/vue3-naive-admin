<template>
  <section class="app-main">
      <router-view :key="key" v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <component :is="Component" />
          </keep-alive>
         </transition>
      </router-view>
  </section>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  export default defineComponent({
    name: 'appMain',
    setup() {
      // 初始化路由
      const router = useRouter()
      const key = computed(() => router)

      const store = useStore()
      const cachedViews = computed(() =>store.state.tagsView.cachedViews)

      return {
        key,
        cachedViews
      }
    }
  })
</script>
