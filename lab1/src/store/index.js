import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    words: JSON.parse(localStorage.getItem('words')) || [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    addWord(state, word) {
      state.words.push(word);
      localStorage.setItem('words', JSON.stringify(state.words));
    },
  },
  actions: {
    register({ commit }, user) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.find(u => u.username === user.username)) {
        throw new Error('Користувач вже існує');
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      commit('setUser', user);
    },
    login({ commit }, user) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let foundUser = users.find(u => u.username === user.username && u.password === user.password);
      if (!foundUser) {
        throw new Error('Неправильний логін або пароль');
      }
      commit('setUser', foundUser);
    },
    addWord({ commit }, word) {
      commit('addWord', word);
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    words: state => state.words,
  },
  modules: {},
});
