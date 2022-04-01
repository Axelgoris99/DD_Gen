<template>
  <div id="app">
    <Header />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Sidebar from "./vue/sidebarPresenter";
import Header from "./vue/headerPresenter.vue";
import Footer from "./vue/footerPresenter.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Header,
    Footer,
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
