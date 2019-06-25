<template>
  <div class="navbar">
    <el-tabs
      :value="navIndex"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="tabClick($event)"
    >
      <el-tab-pane
        v-for="(item,index) in editableTabs"
        :key="index"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      editableTabs: state => state.tab.openNav,
      navIndex: state => state.tab.navIndex
    })
  },
  methods: {
    removeTab(targetName) {
      this.editableTabs.forEach((element, index) => {
        if (this.editableTabs.length == 1) {
          this.$store.dispatch("tab/delNavFun", index);
          this.$router.push({ name: "admin" });
        } else if (this.editableTabs.length > 1) {
            // if(targetName==element.name){
            //    if()
            // }
          // if (targetName == element.name) {
          //   this.$store.dispatch("tab/delNavFun", index);
          //   if (index == this.editableTabs.length - 1) {
          //     //  this.$router.push({ name: this.editableTabs[index - 1].name });
          //   } else {
          //     //this.$router.push({ name: this.editableTabs[index + 1].name });
          //   }
          // }
        }
      });
    },
    tabClick(e) {
      this.$router.push({ name: e.$options.propsData.name });
    }
  }
};
</script>

<style>
</style>