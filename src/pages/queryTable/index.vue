<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入关键字" v-model="queryString" clearable></el-input>
          <el-button type="primary">查询</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "queryTable",
  data() {
    return {
      queryString: ""
    };
  }
};
</script>

<style  scoped>
.grid-content{background: #fff;padding: 10px;text-align: right}
.el-input{
  width: 220px;
}
</style>