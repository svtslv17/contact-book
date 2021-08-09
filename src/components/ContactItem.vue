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
      <button class="btn" @click="show = true">
        Delete
      </button>
      <pop-up
        :show="show"
        @yes="$store.dispatch('delContact', contact.id)"
        @no="show = false"
        >Do you really want to remove <strong>{{ contact.name }}</strong> from
        your contacts?</pop-up
      >
    </div>
  </div>
</template>

<script>
import PopUp from "@/components/UI/PopUp.vue";
export default {
  components: {
    PopUp,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { show: false };
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
