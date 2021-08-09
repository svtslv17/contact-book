<template>
  <header>
    <h1 class="header-title">Contact list</h1>
  </header>
  <create-btn v-if="!selectedCreateBtn" @click="switchForm"></create-btn>
  <contacts-form v-else></contacts-form>
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
    return { selectedCreateBtn: false };
  },
  methods: {
    switchForm() {
      this.selectedCreateBtn = !this.selectedCreateBtn;
    },
  },
};
</script>

<style></style>
