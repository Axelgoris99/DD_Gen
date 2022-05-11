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
import { signUp } from "../firebaseModel";

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
      signUp(this.form.email, this.form.password, this.form.name, this.error);
      this.$router.push("home");
    },
  },
};
</script>

<style scoped></style>
