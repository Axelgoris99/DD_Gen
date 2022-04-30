<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
  </div>
</template>

<script>
export default {
  name: "MyInputView",
};
</script>
<style scoped>
.input {
  display: row;
  background-color: white;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
