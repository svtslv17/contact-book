<template>
  <div class="container">
    <contacts-form :contact="contact($route.params.id)"></contacts-form>
  </div>
</template>

<script>
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsForm,
  },
  methods: {
    contact(id) {
      return this.$store.getters.contacts.find((c) => c.id == id);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
