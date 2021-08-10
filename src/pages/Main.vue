<template>
  <header-title>Contact list</header-title>
  <create-btn v-if="!selectedCreateBtn" @click="switchForm"></create-btn>
  <contacts-form
    v-else
    :contact="defaultContact"
    :resetBtns="false"
    @saveContact="addContact"
  ></contacts-form>
  <contacts-list></contacts-list>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import ContactsForm from "@/components/ContactsForm";
import CreateBtn from "@/components/UI/CreateBtn.vue";

export default {
  components: {
    ContactsList,
    ContactsForm,
    CreateBtn,
  },
  data() {
    return { selectedCreateBtn: false, defaultContact: { name: "" } };
  },
  methods: {
    switchForm() {
      this.selectedCreateBtn = !this.selectedCreateBtn;
    },
    addContact(contact) {
      this.$store.dispatch("addContact", contact);
      this.selectedCreateBtn = !this.selectedCreateBtn;
    },
  },
};
</script>

<style></style>
