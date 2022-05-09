<template>
  <div id="app">
    <HttpLoader :isVisible="loading" />
    <Header />
    <Error v-if="error" />
    <router-view v-else />
    <Footer />
  </div>
</template>

<script>
import Header from "../presenter/headerPresenter.vue";
import Footer from "../presenter/footerPresenter.vue";
import HttpLoader from "@/components/http-loader.vue";
import Error from "@/components/error.vue";

export default {
  name: "AppView",
  components: {
    HttpLoader,
    Error,
    Header,
    Footer,
  },
  props: {
    loading: Boolean,
    error: Boolean,
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
@media only screen and (max-width: 900px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 1% 1%;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      font-weight: bold;
      font-size: x-large;
    }
  }
}
</style>
