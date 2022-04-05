<template>
  <div>
    <MyInputView :dropdownAttribute="dropdownAttribute" />
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import dnd5 from "../api/dnd5eapi";
export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  methods: {},
  data: function () {
    return {
      dropdownAttribute: [],
    };
  },
  mounted() {
    dnd5
      .raceList()
      .then((resp) => {
        this.dropdownAttribute = resp.data.results.map((r) => {
          return r.name;
        });
      })
      .catch(() => {
        console.log("something went bad");
      });
  },
};
</script>

<style scoped></style>
