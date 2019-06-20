<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Left></Left>
        </el-aside>
        <el-main>
          <NavBar></NavBar>
          <Main class="content"></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Left from "@/pages/left";
import Main from "@/pages/main";
import NavBar from "@/pages/navbar";
export default {
  name: "admin",
  props: [""],
  data() {
    return {};
  },

  components: {
    Left,
    Main,
    NavBar
  }
};
</script>
<style lang='' scoped>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
 box-shadow: 0px -1px 0px #f7ecec inset; 
 margin-bottom: 10px
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 60px);
  padding: 0px
}
.content{
  padding: 10px 15px
}

body > .el-container {
  margin-bottom: 40px;
}
</style>