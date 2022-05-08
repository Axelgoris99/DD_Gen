<template>
  <div class="back">
    <h1>Changes</h1>
    <p>
      Now is the time to tweak what has been offered to you through the API. You
      can decide on what you want to have but be careful, you'll lose possible
      coherence doing this.
    </p>
    <div class="row-fluid">
      <MyCharacter
        v-if="ready"
        :clearable="false"
        :races="races"
        :classes="classes"
        :alignments="alignments"
        :languages="languages"
        :traits="traits"
        :backgrounds="backgrounds"
        :currentName="currentName"
        :currentGender="currentGender"
        :currentRace="currentRace.index"
        :currentClass="currentClass.index"
        :currentAlignment="currentAlignment.index"
        :currentBackground="currentBackground.slug"
        :currentLanguages="currentLanguageLabels"
        :currentTraits="currentTraitLabels"
        @setName="setName"
        @setGender="setGender"
        @setRace="setRace"
        @setClass="setClass"
        @setBackground="setBackground"
        @setAlignment="setAlignment"
        @addLanguage="addLanguage"
        @removeLanguage="removeLanguage"
        @removeTrait="removeTrait"
        @addTrait="addTrait"
      />
      <b-form-group
        id="imageNumber"
        label="Image Choice"
        label-for="imageNumber"
        description="The choice of your character image! Pick between 3 different ones."
      >
        <b-form-input
          @change="changeImage"
          type="number"
          :value="currentImage"
          :min="0"
          :max="2"
        ></b-form-input>
      </b-form-group>
      <pdfVue
        v-if="ready"
        :download="false"
        :myImageNumber="currentImage"
        :myName="currentName"
        :myClass="currentClass"
        :myBackground="currentBackground"
        :myRace="currentRace"
        :myAlignment="currentAlignment"
        :myTraits="currentTraits"
        :myLanguages="currentLanguages"
        :myGender="currentGender"
      ></pdfVue>
    </div>
    <b-button to="input" class="space">Another time!</b-button>
    <b-button to="output" class="space">Perfection!</b-button>
  </div>
</template>

<script>
import MyCharacter from "@/components/char.vue";
import pdfVue from "@/components/pdf.vue";
export default {
  name: "MyChangesView",
  components: {
    MyCharacter,
    pdfVue,
  },
  props: {
    ready: Boolean,
    races: Array,
    classes: Array,
    alignments: Array,
    languages: Array,
    traits: Array,
    backgrounds: Array,
    abilities: Array,

    currentName: String,
    currentGender: String,
    currentRace: Object,
    currentClass: Object,
    currentBackground: Object,
    currentAlignment: Object,
    currentLanguages: Array,
    currentTraits: Array,
    currentImage: Number,
  },
  emits: [
    "setName",
    "setGender",
    "setRace",
    "setClass",
    "setBackground",
    "setAlignment",
    "addLanguage",
    "removeLanguage",
    "addTrait",
    "removeTrait",
    "changeNumber",
  ],
  computed: {
    currentLanguageLabels() {
      return this.currentLanguages.map((l) => l.index);
    },
    currentTraitLabels() {
      return this.currentTraits.map((a) => a.index);
    },
  },
  methods: {
    setName(n) {
      this.$emit("setName", n);
    },
    setGender(r) {
      this.$emit("setGender", r);
    },
    setRace(r) {
      this.$emit("setRace", r);
    },
    setClass(c) {
      this.$emit("setClass", c);
    },
    setBackground(b) {
      this.$emit("setBackground", b);
    },
    setAlignment(a) {
      this.$emit("setAlignment", a);
    },
    addLanguage(l) {
      this.$emit("addLanguage", l);
    },
    removeLanguage(l) {
      this.$emit("removeLanguage", l);
    },
    addTrait(t) {
      this.$emit("addTrait", t);
    },
    removeTrait(t) {
      this.$emit("removeTrait", t);
    },
    changeImage(i) {
      this.$emit("changeImage", i);
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
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
