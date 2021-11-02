<template>
  <div class="app-container">
     404
    <n-input v-model="val" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const val = ref(0)
    const key = ref('key')
    return {
      val,
    }
  },
})
</script>
