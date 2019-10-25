import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        asyncCount: 0,
        todos: [
            { id: 1, text: 'a', done: true },
            { id: 2, text: 'b', done: false },
            { id: 3, text: 'c', done: true },
            { id: 4, text: 'd', done: true },
        ],
    },
    getters: {
        todosDone: state => state.todos.filter(v => v.done),
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.n;
        },
    },
    actions: {
        asyncIncrement(context) {
            context.commit('increment');
        },
    },
});
