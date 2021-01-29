<template>
  <el-button
    class="excel-btn"
    :loading="downloadLoading"
    icon="el-icon-document"
    @click="handleDownload"
  >
    Export 导出
  </el-button>
</template>

<script>
import { theaders } from '@/filters'
export default {
  components: {},
  props: {
    tableData: {
      type: Array
    },
    tHeaders: {
      type: Array
    },
    filename: {
      type: String
    },
    // 是否需要将表头转成中文
    zh: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      downloadLoading: false
    }
  },
  computed: {
    zhheaders: {
      get () {
        if (!this.zh) return this.tHeaders
        return this.tHeaders.map(item => {
          return theaders(item)
        })
      },
      set (val) {
        return val
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    // excel导出
    handleDownload () {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then((excel) => {
        const theaders = this.zhheaders // 导出所用的中文表头
        const filterVal = this.tHeaders // 表格本身的表头
        const list = this.tableData // 表格数据
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          filename: this.filename,
          header: theaders,
          data
        })
        this.downloadLoading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]))
    }
  }
}
</script>

<style lang="scss" scoped>
.excel-btn {
      color: #47ddff !important;
      border: none;
      &:hover{
        background: none;
        border-color: none;
        font-weight: bold;
      }
      &:active{
        font-weight: normal;
      }
    }
</style>
