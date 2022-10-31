<template>
  <div>
    <div class="itemTableBox">
      <div
        class="TItemUL"
        :class="{ 'animate-up': animateUp }"
        @mouseenter="Stop()"
        @mouseleave="Up()"
      >
        <div class="TItem" v-for="Fitem in fdata" :key="Fitem.sn">
          <div class="TI_Dwidth">{{ Fitem.sn }}</div>
          <div class="TI_Dwidth">{{ Fitem.TI_place }}</div>
          <div class="TI_Dwidth">{{ Fitem.TI_type }}</div>
          <div class="TI_info">{{ Fitem.TI_info }}</div>
          <div class="TI_UPTime">{{ Fitem.TI_UPTime }}</div>
          <div class="TI_Dwidth">{{ Fitem.TI_state }}</div>
        </div>
        <div class="TItem" v-if="this.fdata.length == 0">
          <div class="TI_default" style="width: 100%">暂无数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marquee-up',
  data() {
    return {
      animateUp: false,
      timer: null,
      fdata: [
        {
          sn: '01',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
        {
          sn: '02',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
        {
          sn: '03',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
        {
          sn: '04',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
        {
          sn: '05',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
        {
          sn: '06',
          TI_place: 'A部件',
          TI_type: '准确率',
          TI_info: '温度超过多少度，温度过高',
          TI_UPTime: '2021-10-01 09:23:42',
          TI_state: '未处理',
        },
      ],
    }
  },
  mounted() {
    this.scrollAnimate() //真实数据，请求数据，清除定时器，赋值给本地数组fdata，启动定时器--scrollAnimate
  },
  methods: {
    scrollAnimate() {
      // 超出范围在后再进行滚动
      if (this.fdata.length >= 6) {
        this.timer = setInterval(() => {
          this.animateUp = true
          setTimeout(() => {
            this.fdata.push(this.fdata[0])
            this.fdata.shift()
            this.animateUp = false
          }, 500)
        }, 3000)
      }
    },
    // 鼠标移上去停止
    Stop() {
      clearInterval(this.timer)
    },
    // 鼠标离开继续滚动
    Up() {
      this.scrollAnimate()
    },
  },
  destroyed() {
    clearInterval(this.timer)
  },
}
</script>

<style lang="less" scoped>
@TItemHeight: 58px;
.itemTableBox {
  width: 1474px;
  height: 330px;
  background: #ff0;
  margin: 20px auto;
  padding-top: 1px;
  overflow: hidden;
  .TItem {
    width: 100%;
    height: @TItemHeight;
    background: rgba(255, 0, 0, 0.2);
    margin-top: 8px;
    display: flex;
    .TI_default {
      height: @TItemHeight;
      float: left;
      font-size: 24px;
      font-weight: 400;
      line-height: @TItemHeight;
      text-align: center;
      color: #fff;
    }
    .TI_Dwidth {
      width: 200px;
      @extend .TI_default;
    }
    .TI_info {
      width: 374px;
      @extend .TI_default;
    }
    .TI_UPTime {
      width: 300px;
      @extend .TI_default;
    }
  }
  .animate-up {
    transition: all 0.5s ease-in-out;
    transform: translateY(-66px);
  }
}
</style>
