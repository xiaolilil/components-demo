<template>
  <ul id="searchGroup" class="filter">
    <li v-for="item in data" :key="item.id" :class="item.type" style="margin-right: 20px;">
<!--      <label>{{item.label}}</label>-->
<!--      &lt;!&ndash; type:text &ndash;&gt;-->
      <el-input v-if="item.type === 'text'" clearable v-model="filterData[item.code]" :placeholder="item.placeholder"
                size="mini"></el-input>

      <!-- type:select -->
      <el-select v-if="item.type === 'select'" v-model="filterData[item.code]" :placeholder="item.placeholder" filterable clearable
                 size="mini">
        <el-option v-for="data in item.data" :key="data.id" :label="data.label" :value="data.value">
        </el-option>
      </el-select>

      <!-- type:multiSelect -->
      <el-select v-if="item.type === 'multiSelect'" v-model="filterData[item.code]" :placeholder="item.placeholder"
                 clearable multiple collapse-tags filterable size="mini">
        <el-option v-for="data in item.data" :key="data.id" :label="data.label" :value="data.value">
        </el-option>
      </el-select>

      <!-- type:datepicker -->
      <el-date-picker v-if="item.type === 'datepicker'" v-model="filterData[item.code]" type="date"
                      :placeholder="item.placeholder" value-format="yyyy-MM-dd" size="mini">
      </el-date-picker>

      <!-- type:daterange -->
      <el-date-picker v-if="item.type === 'daterange'" v-model="filterData[item.code]" type="daterange"
                      range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini" value-format="yyyy-MM-dd"  @change="daterangeChange">
      </el-date-picker>

      <!-- type:datetimerange -->
      <el-date-picker v-if="item.type === 'datetimerange'" v-model="filterData[item.code]" type="datetimerange"
                      range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini" value-format="yyyy-MM-dd HH:mm:ss"  @change="daterangeChange">
      </el-date-picker>

      <!-- type:cascader -->
      <el-cascader v-if="item.type === 'cascader'" v-model="filterData[item.code]" :options="item.data" size="mini"
                   :props="item.props" :show-all-levels="false" :filterable="!item.props.multiple" clearable collapse-tags>
      </el-cascader>
    </li>
    <li>
      <div class="btn-search">
        <el-button type="primary" size="mini" @click="filterClickHandle">
          <i id="iconSousuo" class="iconfont icon-sousuo"></i>
          {{t("common.search")}}</el-button>
        <el-button size="mini" @click="reset">
          <i id="iconChongzhi" class="iconfont icon-zhongzhi"></i>
          {{t("common.reset")}}</el-button>
      </div>
    </li>
  </ul>
</template>

<script>
import {reactive} from "vue"
import {filterObj} from "utils/dealData.js";
import { useI18n } from "vue-i18n";
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(){
    const { t } = useI18n();
    let filterData = reactive({});
    return{
      filterData,
      t
    }
  },
  data() {
    return {
      emitFilterData: {}
    }
  },
  created() {
    this.buildKey(this.data)
  },
  computed: {
  },
  methods: {
    // 动态设置filterData的key
    buildKey(arr) {
      if (arr.length) {
        arr.forEach(item => {
          if (item.type === 'daterange') {
            // this.$set(this.filterData, item.startTimeCode, '')
            // this.$set(this.filterData, item.endTimeCode, '')
            this.filterData[item.startTimeCode] = "";
            this.filterData[item.endTimeCode] = "";
          } else {
            if (item.defaultSelected) {
              this.filterData[item.code] = item.defaultSelected;
              // this.$set(this.filterData, item.code, item.defaultSelected)
            } else {
              // this.$set(this.filterData, item.code, '')
              this.filterData[item.code] = "";

            }
          }
        })
      }
    },
    daterangeChange() {
    },
    filterClickHandle() {
      // 将daterange日期范围的数据拆解成传入的startTimeCode和endTimeCode并分别赋值 Begin
      this.emitFilterData = JSON.parse(JSON.stringify(this.filterData))
      this.data.forEach(item => {
        if (item.type === 'daterange') {
          if (this.filterData[item.code]) {
            this.emitFilterData[item.startTimeCode] = this.filterData[item.code][0]
            this.emitFilterData[item.endTimeCode] = this.filterData[item.code][1]
          }
          this.$delete(this.emitFilterData, item.code)
        }
      })
      // 将daterange日期范围的数据拆解成传入的startTimeCode和endTimeCode并分别赋值 End


      this.$emit('filterClickHandle',filterObj(this.emitFilterData));
    },
    reset(){
      if(this.data.length){
        this.data.forEach((item,index)=>{
          this.filterData[item.code] = "";
        })
      }
    },
    getFilterData() {
      return this.filterData
    }
  },
}
</script>

<style scoped lang="scss">
#searchGroup {
  display: flex;
  align-items: flex-start;
  background: #fff;
  overflow: hidden;
  ul {
    flex: 1;
    // border-right: solid 1px $color-border-base;
    li {
      display: flex;
      align-items: center;
      float: left;
      width: 25%;
      //margin-right: 20px!important;
      padding: 6px 10px;
      &.daterange,
      &.datetimerange {
        width: 50%;
      }
      .el-input,
      .el-select,
      .el-cascader,
      .el-date-editor {
        flex: 1;
        .el-input__inner,
        .el-range-input {
          background: #B3B3B3;
          border: none;
        }
      }
      .el-date-editor--daterange,
      .el-date-editor--datetimerange {
        background: #B3B3B3;
        border: none;
      }
      .el-select {
        &__tags {
          & > span {
            display: flex;
            .el-tag {
              background: #e9e9eb;
            }
          }
        }
      }
      .el-date-editor {
        .el-range-input {
          width: 45%;
        }
      }
    }
  }
  .btn-search {
    //width: 100px;
    //text-align: right;
    //margin-left: 20px!important;
    :deep(.el-button--mini){
      //font-size: 12px;
      .iconfont{
        font-size: 12px!important;
        //padding-right: 4px;
      }
      #iconSousuo, #iconChongzhi{
        font-size: 12px;
      }
    }

  }
}
</style>