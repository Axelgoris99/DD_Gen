<template>
  <appView :loading="loading" :error="error"></appView>
</template>

<script>
import httpClient from "../api/httpClient";
import { mapState } from "vuex";
import appView from "../view/appView.vue";
export default {
  name: "App",
  components: {
    appView,
  },
  computed: {
    ...mapState("loader", ["loading"]),
    ...mapState("loader", ["error"]),
  },
  created() {
    // init options.
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
    this.$store.dispatch("options/init");
  },
};
</script>
<style></style>
