<template>
  <div>
    <h1>{{ title }}</h1>
    <b-button v-on:click="setTitle">My Button Name </b-button>
    <ButtonVue v-on:click="setTitle" text="My Button Name" />
    <ul class="nav flex-sm-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Input</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Changes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Output</a>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonVue from "../components/Button.vue";
export default {
  name: "MySidebarView",
  components: {
    ButtonVue,
  },
  props: ["title"],
  emits: ["setTitle"],
  methods: {
    setTitle() {
      this.$emit("setTitle", "MyFancyNewTitle");
    },
  },
};
</script>
<style scoped>
div {
  background-color: #151f28;
}
</style>
