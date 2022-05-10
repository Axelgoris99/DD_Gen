<template>
  <div class="back">
    <h1>Output</h1>
    <p>
      As the name suggests, you can find your whole new character right here! We
      hope you'll like it! You're now ready to play :) <br />Have fun !
    </p>
    <pdfVue
      v-if="ready"
      :download="download"
      :myName="myName"
      :myClass="myClass"
      :myBackground="myBackground"
      :myRace="myRace"
      :myAlignment="myAlignment"
      :myTraits="myTraits"
      :myLanguages="myLanguages"
      :myGender="myGender"
      :myImage="myImage"
      :myStats="myStats"
    ></pdfVue>

    <b-button class="space" v-on:click="output">Export as PDF</b-button>
    <b-button class="space">Add to my Characters</b-button>
    <b-button class="space" @click="navInput">New character</b-button>
  </div>
</template>

<script>
import pdfVue from "@/components/pdf.vue";
export default {
  name: "MyOutputView",
  props: {
    ready: Boolean,
    download: Boolean,
    myName: String,
    myClass: Object,
    myBackground: Object,
    myRace: Object,
    myAlignment: Object,
    myTraits: Array,
    myLanguages: Array,
    myGender: String,
    myImage: String,
    myStats: Object,
  },
  components: {
    pdfVue,
  },
  emits: ["output"],
  methods: {
    output() {
      this.$emit("output");
    },
    navInput() {
      this.$router.push("input");
    },
  },
};
</script>
<style scoped>
.back {
  display: row;
  background-color: white;
  left: 0;
  right: 0;
}
.space {
  margin: 5px;
}
</style>
