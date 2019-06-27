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
        v-for="(item) in editableTabs"
        :key="item.name"
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
      let tabs = this.editableTabs;
      let activeName = this.navIndex;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.$store.commit("tab/SET_NAV_Index", activeName);
      this.$store.commit("tab/SET_CLOSE_NAV", targetName);
      if (activeName === targetName) {
        this.$router.push({ name: "admin" });
      } else {
        this.$router.push({ name: activeName });
      }
    },
    tabClick(e) {
      this.$router.push({ name: e.$options.propsData.name });
    }
  }
};
</script>
<style>
</style>