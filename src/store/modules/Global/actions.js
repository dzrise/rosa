export default {
    setBreadcrumbs({commit}, data) {
        commit('setToStateBreadcrumbs', data)
    },
    setShowPanel: ({commit}) => {
        commit('setShowPanel')
    },
}
