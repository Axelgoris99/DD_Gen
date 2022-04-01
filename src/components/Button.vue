<template>
  <b-button pill variant="primary" @click="click">{{ text }} </b-button>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    text: String,
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn-primary {
  color: black !important;
  background-image: linear-gradient(
    to bottom right,
    #bc9c22,
    #ffec4e
  ) !important;
}
.btn-primary:hover {
  background-color: rgb(0, 0, 0) !important;
}
</style>
