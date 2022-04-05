<template>
  <div>
    <headerView
      :connect="this.$store.state.user.loggedIn"
      :username="this.$store.state.user.data.displayName"
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

export default {
  name: "MyHeader",
  components: {
    headerView,
  },
  methods: {
    login() {
      console.log("Welcome user !");
    },
    signup() {
      console.log("New User Incoming ?");
    },
    signOut() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style scoped></style>
