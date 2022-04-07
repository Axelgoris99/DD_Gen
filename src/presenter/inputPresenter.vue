<template>
  <div>
    <MyInputView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      @setRace="setRace"
      @setClass="setClass"
      @setBackground="setBackground"
      @setAlignment="setAlignment"
      @setLanguage="setLanguage"
      @setTrait="setTrait"
      @generate="generate"
    />
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import sample from "lodash.sample";
import camelCase from "lodash.camelcase";
import { Names } from "fantasy-content-generator";
import { mapGetters } from "vuex";
// helpers for the "options" module

export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  // map all the getters to computed properties.
  computed: {
    ...mapGetters({
      races: "options/races",
      classes: "options/classes",
      alignments: "options/alignments",
      languages: "options/languages",
      traits: "options/traits",
      backgrounds: "options/backgrounds",

      current_name: "current/name",
      current_gender: "current/gender",
      current_race: "current/race",
      current_alignment: "current/alignment",
      current_background: "current/background",
      current_languages: "current/languages",
      current_traits: "current/traits",
    }),
  },
  methods: {
    setRace(r) {
      this.$store.dispatch("current/setRace", r);
    },
    setClass(c) {
      this.$store.dispatch("current/setClass", c);
    },
    setBackground(b) {
      this.$store.dispatch("current/setBackground", b);
    },
    setAlignment(a) {
      this.$store.dispatch("current/setAlignment", a);
    },
    //TODO: convert to add.
    setLanguage(l) {
      this.$store.dispatch("current/addLanguage", l);
    },
    setTrait(t) {
      this.$store.dispatch("current/addTrait", t);
    },
    generate() {
      const {
        current_name,
        current_gender,
        current_race,
        current_class,
        current_alignment,
        current_background,
        current_traits,
        current_languages,
        races,
        classes,
        alignments,
        backgrounds,
      } = this;
      if (!current_race) {
        const slug = sample(races).value;
        this.$store.dispatch("current/setRace", slug);
      }

      if (!current_class) {
        const slug = sample(classes).value;
        this.$store.dispatch("current/setClass", slug);
      }

      if (!current_alignment) {
        const slug = sample(alignments).value;
        this.$store.dispatch("current/setAlignment", slug);
      }

      if (!current_background) {
        const slug = sample(backgrounds).value;
        this.$store.dispatch("current/setBackground", slug);
      }
      if (current_languages.length == 0) {
        current_race.languages.forEach((lang) => {
          this.$store.dispatch("current/addLanguage", lang.index);
        });
      }
      if (current_traits.length != 0) {
        current_race.traits.foreach((trait) => {
          this.$store.dispatch("current/addTrait", trait.index);
        });
      }
      if (!current_name) {
        const { name } = Names.generate({
          race: camelCase(current_race.index),
          gender: current_gender,
        });
        this.$store.dispatch("current/setName", name);
      }
    },
  },
};
</script>

<style scoped></style>
