<template>
  <div>
    <h1>My Profile</h1>
    <h2>My Characters</h2>
    <div class="flex">
      <span
        v-for="character in characters"
        :key="character.name"
        class="center space"
      >
        <img :src="character.imagePath" width="100" height="150" />
        <div>{{ character.name }} - {{ character.class.index }}</div>
        <b-button class="space" v-on:click="deleteCharacter(character)">
          Delete character
        </b-button>
        <b-button class="space" v-on:click="downloadCharacter(character)">
          Download PDF
        </b-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfileView",
  props: {
    characters: Array,
  },
  emits: ["deleteCharacter", "downloadCharacter"],
  methods: {
    deleteCharacter(char) {
      this.$emit("deleteCharacter", char);
    },
    downloadCharacter(char) {
      this.$emit("downloadCharacter", char);
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.center {
  align-content: center;
  align-items: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  text-align: center;
  max-width: 200px;
}
.space {
  margin: 5px;
}
</style>
