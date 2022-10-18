<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
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
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>

      <!-- <el-row>
        <template v-for="i in formItems" :key="i.label">
          <el-col>
            <el-form-item
              v-if="!i.isHidden"
              :label="i.label"
              :rules="i.rules"
              class="form-item"
              :style="itemStyle"
            >
              <template v-if="i.type === 'input' || i.type === 'password'">
                <el-input
                  v-bind="i.otherOptions"
                  :model-value="modelValue(`${i.field}`)"
                  :placeholder="i.placeholder"
                  :show-password="i.type === 'password'"
                  @update:model-value="updataVal($event, i.field)"
                />
              </template>
              <template v-else-if="i.type === 'select'">
                <el-select
                  :model-value="modelValue(`${i.field}`)"
                  :placeholder="i.placeholder"
                  v-bind="i.otherOptions"
                  style="width: 100%"
                  @update:model-value="updataVal($event, i.field)"
                >
                  <el-option
                    v-for="option in i.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="i.type === 'datepicker'">
                <el-date-picker
                  v-bind="i.otherOptions"
                  :model-value="modelValue(`${i.field}`)"
                  @update:model-value="updataVal($event, i.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row> -->
    </el-form>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IFormItem } from '@/types'
import { reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: any
    // formItems: IFormItem[]
    labelWidth?: string
    itemStyle?: object
    colLayout?: object
    formWidth?: number
    data: any
  }>(),
  {
    labelWidth: '100px',
    itemStyle: () => {
      return { padding: '10px 10px' }
    },
    colLayout: () => {
      return {
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }
    },
  },
)

const formData = reactive({
  name: '',
  date: '',
  address: '',
})

const emit = defineEmits(['update:modelValue', 'queryForm', 'resetForm'])

// 更新数据触发的事件
const updataVal = (val: any, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: val })
}
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
