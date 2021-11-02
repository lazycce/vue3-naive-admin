<template>
  <n-layout has-sider>
    <n-layout-sider
      class="sidebar-container"
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="200"
      :native-scrollbar="false"
    >
      <logo />
      <sidebar />
    </n-layout-sider>
      <n-layout class="main-container" >
        <n-layout-header>
          <navbar />
          <tagsView />
        </n-layout-header>
        <n-layout-content>
          <AppMain />
        </n-layout-content>
      </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, ref, resolveComponent } from 'vue'
import AppMain from './components/AppMain.vue'
import sidebar from './components/Sidebar/index.vue'
import logo from './components/Sidebar/Logo.vue'
import navbar from './components/Navbar/index.vue'
import tagsView from './components/TagsView/index.vue'

export default defineComponent({
  components: {
    AppMain,
    sidebar,
    logo,
    navbar,
    tagsView
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

.container {
  margin-left: 200px;
}
</style>