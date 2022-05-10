<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand href="#">
          <router-link to="home">
            <b-img
              right
              src="../assets/dd_logo.png"
              alt="Right image"
              width="50px"
              height="50px"
            ></b-img> </router-link
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="home" class="middle">Home</router-link>
            <router-link to="input" class="middle">Input</router-link>

            <router-link to="changes" class="middle">Changes</router-link>

            <router-link to="output" class="middle" :class="{ disabled: ready }"
              >Output</router-link
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button-group>
              <template v-if="connect">
                <router-link to="profile"
                  ><b-button variant="success">{{
                    username
                  }}</b-button></router-link
                >
                <router-link to="home"
                  ><b-button variant="danger" v-on:click="signOut"
                    >Sign Out</b-button
                  ></router-link
                >
              </template>
              <template v-else>
                <router-link to="login"
                  ><b-button variant="primary" v-on:click="login"
                    >Login</b-button
                  ></router-link
                >
                <router-link to="register"
                  ><b-button variant="success" v-on:click="signup"
                    >Signup</b-button
                  >
                </router-link>
              </template>
            </b-button-group></b-navbar-nav
          >
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeaderView",
  props: {
    connect: Boolean,
    username: String,
    ready: Boolean,
  },
  components: {},
  emits: ["login", "signup", "signOut"],
  methods: {
    login() {
      this.$emit("login");
    },
    signup() {
      this.$emit("signup");
    },
    signOut() {
      this.$emit("signOut");
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
.middle {
  justify-self: center;
  align-self: center;
  margin: 10px;
}
.disabled {
  color: #697684;
  cursor: default;
  pointer-events: none;
}
</style>
