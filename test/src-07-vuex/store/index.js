import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)
const actions = {
    // add(context, value) {
    //     context.commit('add', value)
    // },
    // reduce(context, value) {
    //     context.commit('reduce', value)
    // },
    odd(context, value) {
        if (context.state.sum % 2) {
            context.commit('add', value)
        }
    },
    wait(context, value) {
        setTimeout(() => {
            context.commit('add', value)
        }, 500)
    },

}
const mutations = {
    add(state, value) {
        state.sum += value
    },
    reduce(state, value) {
        state.sum -= value
    },
    addP(state, value) {
        state.persons.unshift(value)
    }
}
const state = {
    sum: 0,
    address: "xx",
    subject: 'vue',
    persons: [
        {id: '001', name: 'xx'}
    ]
}
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export default store