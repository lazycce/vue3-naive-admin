<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link key="expand" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoImg from '/@/assets/logo/logo.png'

export default defineComponent({
  setup() {
    return {
      title: 'naive-admin',
      logo: logoImg,
    }
  },
})
</script>


<style  lang="scss" scoped>
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

      & .sidebar-logo-link {
        height: 100%;
        width: 100%;

        & .sidebar-logo {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 12px;
        }

         & .sidebar-title {
            display: inline-block;
            margin: 0;
            color: #fff;
            font-weight: 600;
            line-height: 50px;
            font-size: 14px;
            font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
            vertical-align: middle;
          }
      }

  }

</style>