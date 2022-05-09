<template>
  <div>
    <MyLoginView
      :error="error"
      @submit="submit"
      @password="passwordChange"
      @mail="mailChange"
    />
  </div>
</template>

<script>
import MyLoginView from "../view/loginView.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  name: "MyLogin",
  components: {
    MyLoginView,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    passwordChange(event) {
      this.form.password = event;
    },
    mailChange(event) {
      this.form.email = event;
    },
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped></style>
