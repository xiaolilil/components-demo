<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

async function test() {
  const data = await axios.get(import.meta.env.VITE_BASE_API as string)
  console.log('data', data)
}
test()
</script>

<style scoped></style>
