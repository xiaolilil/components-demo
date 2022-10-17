<template>
  <div class="calendar">
    <div class="head">
      <div class="left">
        <span class="prevY">《</span>
        <span class="prevM">◁</span>
      </div>
      <div class="title">当前日期:</div>
      <div class="right">
        <span class="nextM">▷</span>
        <span class="nextY">》</span>
      </div>
    </div>
    <div class="content">
      <ul class="week" v-for="i in weeks" :key="i.id">
        <li>{{ i.name }}</li>
      </ul>
      <div class="list">
        <!-- <template v-for="i in state.dataCount" :key="i">
          <div class="block">
            <div>
              <span>{{ i }}</span>
            </div>
          </div>
        </template> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const weeks = reactive([
  { name: '日', id: 0 },
  { name: '一', id: 1 },
  { name: '二', id: 2 },
  { name: '三', id: 3 },
  { name: '四', id: 4 },
  { name: '五', id: 5 },
  { name: '六', id: 6 },
])
</script>

<style lang="less" scoped>
.head {
  width: 500px;
  display: flex;
  align-item: center;
}
</style>
