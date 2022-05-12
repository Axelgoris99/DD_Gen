<template>
  <div id="app">
    <Header />
    <HttpLoader v-if="loading" :isVisible="loading" />
    <Error v-else-if="error" />
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
.router-link {
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &:hover {
      color: #434b52;
      font-size: large;
      text-decoration: none;
    }
    &.router-link-exact-active {
      font-weight: bold;
      font-size: x-large;
      color: #2c3e50;
      cursor: default;
    }
  }
}
</style>
