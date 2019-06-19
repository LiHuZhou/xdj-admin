<template>
  <div>
    <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px"><Left></Left></el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import Left from '@/pages/left'
export default {
  name: "admin",
  props: [""],
  data() {
    return {};
  },

  components: {
      Left
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
.el-header{
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
    min-height: calc(100vh - 60px);
}

body > .el-container {
  margin-bottom: 40px;
}

</style>