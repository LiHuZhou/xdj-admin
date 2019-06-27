<template>
  <div>
    <Query class="query"></Query>
    <el-table :data="orderList" style="width: 100%">
      <el-table-column label="用户ID">
        <template slot-scope="scope">
          <span>{{ scope.row._uid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单人">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>联系方式: {{ scope.row.mobile }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="订单号">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>订单信息:{{scope.row.orderInfo }}</p>
            <p>订单金额:{{scope.row.price }}</p>
            <p>备注: {{ scope.row.remarks }}</p>

            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.orderId }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="下单时间">
        <template slot-scope="scope">
          <span>{{ scope.row.orderTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :total="total" class="pagination"></Pagination>
  </div>
</template>

<script>
import Orders from "@/data/orders";
import Pagination from "@/pages/main/pagination";
import Query from "@/pages/queryTable";
export default {
  name: "orders",
  data() {
    return {
      orderList: Orders,
      total: Orders.length,
      pageSize: "10", //每页条数
      currentPage: "1" //当前页
    };
  },
  components: {
    Pagination,
    Query
  },
  methods: {
    refashTable(pageSize, currentPage) {
      this.orderList = Orders;
      this.orderList = this.orderList.slice(
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
.pagination {
  background: #fff;
  line-height: 45px;
  padding: 15px 30px;
}
</style>