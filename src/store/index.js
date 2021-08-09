import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      contacts: [
        {
          id: 1,
          name: "Jack",
          lastname: "Jordfgdan",
          number: "+375334569032",
          email: "test@test.com",
          address: "Minsk, Vyazov street 98-5",
        },
        {
          id: 2,
          name: "Kane",
          lastname: "Jorfdgfdan",
          number: "+375334569032",
          email: "test@test.com",
          address: "Minsk, Vyazov street 98-5",
        },
        {
          id: 3,
          name: "Linack",
          lastname: "dsdgordan",
          number: "+375334569032",
          email: "test@test.com",
          address: "Minsk, Vyazov street 98-5",
        },
        {
          id: 4,
          name: "Fonack",
          lastname: "Jofdgfdgfdgfrdan",
          number: "+375334569032",
          email: "test@test.com",
          address: "Minsk, Vyazov street 98-5",
        },
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
