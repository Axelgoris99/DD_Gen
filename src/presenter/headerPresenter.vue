<template>
  <div>
    <headerView
      :connect="loggedIn"
      :username="name"
      :ready="!ready"
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
import { mapGetters } from "vuex";

export default {
  name: "MyHeader",
  components: {
    headerView,
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      loggedIn: "auth/loggedIn",
      ready: "current/ready",
    }), // map all the getters to computed properties.
    name() {
      if (this.user.data) {
        return this.user.data.displayName;
      } else {
        return "Nope";
      }
    },
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
