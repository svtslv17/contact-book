<template>
  <div class="contacts">
    <contact-item
      v-for="contact in $store.getters.contacts"
      v-bind:key="contact.id"
      :contact="contact"
    >
    </contact-item>
  </div>
</template>

<script>
import ContactItem from "./ContactItem.vue";
export default {
  components: { ContactItem },
};
</script>

<style></style>
