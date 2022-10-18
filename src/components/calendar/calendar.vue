<template>
  <div class="calendar">
    <div class="head">
      <div class="left">
        <span class="prevY year" @click="changeYear('prev')">《</span>
        <span class="prevM" @click="changeMonth('prev')">◁</span>
      </div>
      <div class="title">当前日期: {{ title }}</div>
      <div class="right">
        <span class="nextM" @click="changeMonth('next')">▷</span>
        <span class="nextY year" @click="changeYear('next')">》</span>
      </div>
    </div>
    <div class="content">
      <ul class="week">
        <li v-for="i in weeks" :key="i.id">{{ i.name }}</li>
      </ul>
      <div class="list">
        <template v-for="i in state.dataCount" :key="i">
          <div class="day">
            <div>
              <el-popover
                placement="top"
                :width="50"
                trigger="click"
                content="签到成功"
                :auto-close="100"
              >
                <template #reference>
                  <span
                    @click="signIn(i)"
                    class="item"
                    :class="isCurrDate(i) ? 'active' : ''"
                    >{{ filterDay(i) }}
                    <i class="dot" v-show="isShowDot(i)"></i>
                  </span>
                </template>
              </el-popover>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, computed } from 'vue'
import { IDateType } from '@/types'

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
  signInList: [
    { id: 2, date: '2022-10-1' },
    { id: 3, date: '2022-10-8' },
  ],
})

const currYear = new Date().getFullYear()
const currMonth = new Date().getMonth()

onMounted(() => {
  let date = new Date()
  state.currYear = date.getFullYear()
  state.currMonth = date.getMonth()
  state.currDay = date.getDate()

  getDateCount()
})

// 获取总天数
const getDateCount = () => {
  // 获取当前月份总天数
  let count = new Date(state.currYear, state.currMonth + 1, 0).getDate()

  // 获取 1号 对应的星期
  let firstWeekDay = new Date(state.currYear, state.currMonth, 1).getDay()

  for (let i = 1; i <= count + firstWeekDay; i++) {
    let val = i - firstWeekDay
    state.dataCount.push(val)
  }
}

// 日期大于 0  的显示
const filterDay = (day: number) => {
  return day > 0 ? day : ''
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

// 切换月份
const changeMonth = (type: string) => {
  // 每次切换月份，都先把 总天数清空
  state.dataCount = []
  if (type === 'prev') {
    state.currMonth--
    // 如果 当前月份 等于 0 == 1 月  再减 就是到上一年的最后一月 11  == 12 月
    if (state.currMonth == 0) {
      state.currMonth = 11
      state.currYear--
    }
  } else {
    state.currMonth++
    // 如果 当前月份 等于 11 == 12 月  再加 就是到下一年的第一月 0  == 1 月
    if (state.currMonth == 11) {
      state.currMonth = 0
      state.currYear++
    }
  }
  // 重新获取总天数
  getDateCount()
}

// 切换年份
const changeYear = (type: string) => {
  // 每次切换年，都先把 总天数清空
  state.dataCount = []

  type === 'prev' ? state.currYear-- : state.currYear++

  // 重新获取总天数
  getDateCount()
}

// 标题栏的日期显示
const title = computed(() => {
  return `${state.currYear}年-${state.currMonth + 1}月-${state.currDay}日`
})

// 签到
const signIn = (date: number) => {
  let itemDate = `${state.currYear}-${state.currMonth + 1}-${date}`
  // 把点击的日期添加 签到列表中
  state.signInList.push({
    id: state.signInList[state.signInList.length - 1].id++,
    date: itemDate,
  })
  isShowDot(date)
}

// 是否显示签到红点
const isShowDot = (date: number) => {
  let itemDate = `${state.currYear}-${state.currMonth + 1}-${date}`
  let res = state.signInList.some((i) => i.date == itemDate)
  return res
}
</script>

<style lang="less" scoped>
.calendar {
  padding: 20px;
  width: 600px;
  height: 400px;
  box-shadow: 0 0 10px #ccc;
}

.head {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
    padding: 3px 5px;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
  }
  .prevY {
    margin-right: 20px;
  }
  .nextY {
    margin-left: 20px;
  }
}

.content {
  padding: 0 20px;
  .week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-left: 6px;
    }
  }

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(7, 90px);
    grid-template-rows: repeat(5, 50px);
    .day {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      display: inline-block;
      position: relative;
      cursor: pointer;
    }
  }
}
.active {
  background-color: red;
  display: inline-block;
  border-radius: 50%;
  color: #fff;
  width: 20px;
  height: 20px;
  font-size: 12px;
}

.dot {
  position: absolute;
  left: 25px;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f00;
  color: #fff;
}
</style>
