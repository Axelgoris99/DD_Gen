<template>
  <div id="app">
    <Header />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./presenter/headerPresenter.vue";
import Footer from "./presenter/footerPresenter.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    // init options.
    this.$store.dispatch("options/init");
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1% 5%;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
