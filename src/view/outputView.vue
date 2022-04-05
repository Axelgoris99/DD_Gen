<template>
  <div class="back">
    <h1>Output</h1>
    As the name suggests, you can find your whole new character right here! We
    hope you'll like it! You're now ready to play :)
    <br />Have fun !
    <InputBarVue
      nameAttribute="Race"
      typeAttribute="dropdown"
      blocked="true"
      :dropdownAttribute="dropdownAttribute"
      class="space"
    />
    <InputBarVue
      blocked=""
      nameAttribute="Strenght"
      typeAttribute="number"
      class="space"
    />
    <InputBarVue
      nameAttribute="Backstory"
      typeAttribute="text"
      class="space"
      blocked=""
    />
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
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
