<template>
  <div>
    <MyProfileView
      :characters="characters"
      @deleteCharacter="deleteCharacter"
      @image="image"
    />
  </div>
</template>

<script>
import MyProfileView from "../view/profileView.vue";
import { createNamespacedHelpers } from "vuex";
import { getImage } from "../api/images";
const { mapGetters } = createNamespacedHelpers("characters");

export default {
  name: "MyProfile",
  components: {
    MyProfileView,
  },
  computed: {
    ...mapGetters(["characters"]),
  },
  methods: {
    deleteCharacter(char) {
      this.$store.dispatch("characters/removeChar", char);
    },
    image(char) {
      return getImage(
        char.race.index,
        char.gender,
        char.class.index,
        char.image
      );
    },
  },
};
</script>

<style scoped></style>
