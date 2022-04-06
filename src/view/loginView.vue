<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="Enter email"
                  required
                  v-on:input="onMailInput"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  placeholder="Enter password"
                  required
                  v-on:input="onPasswordInput"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLoginView",
  props: {
    error: String,
  },
  emits: ["submit", "password", "mail"],
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("submit");
    },
    onReset() {
      // Reset our form values
    },
    onPasswordInput(event) {
      this.$emit("password", event);
    },
    onMailInput(event) {
      this.$emit("mail", event);
    },
  },
};
</script>
