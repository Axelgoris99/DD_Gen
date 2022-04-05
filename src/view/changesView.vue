<template>
  <div class="back">
    <h1>Changes</h1>
    Now is the time to tweak what has been offered to you through the API. You
    can decide on what you want to have but be careful, you'll lose possible
    coherence doing this.
    <b-container class="bv-example-row" fluid>
      <b-row align-v="center">
        <b-col cols="8">
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
          <InputBarVue
            nameAttribute="Backstory"
            typeAttribute="text"
            class="space"
          />
        </b-col>
        <b-col cols="4">
          <img
            right
            src="../assets/icon/barbarian.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InputBarVue from "../components/Input.vue";

export default {
  name: "MyChangesView",
  components: { InputBarVue },
  emits: [],
  methods: {},
  data: function () {
    return {
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
    };
  },
};
</script>
<style scoped>
.back {
  display: row;
  background-color: beige;
  left: 0;
  right: 0;
}

.space {
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
