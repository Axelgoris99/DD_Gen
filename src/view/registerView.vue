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
                label="Your name:"
                label-for="input-1"
                description="We'll never share your name with anyone else. Or not."
              >
                <b-form-input
                  id="input-1"
                  type="text"
                  placeholder="Reminder : azerty is not a valid name."
                  required
                  v-on:input="onNameInput"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Email address:"
                label-for="input-2"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-2"
                  type="email"
                  placeholder="Enter email"
                  required
                  v-on:input="onMailInput"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Password:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
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
  name: "MyRegisterView",
  props: {
    error: String,
  },
  emits: ["submit", "password", "mail", "name"],
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
    onNameInput(event) {
      this.$emit("name", event);
    },
  },
};
</script>
