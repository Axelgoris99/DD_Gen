<template>
  <div>
    <headerView
      :connect="this.$store.state.user.loggedIn"
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
      this.$router.replace({ name: "login" });
    },
    signup() {
      console.log("New User Incoming ?");
      this.$router.replace({ name: "register" });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
  },
};
</script>

<style scoped></style>
