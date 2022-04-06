<template>
  <div>
    <headerView
      :connect="loggedIn"
      :username="user.displayName"
      @signup="signup"
      @login="login"
      @signOut="signOut"
    />
  </div>
</template>

<script>
import headerView from "../view/headerView.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createNamespacedHelpers } from "vuex";
// helpers for the "auth" module
const { mapGetters } = createNamespacedHelpers("auth");

export default {
  name: "MyHeader",
  components: {
    headerView,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  computed: {
    ...mapGetters(["user", "loggedIn"]), // map all the getters to computed properties.
  },
  methods: {
    login() {},
    signup() {},
    signOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style scoped></style>
