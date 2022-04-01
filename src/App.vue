<template>
  <div id="app">
    <Header />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./vue/sidebarPresenter";
import Header from "./vue/headerPresenter.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1% 5%;
}
</style>
