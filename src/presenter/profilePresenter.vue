<template>
  <div>
    <MyProfileView :characters="characters" />
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
};
</script>

<style scoped></style>
