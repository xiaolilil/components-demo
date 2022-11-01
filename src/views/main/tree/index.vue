<template>
  <el-card>
    <Tree :tree-data="{ label: '测试', id: '插槽' }" :is-title="true" />
    <hr />
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <template #default="{ data }">
        <Tree :treeData="data" />
      </template>
    </el-tree>
  </el-card>
</template>

<script lang="ts" setup>
import Tree from '@/components/tree/tree.vue'
import { getList } from '@/utils/getList'

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}
const data: any[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        id: '啊啊',
        children: [
          {
            label: 'Level three 1-1-1',
            id: '存储',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    id: '密码',
    children: [
      {
        label: 'Level two 2-1',
        id: '学习',
        children: [
          {
            label: 'Level three 2-1-1',
            id: '把v',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        id: 'bb',
        children: [
          {
            label: 'Level three 2-2-1',
            id: '搜索',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    id: '浮动',
    children: [
      {
        label: 'Level two 3-1',
        id: '请求',
        children: [
          {
            label: 'Level three 3-1-1',
            id: '问问',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        id: 'lk',
        children: [
          {
            label: 'Level three 3-2-1',
            id: 'ee',
          },
        ],
      },
    ],
  },
]
// getList(data, '')

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style lang="less" scoped>
.el-card {
  width: 60%;
  margin: 30px auto;
  font-size: 14px;

  .el-row {
    width: 100%;
  }
}
:deep(.el-tree-node__label) {
  flex: 1;
}
</style>
