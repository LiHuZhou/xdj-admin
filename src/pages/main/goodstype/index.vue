<template>
  <div>
    <QueryTable class="query"></QueryTable>
    <el-button
      size="small"
      icon="el-icon-plus"
      @click="dialogFormVisible = true"
      style="margin-bottom:10px"
    >新增</el-button>
    <el-table :data="GoodsType" style="width: 100%">
      <el-table-column label="类别ID">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类别名称" >
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination class="pagination" :total="total"></Pagination>

    <el-dialog title="新增类别" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="类别ID" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类别名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import QueryTable from "@/pages/queryTable";
import Pagination from "@/pages/main/pagination";
import Type from "@/data/goodsType";
export default {
  name: "",
  data() {
    return {
      GoodsType: Type,
      dialogTableVisible: false,
      dialogFormVisible: false,
      total: Type.length,
      pageSize: "10", //每页条数
      currentPage: "1", //当前页
      formLabelWidth: "120px",
      form: {
        name: ""
      }
    };
  },
  methods: {
    refashTable(pageSize, currentPage) {
      this.GoodsType = Type;
      this.GoodsType = this.GoodsType.slice(
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
  },
  components: {
    QueryTable,
    Pagination
  }
};
</script>

<style  scoped>
</style>