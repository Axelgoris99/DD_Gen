<template>
  <div>
    <appView :done="done.ready" :loading="loading" :error="error"></appView>
  </div>
</template>

<script>
import httpClient from "../api/httpClient";
import { mapState } from "vuex";
import appView from "../view/appView.vue";
import { auth, initialModelFromFirebase } from "../firebaseModel.js";
import { modelFetched } from "../firebaseModel.js";
import store from "../store/index.js";
export default {
  name: "App",
  components: {
    appView,
  },
  data() {
    return {
      done: modelFetched,
    };
  },
  computed: {
    ...mapState("loader", ["loading"]),
    ...mapState("loader", ["error"]),
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      store.dispatch("auth/fetchUser", user);
      if (user) {
        initialModelFromFirebase(store);
      }
    });
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
  },
};
</script>
<style></style>
