<template>
  <div class="app-container">
     401 {{ tagsView.cachedViews }}
     <br />
     <n-button type="primary" @click="handleClick"> 生成路由 </n-button>
  </div>
</template>

<script lang="ts">
import { useStore, mapActions } from "vuex"
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: '401',
  setup() {
    const store = useStore()
    const tagsView = store.state.tagsView

    const handleClick = () => {
      store.dispatch("permission/GenerateRoutes")
    }

    return {
      tagsView,
      handleClick
    }
  },
})
</script>