import Vue from 'vue';
import Vuex from 'vuex';

import { getBookSummaries, getBookByID } from './util/bookApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookList: [],
    bookSummaries: {},
    bookDetails: {},
  },
  getters: {
    books(state) {
      return state.bookList.map(id => state.bookSummaries[id]);
    },

    getBook(state) {
      return id => ({ ...state.bookSummaries[id], ...state.bookDetails[id] });
    },
  },
  mutations: {
    setBookList(state, books) {
      const bookList = books.map(book => book.id);
      const bookSummaries = books.reduce((map, summary) => ({ ...map, [summary.id]: summary }), {});
      return Object.assign(state, { bookList, bookSummaries });
    },

    setBookDetails(state, details) {
      const bookDetails = { ...state.bookDetails, [details.id]: details };
      return Object.assign(state, { bookDetails });
    },
  },
  actions: {
    async loadBookList({ commit }) {
      if (!this.state.bookList.length) {
        const result = await getBookSummaries();

        commit('setBookList', result.data);
      }
    },

    async loadBookDetails({ commit, dispatch }, id) {
      if (!this.state.bookSummaries[id]) {
        dispatch('loadBookList');
      }

      if (!this.state.bookDetails[id]) {
        const result = await getBookByID(id);

        commit('setBookDetails', { ...result.data, id });
      }
    },
  },
});
