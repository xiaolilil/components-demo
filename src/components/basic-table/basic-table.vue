<template>
  <div class="basic-table">
    <div class="toolbar">
      <slot name="toolbarHandler"></slot>
    </div>
    <br />

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="#"
        align="center"
        width="60"
      ></el-table-column>

      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{
              scope.row[propItem.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>

      <!-- <template v-for="(v, k) in tableData[0]" :key="v">
        <template v-if="k.includes('date')">
          <el-table-column :prop="k" :label="k" width="180">
            <template #default="scope">
              {{ scope.row[k] }}
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column :prop="k" :label="k"></el-table-column>
        </template>
      </template> -->
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tableData: any[]
    showIndexColumn: boolean
    showSelectColumn: boolean
    propsList: any[]
  }>(),
  { tableData: () => [] },
)
const emits = defineEmits(['updateDialog', 'handeEdit'])
</script>

<style lang="less" scoped></style>
