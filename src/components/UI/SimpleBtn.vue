<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "simple-btn",
};
</script>

<style scoped>
.btn {
  padding: 5px;
  margin-left: 15px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(126, 235, 158);
  border-radius: 5px;
  font-size: 16px;
}
</style>
