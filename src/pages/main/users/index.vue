<template>
  <div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column label="用户ID" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row._uid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="用户名" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="密码" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.password }}</span>
        </template>
      </el-table-column>

      <el-table-column label="头像" width="260">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.photo }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建日期" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :total="total"></Pagination>
  </div>
</template>

<script>
import User from "@/data/users";
import Pagination from "@/pages/main/pagination";
export default {
  name: "user",
  data() {
    return {
      userList: User,
      total: User.length,
      pageSize: "10", //每页条数
      currentPage: "1" //当前页
    };
  },
  components: {
    Pagination
  },
  methods: {
    refashTable(pageSize, currentPage) {
      this.userList=User;
      this.userList = this.userList.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
    }
  },
  mounted() {
    this.refashTable(this.pageSize, this.currentPage);
    this.bus.$on("pagination", obj => {
      this.pageSize = obj.pageSize;
      this.currentPage = obj.currentPage;
      this.refashTable(this.pageSize, this.currentPage);
    });
  },
  beforeDestroy() {
    this.bus.$off("pagination");
  }
};
</script>

<style lang="" scoped>
</style>