<template>
  <div class="card">
    <div class="card-title" v-if="contact.name || contact.lastname">
      {{ contact.name }} <strong>{{ contact.lastname }}</strong>
    </div>
    <div class="card-title" v-else>
      Unnamed contact
    </div>
    <div>
      <button class="btn" @click="$router.push(`/contact/${contact.id}`)">
        Details
      </button>
      <button class="btn" @click="$store.dispatch('delContact', contact.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {},
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
