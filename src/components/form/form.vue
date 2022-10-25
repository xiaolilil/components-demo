<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      :label-width="data.labelWidth"
    >
      <el-form-item
        :label="v.label"
        :prop="v.prop"
        v-for="(v, i) in data.items"
        :key="i"
      >
        <!-- v-model="formData[v.prop]" -->

        <!-- {{ modelValue[`${v.prop}` as keyof IUser] }} -->
        <!-- {{ modelValue.name }}  -->
        <!-- {{ modelValue[`${v.prop}`] }} -->
        <!-- :model-value="modelValue[(`${v.prop}`)  as keyof IUser]" -->
        <!-- {{ modelValue }} -->
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
            :label="g.value"
            name="type"
          />
        </el-checkbox-group>

        <el-radio-group v-model="formData[v.prop]" v-if="v.type == 'radio'">
          <el-radio :label="r.value" v-for="r in v.groups" :key="r.label">{{
            r.label
          }}</el-radio>
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
          :format="v.format"
          :value-format="v.format"
        />

        <el-col :span="v.span">
          <el-time-picker
            :label="v.label"
            v-model="formData[v.prop]"
            :placeholder="v.placeholder"
            v-if="v.type == 'time'"
            :is-range="v.isRange"
            :format="v.format"
            :value-format="v.format"
          />
        </el-col>

        <el-col :span="v.span">
          <el-date-picker
            :label="v.label"
            v-model="formData[v.prop]"
            :placeholder="v.placeholder"
            type="datetime"
            v-if="v.type == 'datetime'"
            :format="v.format"
            :value-format="v.format"
          />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button
          :type="v.type"
          @click="handleClick(formRef, v.event, v.cbFn)"
          v-for="(v, i) in data.btns"
          :key="i"
          >{{ v.label }}</el-button
        >
      </el-form-item>
    </el-form>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IFormItem, ISearchForm, CallbackFn } from '@/types'
import { reactive, ref, watch, onBeforeMount } from 'vue'
import type { FormInstance, ElForm } from 'element-plus'
import { IUser } from '@/types/views'

// const formRef = ref<InstanceType<typeof ElForm>>()
const formRef = ref<FormInstance>()

const props = withDefaults(
  defineProps<{
    modelValue?: IUser
    labelWidth?: string
    data: ISearchForm
    defaultInfo?: object
  }>(),
  {},
)

const formData = reactive({})
let rules = reactive({})

watch(
  () => props.modelValue,
  (n) => {
    console.log('n', n)
  },
)

const emits = defineEmits(['update:modelValue', 'queryForm', 'resetForm'])

// 更新数据触发的事件
// const updataVal = (val: any, prop: string) => {
//   emits('update:modelValue', { ...props.modelValue, [prop]: val })
// }
const handleClick = (formName: FormInstance | undefined, event: string, cb) => {
  if (!formName) return
  if (event == 'submit') {
    emits('queryForm', formData)
    // searchData(formName, cb)
  } else if (event == 'reset') {
    emits('resetForm')
    formName.resetFields()
  } else {
    cb && cb()
  }
}

const searchData = (formName: FormInstance, cb) => {
  formName.validate((valid) => {
    if (valid) {
      cb && cb(formData)
    } else {
    }
  })
}
const handleChange = () => {}

/**
 * @description: 初始化表单字段
 * @return {*} 对应字段 对应数据类型
 */
const formInit = () => {
  props.data.items.forEach((i) => {
    switch (i.type) {
      case 'checkbox':
        if (i.default) {
          formData[i.prop] = i.default
        } else {
          formData[i.prop] = []
        }
        break
      case 'switch':
        formData[i.prop] = false
        break
      default:
        formData[i.prop] = i.default
        break
    }
    rules = props.data.rules
  })

  if (props.defaultInfo) {
    for (const key in props.defaultInfo) {
      formData[key] = props.defaultInfo[key]
    }
  }
}

onBeforeMount(() => {
  formInit()
})

defineExpose({
  formRef,
  formData,
})
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
    // margin-left: 50%;
  }
}
</style>
