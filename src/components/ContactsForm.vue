<template>
  <form class="contact-form" @submit.prevent>
    <div class="fields">
      <div
        class="fields__item"
        v-for="(field, idx) in Object.entries(newContact)"
        :key="idx"
      >
        {{ field[0] }}:<input
          type="text"
          :placeholder="field[1]"
          v-model="newContact[`${field[0]}`]"
        />
      </div>
      <div class="custom-field" v-for="(custom, idx) in customs" :key="idx">
        <input type="text" placeholder="Title" v-model="custom[0]" />
        :
        <input type="text" placeholder="Value" v-model="custom[1]" />
        <button class="btn del-btn" @click="delCustom(idx)">
          Delete
        </button>
      </div>
      <button class="btn custom-btn" @click="addCustom">
        Add custom field
      </button>
    </div>
    <submit-btn @click="saveContact">Save Contact</submit-btn>
  </form>
</template>

<script>
import SubmitBtn from "@/components/UI/SubmitBtn.vue";
export default {
  components: { SubmitBtn },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.newContact = Object.assign({}, this.contact);
  },
  data() {
    return {
      newContact: {
        name: "",
        lastname: "",
      },
      customs: [],
    };
  },
  methods: {
    delCustom(id) {
      console.log(id);
      this.customs.splice(id, 1);
    },
    addCustom() {
      this.customs.push(["", ""]);
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
.contact-form,
.create-btn {
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
.create-btn {
  background-color: rgb(255, 227, 175);
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.create-btn__img {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.custom-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.field-title {
  margin-right: 10px;
}
.custom-field {
  display: flex;
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
.add-btn {
  margin: 0;
  background-color: rgb(255, 227, 175);
  border: 1px solid rgb(218, 178, 145);
  width: 20%;
}
.custom-btn {
  margin: 8px 0;
}
.del-btn {
  border: rgb(255, 120, 120) solid 1px;
  color: rgb(255, 120, 120);
}
</style>
