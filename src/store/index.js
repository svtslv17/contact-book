import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      contacts: [
        {
          id: 1,
          name: "Freddie",
          lastname: "Mercury",
          number: "+375334569032",
          email: "test@test.com",
          address: "New-York, Broadway street 98-5",
        },
        {
          id: 2,
          name: "Robert",
          lastname: "Plant",
          number: "+375334569032",
          email: "test@test.com",
          address: "London, Chemberton street 98-5",
        },
        {
          id: 3,
          name: "Glenn",
          lastname: "Hughes",
          number: "+375334569032",
          email: "test@test.com",
          address: "Los-Angeles, Hrushchov street 98-5",
        },
        {
          id: 4,
          name: "John",
          lastname: "Lennon",
          number: "+375334569032",
          email: "test@test.com",
          address: "Moscow, Murmanskaya street 98-5",
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
    editContact({ commit }, contact) {
      commit("EDIT_CONTACT", contact);
    },
  },
  mutations: {
    /**
     * @description Добавление нового контакта в хранилище
     * @param {Object} state Состояние хранилища
     * @param {Object} contact Новый контакт
     */
    ADD_CONTACT(state, contact) {
      if (contact.name !== "" && contact.name) {
        state.contacts = [...state.contacts, contact];
      }
    },
    /**
     * @description Удаление контакта из хранилища
     * @param {Object} state Состояние хранилища
     * @param {Object} contact Удаляемый контакт
     */
    DEL_CONTACT(state, id) {
      let delIdx = state.contacts.findIndex((c) => c.id == id);
      state.contacts.splice(delIdx, 1);
    },
    /**
     * @description Редактирование контакта из хранилища
     * @param {Object} state Состояние хранилища
     * @param {Object} contact Отредактированный контакт
     */
    EDIT_CONTACT(state, contact) {
      let editIdx = state.contacts.findIndex((c) => c.id === contact.id);
      state.contacts.splice(editIdx, 1, contact);
    },
  },
  getters: {
    /**
     * @description Возвращает массив контактов из хранилища
     * @param {Object} state Состояние хранилища
     * @returns Массив контактов
     */
    contacts(state) {
      return state.contacts;
    },
  },
});
