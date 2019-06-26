<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          v-for="(item,index) in menuList"
          :key="index"
        >
          <el-submenu :index="index+''">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="(citem,cindex) in item.children" :key="cindex">
              <el-menu-item
                :index="cindex+''"
                :route="{name:citem.name}"
                :data-name="citem.name"
                @click="addTab($event)"
              >{{citem.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menuList from "@/config/menuConfig";
export default {
  name: "Left",
  data() {
    return {
      menuList
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    addTab(e) {
      this.$store.dispatch("tab/addNavFun", {
        name: e.$el.dataset.name,
        title: e.$el.innerText
      });
    }
  }
};
</script>
<style lang='' scoped>
.el-row,
.el-col {
  width: 200px;
}
</style>