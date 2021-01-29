<template>
  <div :total="total">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 5, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      hide-on-single-page
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    // 总条数
    total: {
      type: Number,
      default: 0
    },
    onSuccess: Function
  },
  data () {
    return {
      // 当前页码
      currentPage: 1,
      // 每页的数据条数
      pageSize: 10
    }
  },
  methods: {
    // 监听 pageSize 改变的事件
    handleSizeChange (newSize) {
      console.log(`每页 ${newSize} 条`)
      this.currentPage = 1
      this.pageSize = newSize
      this.onSuccess(this.currentPage, this.pageSize)
    },
    // 监听 页码值 改变的事件
    handleCurrentChange (newPage) {
      console.log(`当前页: ${newPage}`)
      this.currentPage = newPage
      this.onSuccess(this.currentPage, this.pageSize)
    }
  }
}
</script>

<style lang="scss" scoped>

.el-pagination {
  margin: 5px 0;
}
::v-deep.el-pagination .el-select .el-input .el-input__inner {
  background: #fff !important;
}
</style>
