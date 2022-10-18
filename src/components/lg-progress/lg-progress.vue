<template>
  <div class="box">
    <div class="big">
      <div class="lg" :style="{ width: width + '%' }">
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const width = ref(10)
let time = setInterval(() => {
  width.value++
  if (width.value == 100) {
    width.value = 0
    clearInterval(time)
  }
}, 30)
</script>

<style>
.big {
  width: 600px;
  height: 22px;
  background-color: #cdcdb8;
  border-radius: 11px;
  margin-top: 30px;
}
.lg {
  width: 10%;
  height: 22px;
  overflow-x: hidden;
  border-radius: 11px;
}
.bg {
  width: 600px;
  height: 22px;
  background-image: linear-gradient(
    to right,
    #6ff6f5,
    #4a68f7,
    #775df5,
    #c25ef5
  );
  border-radius: 11px;
}
</style>
