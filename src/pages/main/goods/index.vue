<template>
  <div>
    <QueryTable class="query"></QueryTable>
    <el-button
      size="small"
      icon="el-icon-plus"
      @click="dialogFormVisible = true"
      style="margin-bottom:10px"
    >新增</el-button>
    <el-table :data="GoodsList" style="width: 100%">
      <el-table-column label="商品ID" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.gid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>商品描述: {{ scope.row.describe }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.gname }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="价格" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>

      <el-table-column label="类型" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商品图片" width="260">
        <template slot-scope="scope">
          <span>{{ scope.row.imageList }}</span>
        </template>
      </el-table-column>

      <el-table-column label="当前状态" width="120">
        <template slot-scope="scope">
          <el-tooltip :content="'当前状态: '" placement="top">
            <el-switch
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0"
            ></el-switch>
          </el-tooltip>
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

    <el-dialog title="商品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择分类">
            <el-option label="菜品" value="0"></el-option>
            <el-option label="主食" value="1"></el-option>
            <el-option label="饮品" value="2"></el-option>
            <el-option label="赠品" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc" rows="3" cols="20" resize="none"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
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
import Goods from "@/data/goods";
export default {
  name: "",
  data() {
    return {
      GoodsList: Goods,
      dialogTableVisible: false,
      dialogFormVisible: false,
      total: Goods.length,
      pageSize: "10", //每页条数
      currentPage: "1", //当前页
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        dialogImageUrl: "",
        dialogVisible: false
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    refashTable(pageSize, currentPage) {
      this.GoodsList = Goods;
      this.GoodsList = this.GoodsList.slice(
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