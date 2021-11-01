<template>
   <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <n-menu v-model:value="activeKey" :options="menuOptions" />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <AppMain />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, h, ref, resolveComponent } from 'vue'
import AppMain from './components/AppMain.vue'
const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/index',
          rel: 'noopenner noreferrer'
        },
        { default: () => '404' }
      ),
    key: '404',
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/401',
          rel: 'noopenner noreferrer'
        },
        { default: () => '401' }
      ),
    key: '401',
  }
]

export default defineComponent({
  components: {
    AppMain
  },
  setup () {
    return {
      activeKey: ref(null),
      menuOptions
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