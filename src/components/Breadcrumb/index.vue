<template>
  <n-breadcrumb class="app-breadcrumb" >
    <n-breadcrumb-item href="#">
      北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      天津分行
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>
<style lang="scss" scoped>
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>