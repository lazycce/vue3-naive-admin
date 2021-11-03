<template>
  <div id="tags-view-container" class="tags-view-container">
    <div class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="isActive() === '/401'? 'active': ''"
        to="/401"
      >
        首页
      </router-link>
      <router-link
        class="tags-view-item"
        :class="isActive() === '/index'? 'active': ''"
        to="/"
      >
        404
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const isActive = () => {
      console.log(router.currentRoute.value.path)
      return router.currentRoute.value.path
    }

    return {
      isActive
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