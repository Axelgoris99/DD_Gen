<template>
  <div>
    <MyProfileView
      :characters="characters"
      @deleteCharacter="deleteCharacter"
    />
  </div>
</template>

<script>
import MyProfileView from "../view/profileView.vue";
import { createNamespacedHelpers } from "vuex";
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
  },
};
</script>

<style scoped></style>
