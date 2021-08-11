<template>
  <app-header-title>Contact list</app-header-title>
  <the-create-button
    v-if="!onClickCreateButton"
    @click="switchForm"
  ></the-create-button>
  <contacts-form
    v-else
    :contact="defaultContact"
    :hasResetButtons="false"
    @saveContact="addContact"
  ></contacts-form>
  <contacts-list></contacts-list>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsList,
    ContactsForm,
  },
  /**
   * @description Данные страницы
   * @param {Boolean} onClickCreateButton Флаг нажатия кнопки "Создать"
   * @param {Object} defaultContact Создаваемый объект по умолчанию
   */
  data() {
    return {
      onClickCreateButton: false,
      defaultContact: {
        name: "",
      },
    };
  },
  methods: {
    /**
     * Переключает флаг onClickCreateButton
     * который открывает форму создания контакта
     */
    switchForm() {
      this.onClickCreateButton = !this.onClickCreateButton;
    },
    /**
     * Вызывает действие в хранилище по добавлению нового контакта
     */
    addContact(contact) {
      this.$store.dispatch("addContact", contact);
      this.switchForm();
    },
  },
};
</script>

<style></style>
