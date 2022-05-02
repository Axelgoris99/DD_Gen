<template>
  <div class="back">
    <h1>Changes</h1>
    <p>
      Now is the time to tweak what has been offered to you through the API. You
      can decide on what you want to have but be careful, you'll lose possible
      coherence doing this.
    </p>
  </div>
</template>

<script>
export default {
  name: "MyChangesView",
  components: {},
  emits: [],
  methods: {},
  props: {},
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
