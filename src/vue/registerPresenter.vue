<template>
  <div>
    <MyRegisterView :error="error" @submit="submit" />
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
    submit(formData) {
      //console.log(formData.email, formData.password, formData.name);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: formData.name,
            })
            .then(() => {});
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped></style>
