import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      contacts: [
        { id: 1, name: "Jack", lastname: "Jordfgdan" },
        { id: 2, name: "Kane", lastname: "Jorfdgfdan" },
        { id: 3, name: "Linack", lastname: "dsdgordan" },
        { id: 4, name: "Fonack", lastname: "Jofdgfdgfdgfrdan" },
      ],
    };
  },
  actions: {
    addContact({ commit }, contact) {
      commit("ADD_CONTACT", contact);
    },
    delContact({ commit }, id) {
      commit("DEL_CONTACT", id);
    },
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts = [...state.contacts, contact];
    },
    DEL_CONTACT(state, id) {
      let delIdx = state.contacts.findIndex((c) => c.id == id);
      state.contacts.splice(delIdx, 1);
    },
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
  },
});
