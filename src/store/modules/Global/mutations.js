export default {
    setToStateBreadcrumbs: (state, data) => {
        state.breadcrumbs = data
    },
    setShowPanel: (state) => {
        state.leftPanel.show = !state.leftPanel.show
    }
}
