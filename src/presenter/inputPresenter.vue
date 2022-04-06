<template>
  <div>
    <MyInputView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
    />
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import { createNamespacedHelpers } from "vuex";
// helpers for the "options" module
const { mapGetters } = createNamespacedHelpers("options");

export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  methods: {},
  data: function () {
    return {};
  },
  mounted() {
    // Initialize the options
    this.$store.dispatch("options/init");
  },
  // map all the getters to computed properties.
  computed: {
    ...mapGetters([
      "races",
      "classes",
      "alignments",
      "languages",
      "traits",
      "backgrounds",
    ]),
  },
};
</script>

<style scoped></style>
