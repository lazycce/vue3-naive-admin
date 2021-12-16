const state = {
  roles: []
}

const mutations = {
  SET_ROLES: (state: any, roles: any) => {
    state.roles = roles
  }
}

const getters = {
  getRoles: (state: any) => {
    return state.roles
  }
}


const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}