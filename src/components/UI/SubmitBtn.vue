<template>
  <button class="submit-btn"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped>
.submit-btn {
  padding: 5px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 0;
  background-color: rgb(255, 227, 175);
  border: 1px solid rgb(218, 178, 145);
}
</style>
