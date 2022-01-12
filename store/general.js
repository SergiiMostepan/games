export default {
    state: () =>({ 
      isLoading: false,
    }),
    actions: {
      setLoading({ commit }, data) {
        commit('SET_LOADING', data)
      }
    },
    mutations: {
      SET_LOADING (state, data) {
        state.isLoading = data
      },
    }
  };