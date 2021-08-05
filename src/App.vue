<template>
  <header>
    <h1 class="header-title">Contacts</h1>
  </header>
  <contacts-form @add="addContact"></contacts-form>
  <contacts-list :contacts="contacts"></contacts-list>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsList,
    ContactsForm,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: "Julia", lastname: "Bronson" },
        { id: 2, name: "Mark", lastname: "Mans" },
        { id: 3, name: "Deny", lastname: "Richt" },
        { id: 4, name: "Zoya", lastname: "Rasmos" },
        { id: 5, name: "Den", lastname: "Gonzales" },
      ],
    };
  },
  methods: {
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap");
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
}
h1,
h2,
h3 {
  font-weight: normal;
}
.btn,
input {
  padding: 5px;
  margin-left: 15px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(126, 235, 158);
  border-radius: 5px;
  font-size: 16px;
}

.header-title {
  align-items: center;
  font-size: 25px;
  width: 95%;
  padding: 20px;
  text-align: center;
}
</style>
