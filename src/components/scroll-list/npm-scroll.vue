<template>
  <div class="container">
    <div class="list-box">
      <auto-scroll
        :step="1"
        :period="50"
        :user-ctrl="true"
        :resume-smooth="true"
        :loading="loading"
        @scrollEnd="loadingMore"
      >
        <div v-for="item in length" :key="item" class="list auto-scroll-row">
          {{ item * 2 }}
        </div>
      </auto-scroll>
    </div>
  </div>
</template>

<script>
import autoScroll from 'vue-list-auto-scroll-tsc'
export default {
  name: 'Demo',
  components: {
    autoScroll,
  },
  data() {
    return {
      length: 20,
      loading: false,
    }
  },
  methods: {
    loadingMore() {
      this.loading = true
      setTimeout(() => {
        this.length += 20
        this.loading = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.list-box {
  background-color: #fff;
  width: 400px;
  height: 300px;
  margin: 20px;
}
.list {
  padding: 6px 3px;
  border-bottom: 1px solid #333;
  margin: 0;
  color: #333;
  /*height: 30px;*/
  display: flex;
  align-items: center;
}
</style>
