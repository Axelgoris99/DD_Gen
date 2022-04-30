<template>
  <div class="back">
    <h1>Output</h1>
    <p>
      As the name suggests, you can find your whole new character right here! We
      hope you'll like it! You're now ready to play :) <br />Have fun !
    </p>

    <b-button class="space" v-on:click="output">Export as PDF</b-button>
    <b-button class="space">Add to my Characters</b-button>
    <b-button class="space" to="input">New character</b-button>
  </div>
</template>

<script>
export default {
  name: "MyOutputView",
  components: {},
  emits: [],
  methods: {
    output() {
      this.$emit("output");
    },
  },
  props: {
    dropdownAttribute: Array,
  },
};
</script>
<style scoped>
.back {
  display: row;
  background-color: white;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
