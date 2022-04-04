<template>
  <div class="back">
    <h1>Output</h1>
    <p>
      As the name suggests, you can find your whole new character right here! We
      hope you'll like it! You're now ready to play :) <br />Have fun !
    </p>
    <h2>Qualitative</h2>
    <b-container class="bv-example-row" fluid>
      <b-row align-v="center">
        <b-col cols="8">
          <InputBarVue
            nameAttribute="Race"
            typeAttribute="dropdown"
            :dropdownAttribute="dropdownAttribute"
            class="space"
            blocked=""
          />
          <InputBarVue
            nameAttribute="Strenght"
            typeAttribute="number"
            class="space"
            blocked=""
          />
          <InputBarVue
            nameAttribute="Backstory"
            typeAttribute="text"
            class="space"
            blocked=""
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
    <b-button class="space">Export as PDF</b-button>
    <b-button class="space">Add to my Characters</b-button>
    <b-button class="space" to="input">New character</b-button>
  </div>
</template>

<script>
import InputBarVue from "../components/Input.vue";

export default {
  name: "MyOutputView",
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
  margin: 5px;
}
</style>
