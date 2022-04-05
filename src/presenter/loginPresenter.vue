<template>
  <div>
    <MyLoginView :error="error" @submit="submit" />
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
    submit(formData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          this.$router.replace({ name: "home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped></style>
