const Baskets = {
    namespaced: true,
    state: () => ([]),
    getters: {
        getBaskets:  state => state,
        getBasket: (state) => (id) => {
            let cat = state.find(item => item.id === id)
            return cat
        }
    },
    actions: {
        addBasket: (context, data) => {
            let found = context.state.some(function (item) {
                return item.id === data.id;
            });
            if (!found) {
                context.commit('addBasket', data)
            } else {
                context.commit('updateBasket', data)
            }
        },
        delBasket: (context, id) => {
            context.commit('delBasket', id);
        },
        editBasket: (context, data) => {
            context.commit('editBasket', data);
        },
        updateBasket: (context, data) => {
            context.commit('updateBasket', data);
        },
    },
    mutations: {
        // clearState: (state) => state = [],
        addBasket: (state, data) => {
            state.push(data);
        },
        delBasket: (state, id) => {
            let index = state.findIndex(item => item.id === id)
            state.splice(index, 1)
        },
        updateBasket: (state,  data) => {
            let index = state.findIndex(item => item.id === data.id)
            state[index] = data;
        },
        editBasket: (state, data) => {
            let index = state.findIndex(item => item.id === data.id)
            state[index][data.key] = data.value;
        },
    }

}

export default Baskets;
