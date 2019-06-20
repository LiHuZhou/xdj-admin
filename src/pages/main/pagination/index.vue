<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 20, 30,50,100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["total"],
  data() {
    return {
      pageSize: "10",
      currentPage: "1"
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.bus.$emit("pagination", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.bus.$emit("pagination", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    }
  }
};
</script>

<style  scoped>
.el-pagination {
  text-align: right;
}
</style>