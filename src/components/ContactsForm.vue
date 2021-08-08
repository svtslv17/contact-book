<template>
  <button v-if="!selectedCreateBtn" @click="switchForm">
    Create
  </button>
  <form class="contact-form" @submit.prevent v-else>
    <h2 class="form-title">Create contact</h2>
    <div class="required-field">
      <h3 class="field-title">Required fields</h3>
      <div class="fields">
        <input type="text" placeholder="Name" v-model="contact.name" />
        <input type="text" placeholder="LastName" v-model="contact.lastname" />
      </div>
      <button class="btn" @click="switchForm">Add</button>
    </div>
    <div class="custom-field">
      <h3 class="field-title">Custom field</h3>
      <input type="text" placeholder="Custom title" />
      <input type="text" placeholder="Custom value" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        lastname: "",
      },
      selectedCreateBtn: false,
    };
  },
  methods: {
    switchForm() {
      this.selectedCreateBtn = !this.selectedCreateBtn;
    },
  },
};
</script>

<style scoped>
.form-title {
  font-size: 20px;
  padding: 20px;
  width: 100%;
}
.contact-form {
  padding: 15px;
  border: 1px solid rgb(218, 178, 145);
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.custom-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.field-title {
  margin-right: 10px;
}
.required-field,
.custom-field {
  display: flex;
  margin: 10px;
  align-items: center;
}
.fields {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
input {
  margin: 5px;
}
</style>
