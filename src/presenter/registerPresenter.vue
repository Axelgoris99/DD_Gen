<template>
  <div>
    <MyRegisterView
      :error="error"
      @submit="submit"
      @password="passwordChange"
      @mail="mailChange"
      @name="nameChange"
    />
  </div>
</template>

<script>
import MyRegisterView from "../view/registerView.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  name: "MyRegister",
  components: {
    MyRegisterView,
  },
  data() {
    return {
      form: {
        name: "",
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
    nameChange(event) {
      this.form.name = event;
    },
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          console.log(data);
          data.user.updateProfile({
            displayName: this.form.name,
          });
        })
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
