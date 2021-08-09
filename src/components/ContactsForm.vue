<template>
  <form class="contact-form" @submit.prevent>
    <div class="fields">
      <div v-if="resetBtns">
        <button class="btn return-btn" @click="returnFields">Return</button>
        <button
          class="btn back-btn"
          @click="returnLastChanges"
          v-if="lastChangedField !== '' && firstFocusInput"
        >
          Step back
        </button>
      </div>
      <div
        class="fields__item"
        v-for="(field, idx) in Object.entries(newContact)"
        :key="idx"
      >
        <div v-if="field[0] !== 'id'">
          {{ field[0] }}:
          <input
            type="text"
            :placeholder="field[1]"
            v-model="newContact[`${field[0]}`]"
            @input="firstFocusInput = true"
          />
          <button
            class="btn del-btn"
            v-if="field[0] !== 'name'"
            @click="deleteField(`${field[0]}`)"
          >
            Delete
          </button>
        </div>
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
    resetBtns: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  mounted() {
    this.newContact = Object.assign({}, this.contact);
    this.lastChangedField = "";
  },
  data() {
    return {
      newContact: {
        name: "",
        lastname: "",
      },
      customs: [],
      lastChangedField: "",
      firstFocusInput: false,
    };
  },
  methods: {
    delCustom(id) {
      this.customs.splice(id, 1);
    },
    addCustom() {
      this.customs.push(["", ""]);
    },
    deleteField(fieldName) {
      delete this.newContact[fieldName];
    },
    returnFields() {
      this.newContact = Object.assign({}, this.contact);
    },
    returnLastChanges() {
      this.newContact[this.lastChangedField] = this.contact[
        this.lastChangedField
      ];
    },
    saveContact() {
      let savedContact = {};
      if (!this.newContact.id) {
        this.newContact.id = Date.now();
      }
      this.customs = this.customs.filter((field) => field[0] !== "");
      if (this.newContact !== {} && this.customs !== []) {
        savedContact = Object.fromEntries([
          ...Object.entries(this.newContact),
          ...this.customs,
        ]);
      } else if (this.newContact === {} && this.customs === []) {
      } else if (this.customs === []) {
        savedContact = this.newContact;
      } else if (this.newContact === {}) {
        savedContact = Object.fromEntries(this.customs);
      }
      this.$emit("saveContact", savedContact);
    },
  },
  computed: {
    // watch the entire as a new object
    computedNewContact: function() {
      return Object.assign({}, this.newContact);
    },
  },
  watch: {
    computedNewContact: {
      handler(newC, oldC) {
        for (let field in oldC) {
          if (oldC[field] !== newC[field]) {
            this.lastChangedField = field;
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form-title {
  font-sze: 20px;
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
.return-btn,
.back-btn {
  border: rgb(255, 203, 203) solid 1px;
  color: rgb(255, 203, 203);
}
</style>
