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
import Header from "./presenter/headerPresenter.vue";
import Footer from "./presenter/footerPresenter.vue";
import HttpLoader from "@/components/http-loader.vue";
import Error from "@/components/error.vue";
import httpClient from "./api/httpClient";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HttpLoader,
    Error,
    Header,
    Footer,
  },
  computed: {
    ...mapState("loader", ["loading"]),
    ...mapState("loader", ["error"]),
  },
  created() {
    httpClient.interceptors.request.use(
      (config) => {
        if (config.showLoader) {
          this.$store.dispatch("loader/pending");
        }
        return config;
      },
      (error) => {
        if (error.config.showLoader) {
          this.$store.dispatch("loader/done");
        }

        this.$store.dispatch("loader/error");
        return Promise.reject(error);
      }
    );
    httpClient.interceptors.response.use(
      (response) => {
        if (response.config.showLoader) {
          this.$store.dispatch("loader/done");
        }

        return response;
      },
      (error) => {
        let response = error.response;

        if (response.config.showLoader) {
          this.$store.dispatch("loader/done");
        }

        this.$store.dispatch("loader/error");
        return Promise.reject(error);
      }
    );
    httpClient.defaults.showLoader = true;
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
