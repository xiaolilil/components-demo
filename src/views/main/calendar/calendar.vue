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
        <template v-for="i in state.dataCount" :key="i">
          <div class="block">
            <div>
              <span :class="isCurrDate(i) ? 'active' : ''">{{
                filterDay(i)
              }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { IDateType } from '@/types'
import { stat } from 'fs'
const weeks = reactive([
  { name: '日', id: 0 },
  { name: '一', id: 1 },
  { name: '二', id: 2 },
  { name: '三', id: 3 },
  { name: '四', id: 4 },
  { name: '五', id: 5 },
  { name: '六', id: 6 },
])

const state = reactive<IDateType>({
  dataCount: [],
  currYear: 0,
  currMonth: 0,
  currDay: 0,
})

const currYear = new Date().getFullYear()
const currMonth = new Date().getMonth()
const currDay = new Date().getDay()

onMounted(() => {})
const getDateCount = () => {}

// 日期大于 0  的显示
const filterDay = (day: number) => {
  return day > 0 ? day : 0
}

// 当前日期， 当前年月
const isCurrDate = (date: number) => {
  if (
    date == state.currDay &&
    state.currYear == currYear &&
    state.currMonth == currMonth
  ) {
    return true
  } else {
    return false
  }
}
</script>

<style lang="less" scoped>
.calendar {
  padding: 20px;
  width: 600px;
  height: 400px;
}
.head {
  width: 500px;
  display: flex;
  align-items: center;
}

.head {
  padding: 20px;
  .week {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.active {
  background-color: red;
  color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 13px;
  text-align: center;
  line-height: 26px;
}
</style>
