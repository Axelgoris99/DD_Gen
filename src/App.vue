<template>
  <div id="app">
    <Header />
    <div class="rowC">
      <Sidebar />
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Sidebar from "./presenter/sidebarPresenter.vue";
import Header from "./presenter/headerPresenter.vue";
import Footer from "./presenter/footerPresenter.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1% 5%;
}
.rowC {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 992px) {
  .rowC {
    display: flex;
    flex-direction: column;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
