<template>
  <div class="container">
    <contacts-form
      :contact="giveContact($route.params.id)"
      @saveContact="saveContact"
      :resetBtns="true"
    ></contacts-form>
  </div>
</template>

<script>
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsForm,
  },
  methods: {
    giveContact(id) {
      return this.$store.getters.contacts.find((c) => c.id == id);
    },
    saveContact(contact) {
      this.$store.dispatch("editContact", contact);
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
