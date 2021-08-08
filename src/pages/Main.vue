<template>
  <header>
    <h1 class="header-title">Contact list</h1>
  </header>
  <contacts-form></contacts-form>
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
  // created() {
  // const contactsData = this.$store.state.contacts;
  // if (contactsData) {
  //   this.contacts = [...contactsData];
  // }
  // },
  // methods: {
  // addContact(contact) {
  //   this.contacts = [...this.contacts, contact];
  //   this.$store.commit("add", this.contacts);
  // },
  // deleteContact(id) {
  //   let delIdx = this.contacts.findIndex((c) => c.id == id);
  //   this.contacts.splice(delIdx, 1);
  //   this.$store.commit("add", this.contacts);
  // },
  // },
  // watch: {
  //   "$store.contacts": {
  //     handler(newContacts) {
  //       console.log("store");
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style></style>
