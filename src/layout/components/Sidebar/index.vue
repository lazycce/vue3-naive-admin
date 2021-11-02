<template>
  <div class="has-logo">
    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from './Logo.vue'

export default defineComponent({
  name: 'siderIndex',
  components: {
    logo
  },
  setup() {
    
  },
})
</script>
