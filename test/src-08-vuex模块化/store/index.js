import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)
const CountOptions = {
    namespaced: true,
    actions: {
        odd(context, value) {
            if (context.state.sum % 2) {
                context.commit('add', value)
            }
        },
        wait(context, value) {
            setTimeout(() => {
                context.commit('add', value)
            }, 500)
        }
    },
    mutations: {
        add(state, value) {
            state.sum += value
        },
        reduce(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        address: "xx",
        subject: 'vue'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
const PersonOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        addP(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [
            {id: '001', name: 'xx'}
        ]
    },
    getters: {}
}


const store = new Vuex.Store({
    modules: {
        CountOp: CountOptions,
        PersonOp: PersonOptions
    }
})
export default store