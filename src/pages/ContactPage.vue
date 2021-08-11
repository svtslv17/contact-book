<template>
  <app-header-title>Details</app-header-title>
  <contacts-form
    :contact="findContact($route.params.id)"
    @saveContact="editContact"
    :hasResetButtons="true"
  ></contacts-form>
</template>

<script>
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsForm,
  },
  methods: {
    /**
     * @description Ищет контакт в хранилище по id
     *  @param {Number} id Id контакта
     * @returns Контакт
     */
    findContact(id) {
      return this.$store.getters.contacts.find((c) => c.id == id);
    },
    /**
     * @description Вызывает действие редактирования контакта в хранилище
     *  @param {Object} contact Отредактированный контакт
     */
    editContact(contact) {
      this.$store.dispatch("editContact", contact);
      this.goMainPage();
    },
    /**
     * @description Возвращает приложение на страницу списка контактов
     */
    goMainPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
