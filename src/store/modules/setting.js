import { sidebar } from '@/utils/sidebar'
/*
    @description get sidebar list
*/

const state = {
  menuList: []
}

const mutations = {
  SET_MENULIST: (state, path) => {
    state.menuList = sidebar(path)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
