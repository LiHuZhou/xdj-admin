<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          v-for="(item,index) in menuList"
          :key="index"
        >
          <el-submenu :index="item.title">
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
                :class="$route.name==citem.name?'is-active is-opend':'no-active'"
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
  mounted() {
    if (this.$route.meta.title) {
      this.$store.dispatch("tab/addNavFun", {
        name: this.$route.name,
        title: this.$route.meta.title
      });
    }
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
.el-submenu.is-active {
  background: #fff;
}
.el-menu-item.is-active {
  background: skyblue;
  color: #fff;
}
.el-menu-item.no-active {
  background: #fff;
  color: #303133;
}
</style>