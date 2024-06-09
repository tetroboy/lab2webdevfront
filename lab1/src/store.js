import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dictionary: []
    },
    mutations: {
        ADD_WORD(state, word) {
            state.dictionary.push(word);
            localStorage.setItem('dictionary', JSON.stringify(state.dictionary));
        },
        REMOVE_WORD(state, index) {
            state.dictionary.splice(index, 1);
            localStorage.setItem('dictionary', JSON.stringify(state.dictionary));
        },
        INIT_DICTIONARY(state) {
            const storedDictionary = JSON.parse(localStorage.getItem('dictionary'));
            if (storedDictionary) {
                state.dictionary = storedDictionary;
            }
        }
    },
    actions: {
        addWord({ commit }, word) {
            commit('ADD_WORD', word);
        },
        removeWord({ commit }, index) {
            commit('REMOVE_WORD', index);
        },
        initDictionary({ commit }) {
            commit('INIT_DICTIONARY');
        }
    }
});