<template>
  <div class="pop-up" v-if="show">
    <div class="pop-up__content">
      <p class="content"><slot></slot></p>
      <div class="pop-up__btns">
        <button class="btn" @click="yes">Yes</button>
        <button @click="no" class="btn no-btn">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop-up",
  props: {
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    yes() {
      this.$emit("yes", true);
    },
    no() {
      this.$emit("no", false);
    },
  },
};
</script>

<style scoped>
.no-btn {
  border-color: rgb(255, 124, 124);
}
.pop-up {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.pop-up__content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-height: 20%;
  min-width: 30%;
}
.content {
  margin: 10px;
  text-align: center;
  font-size: 20px;
}
.pop-up__btns {
  display: flex;
  justify-content: flex-end;
  width: 90%;
}
.pop-up__btns button {
  margin: 10px;
}
</style>
