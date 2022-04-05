<template>
  <div class="input">
    <h1>Input</h1>
    <p>
      This page is here for you to select whatever value that you want to prefix
      and that won't be modified, meaning that the method will try to adjust
      other params depending on what you selected.
      <br />A dwarf will often be a warrior for example.
    </p>
    <h2>Qualitative</h2>
    <InputBarVue
      nameAttribute="Race"
      typeAttribute="dropdown"
      :dropdownAttribute="dropdownAttribute"
      class="space"
    />
    <InputBarVue
      nameAttribute="Strenght"
      typeAttribute="number"
      class="space"
    />
    <InputBarVue nameAttribute="Backstory" typeAttribute="text" class="space" />
    <b-button to="changes" class="space">Fill those fields!</b-button>
  </div>
</template>

<script>
import InputBarVue from "../components/Input.vue";
import dnd5 from "../api/dnd5eapi";

export default {
  name: "MyInputView",
  components: {
    InputBarVue,
  },
  emits: [],
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
<style scoped>
.input {
  display: row;
  background-color: beige;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
