<template>
  <div class="table-container">
    <div class="inner">
      <el-table
        :data="
          tableData.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          )
        "
        style="width: 100%"
      >
        <el-table-column
          v-for="(item, index) in tHeaders"
          :key="index"
          :prop="item"
          :label="item | theaders"
          align="center"
          :show-overflow-tooltip="true"
          :width="item === 'partNo' ? '150px' : item.includes('date') ? '160px' : item === 'days' ? '80px' : item === 'note' ? '60px' : item === 'index' ? '60px' : 'auto' "
        />
      </el-table>
      <pagenation :total="tableData.length" :on-success="handleSuccess" />
    </div>
  </div>
</template>

<script>
import Pagenation from '@/components/Pagenation'
import { theaders } from '@/filters'
export default {
  components: { Pagenation },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 10
    }
  },
  filters: {
    theaders
  },
  computed: {
    tHeaders: {
      get () {
        return this.tableData.length
          ? Object.keys(this.tableData[0]) : []
      },
      set (val) {
        return val
      }
    }
  },
  methods: {
    handleSuccess (currentPage, pageSize) {
      this.currentPage = currentPage
      this.pageSize = pageSize
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
