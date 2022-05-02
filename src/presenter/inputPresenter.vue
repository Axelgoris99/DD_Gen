<template>
  <div>
    <MyInputView></MyInputView>
    <MyCharacter ref="childChar"></MyCharacter>
    <b-button class="space" @click="generate">Generate Character</b-button>
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import MyCharacter from "./charPresenter.vue";
export default {
  name: "MyInput",
  components: {
    MyInputView,
    MyCharacter,
  },
  created() {
    this.$store.dispatch("options/init");
  },
  methods: {
    generate() {
      this.$refs.childChar.generation();
      this.$router.push("changes");
    },
  },
};
</script>

<style scoped></style>
