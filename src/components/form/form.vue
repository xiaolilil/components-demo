<template>
  <div class="form">
    <div class="header">
      <slot name="header">表单组件</slot>
    </div>

    <el-form ref="formRef" :label-width="data.labelWidth">
      <el-form-item
        :label="v.label"
        :prop="v.prop"
        v-for="(v, i) in data.items"
        :key="i"
      >
        <el-input
          :style="{ width: v.width }"
          v-model="formData[v.prop]"
          v-if="v.type == 'input'"
          :placeholder="v.placeholder"
        ></el-input>

        <el-select
          v-model="formData[v.prop]"
          v-if="v.type == 'select'"
          :placeholder="v.placeholder"
        >
          <el-option
            :label="j.label"
            :value="j.value"
            v-for="j in v.options"
            :key="j.label"
          />
        </el-select>

        <el-switch v-model="formData[v.prop]" v-if="v.type == 'switch'" />

        <el-checkbox-group
          v-model="formData[v.prop]"
          v-if="v.type == 'checkbox'"
        >
          <el-checkbox
            v-for="g in v.groups"
            :key="g.label"
            :label="g.label"
            name="type"
          />
        </el-checkbox-group>

        <el-radio-group v-model="formData[v.prop]" v-if="v.type == 'radio'">
          <el-radio :label="r.label" v-for="r in v.groups" :key="r.label" />
        </el-radio-group>

        <el-input
          type="textarea"
          :label="v.label"
          v-model="formData[v.prop]"
          :placeholder="v.placeholder"
          :style="{ width: v.width }"
          v-if="v.type == 'textarea'"
        />

        <el-cascader
          :label="v.label"
          v-model="formData[v.prop]"
          :options="v.options"
          :placeholder="v.placeholder"
          @change="handleChange"
          v-if="v.type == 'cascader'"
        />

        <el-date-picker
          :label="v.label"
          v-model="formData[v.prop]"
          type="date"
          :placeholder="v.placeholder"
          style="width: 100%"
          v-if="v.type == 'date'"
        />

        <el-col :span="v.span">
          <el-time-picker
            :label="v.label"
            v-model="formData[v.prop]"
            :placeholder="v.placeholder"
            v-if="v.type == 'time'"
            :is-range="v.isRange"
          />
        </el-col>

        <el-col :span="v.span">
          <el-date-picker
            :label="v.label"
            v-model="formData[v.prop]"
            :placeholder="v.placeholder"
            type="datetime"
            v-if="v.type == 'datetime'"
          />
        </el-col>
      </el-form-item>
    </el-form>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IFormItem, ISearchForm } from '@/types'
import { reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    // modelValue?: any
    // formItems: IFormItem[]
    labelWidth?: string
    // itemStyle?: object
    // colLayout?: object
    // formWidth?: number
    data: ISearchForm
  }>(),
  {
    // labelWidth: '100px',
    // itemStyle: () => {
    //   return { padding: '10px 10px' }
    // },
    // colLayout: () => {
    //   return {
    //     xl: 6,
    //     lg: 8,
    //     md: 12,
    //     sm: 24,
    //     xs: 24,
    //   }
    // },
  },
)

const formData = reactive({
  // name: '',
  // date: '',
  // address: '',
})

const emit = defineEmits(['update:modelValue', 'queryForm', 'resetForm'])

// 更新数据触发的事件
// const updataVal = (val: any, field: string) => {
//   emit('update:modelValue', { ...props.modelValue, [field]: val })
// }

const handleChange = () => {}
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  // height: 200px;
  padding-bottom: 50px;
  background-color: #fff;
  position: relative;
  .header {
    line-height: 60px;
    text-align: center;
  }
  .footer {
    width: 100%;
    margin-left: 50%;
  }
}
</style>
