<template>
  <div id="app">
    <Header />
    <div class="rowC">
      <Sidebar /> <Home /> <Input /> <Changes /> <Output />
    </div>

    <Footer />
  </div>
</template>

<script>
import Sidebar from "./vue/sidebarPresenter.vue";
import Header from "./vue/headerPresenter.vue";
import Footer from "./vue/footerPresenter.vue";
import Home from "./vue/homePresenter.vue";
import Input from "./vue/inputPresenter.vue";
import Changes from "./vue/changesPresenter.vue";
import Output from "./vue/outputPresenter.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
    Footer,
    Home,
    Input,
    Changes,
    Output,
  },
};
</script>

<style>
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
</style>
