<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const handleClick = () => {
  count.value += 1
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button>Default</n-button>
  <n-button type="primary">Primary</n-button>
  <n-button type="info">Info</n-button>
  <n-button type="success">Success</n-button>
  <n-button type="warning">Warning</n-button>
  <n-button type="error">Error</n-button>
  <button type="button" @click="handleClick">count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
