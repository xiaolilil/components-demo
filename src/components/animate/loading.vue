<template>
  <div>
    <svg classname="loading" viewbox="25 25 50 50">
      <circle cx="50" cy="50" r="25" classname="path" fill="none" />
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.loading {
  width: 50px;
  height: 50px;
  animation: rotate 2s linear 0s infinite;
  background-color: #ddd;
}
.path {
  animation: dash 2s ease-in-out infinite;
  stroke: #00b390;
  stroke-width: 2;
  stroke-dasharray: 90 150;
  stroke-dashoffset: 0;
  stroke-linecap: round;
}

@keyframes rotate {
  from {
    tranform: rotate(0deg);
  }
  to {
    tranform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -120px;
  }
}
</style>
