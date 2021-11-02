<template>
  <div>
    <sidebar class="sidebar-container" />
    <AppMain />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, resolveComponent } from 'vue'
import AppMain from './components/AppMain.vue'
import sidebar from './components/Sidebar/index.vue'

export default defineComponent({
  components: {
    AppMain,
    sidebar
  },
  setup () {
    return {
    }
  }
})
</script>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>