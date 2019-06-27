const tab = {
  namespaced: true,
  state: {
    openNav: [],
    navIndex: "",
    routerState: true
  },
  mutations: {
    SET_OPEN_NAV: (state, navItem) => {
      state.openNav.push(navItem);
    },
    SET_CLOSE_NAV: (state, index) => {
     state.openNav=state.openNav.filter(tab => tab.name !== index);
    },
    SET_NAV_Index: (state, Index) => {
      state.navIndex = Index;
    },
    SET_Router_State: (state, routerState) => {
      state.routerState = routerState;
    }
  },
  actions: {
    addNavFun: ({
      commit,
      state
    }, item) => {
      if (state.openNav.length > 0) {
        if (JSON.stringify(state.openNav).indexOf(JSON.stringify(item)) == -1) {
          commit("SET_OPEN_NAV", item);
          commit("SET_NAV_Index", item.name);
        } else {
          state.openNav.forEach(obj => {
            if (obj.name == item.name) {
              commit("SET_NAV_Index", item.name);
            }
          })
        }
      } else {
        commit("SET_OPEN_NAV", item);
        commit("SET_NAV_Index", item.name);
      }
    },
    delNavFun: ({
      commit,
      state
    }, item) => {
      commit('SET_CLOSE_NAV', item);
    }
  }
};

export default tab;
