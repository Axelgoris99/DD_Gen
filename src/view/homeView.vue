<template>
  <div class="back">
    <h1>Home</h1>
    <p>
      Welcome on this Dungeon &amp; Dragon Character Generator. The goal of this
      is to allow you to quickly create different characters, making you able to
      adapt to whatever your crazy players might do. Or if you're a lazy player
      who does not want to bother with creating a complicated character, this
      one is for you.
    </p>
    <ul>
      <li>Select what you really want in the Input page</li>
      <li>
        Generate your cool character and tweak it a bit on the Changes page
      </li>
      <li>Add it to your character or export it as a pdf at the end!</li>
    </ul>
    <p>
      Please, be aware that if you go to the input page, your current character
      WILL be erased. If you ever close the window while logged in, you just
      need to click on the "changes" directly at the top, without going by the
      input page.
    </p>
    <p>You won't be able to save your characters if you're not connected.</p>
    <b-button @click="navInput">Start</b-button>
  </div>
</template>

<script>
export default {
  name: "MyHomeView",
  props: {},
  components: {},
  methods: {
    navInput() {
      this.$router.push("input");
    },
  },
};
</script>
<style scoped>
.back {
  background-color: white;
}
</style>
