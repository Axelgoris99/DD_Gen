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
import { signIn } from "../firebaseModel";
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
      this.error = signIn(this.form.email, this.form.password);
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped></style>
