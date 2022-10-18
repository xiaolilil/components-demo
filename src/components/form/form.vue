<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    formItems: any[]
    labelWidth?: string
    itemStyle?: object
    colLayout?: object
    formWidth?: number
  }>(),
  {},
)
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  height: 200px;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  .header {
    line-height: 60px;
    text-align: center;
  }
  .footer {
    width: 100%;
  }
}
</style>
