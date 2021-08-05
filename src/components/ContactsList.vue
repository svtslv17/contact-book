<template>
  <div class="contacts" v-for="contact in contacts" v-bind:key="contact.id">
    <div class="card">
      <div class="card-title">
        {{ contact.name }} <strong>{{ contact.lastname }}</strong>
      </div>
      <div>
        <button class="btn">Details</button>
        <button class="btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 18px;
  width: 60%;
}
.card {
  padding: 15px;
  border: 1px solid rgb(145, 213, 218);
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
