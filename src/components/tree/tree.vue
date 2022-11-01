<template>
  <el-row type="flex" justify="space-between">
    <span :class="{ bold: isTitle }">{{ treeData.label }}</span>
    <div class="head-r">
      <span>{{ treeData.id }}</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          操作
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>增加子部门</el-dropdown-item>
            <el-dropdown-item>编辑子部门</el-dropdown-item>
            <el-dropdown-item>删除子部门</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-row>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{
    treeData: any
    isTitle?: boolean
  }>(),
  {},
)
</script>

<style lang="less" scoped>
.el-row {
  width: 100%;
}
.head-r {
  display: flex;
  align-items: center;
  > span {
    margin-right: 20px;
  }
}
.bold {
  font-weight: bold;
}
</style>
