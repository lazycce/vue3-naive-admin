<template>
  <section class="app-main">
      <router-view :key="key" v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
         </transition>
      </router-view>
  </section>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'appMain',
    setup() {
      // 初始化路由
      const router = useRouter()
      const key = computed(() => router.path)

      return {
        key
      }
    }
  })
</script>
