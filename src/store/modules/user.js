import { getToken, removeToken } from '@/utils/auth'
import Cookie from 'vue-cookies'

/*
    * @description get this user info by cookie
    * @params {string} token
              {string} name
              {string} jobId
              {array} roles
*/

const state = {
  token: getToken(),
  name: '',
  jobId: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_JOBID: (state, id) => {
    state.jobId = id
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login ({ commit }) {
    const data = Cookie.get('userInfo')
    commit('SET_NAME', data.real_name)
    commit('SET_JOBID', data.username)
    commit('SET_ROLES', data.roles)
  },

  // user logout
  logout ({ commit, state, dispatch }) {
    commit('SET_TOKEN', '')
    commit('SET_NAME', '')
    commit('SET_ROLES', [])
    removeToken()
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
