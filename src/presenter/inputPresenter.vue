<template>
  <div>
    <MyInputView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      @setName="setName"
      @setGender="setGender"
      @setRace="setRace"
      @setClass="setClass"
      @setBackground="setBackground"
      @setAlignment="setAlignment"
      @addLanguage="addLanguage"
      @removeLanguage="removeLanguage"
      @clearLanguages="clearLanguages"
      @removeTrait="removeTrait"
      @addTrait="addTrait"
      @clearTraits="clearTraits"
      @generate="generate"
    ></MyInputView>
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import { mapGetters } from "vuex";
import sample from "lodash.sample";
import camelCase from "lodash.camelcase";
import { Names } from "fantasy-content-generator";
export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  data() {
    return {
      name: null,
      gender: null,
      race_slug: null,
      class_slug: null,
      alignment_slug: null,
      background_slug: null,

      language_slugs: [],
      trait_slugs: [],
    };
  },
  created() {
    this.$store.dispatch("options/init");
  },
  computed: {
    ...mapGetters({
      races: "options/races",
      classes: "options/classes",
      alignments: "options/alignments",
      languages: "options/languages",
      traits: "options/traits",
      abilities: "options/abilities",
      backgrounds: "options/backgrounds",
      currentName: "current/name",
      currentGender: "current/gender",
      currentRace: "current/race",
      currentClass: "current/class",
      currentAlignment: "current/alignment",
      currentLanguages: "current/languages",
      currentTraits: "current/traits",
      currentBackground: "current/background",
    }),
  },
  methods: {
    setName(n) {
      this.name = n;
    },
    setGender(g) {
      this.gender = g;
    },
    setRace(r) {
      this.race_slug = r;
    },
    setClass(c) {
      this.class_slug = c;
    },
    setBackground(b) {
      this.background_slug = b;
    },
    setAlignment(a) {
      this.alignment_slug = a;
    },
    addLanguage(l) {
      this.language_slugs.push(l);
    },
    removeLanguage(l) {
      this.language_slugs = this.language_slugs.filter((item) => item !== l);
    },
    clearLanguages() {
      this.language_slugs.splice(0);
    },
    addTrait(t) {
      this.trait_slugs.push(t);
    },
    removeTrait(t) {
      this.trait_slugs = this.trait_slugs.filter((item) => item !== t);
    },
    clearTraits() {
      this.trait_slugs.splice(0);
    },
    async generate() {
      const {
        name,
        gender,
        race_slug,
        class_slug,
        alignment_slug,
        background_slug,
        trait_slugs,
        language_slugs,

        races,
        classes,
        alignments,
        backgrounds,
      } = this;

      // Set synchronous properties first.
      this.$store.dispatch(
        "current/setGender",
        gender || sample(["male", "female"])
      );

      // Now we want to set the properties that are set asynchronously.
      const promises = [];

      promises.push(
        // set properties first by the slug in component state,
        // then by picking a random slug.
        this.$store.dispatch(
          "current/setClass",
          class_slug || sample(classes).value
        ),
        this.$store.dispatch(
          "current/setAlignment",
          alignment_slug || sample(alignments).value
        ),
        this.$store.dispatch(
          "current/setBackground",
          background_slug || sample(backgrounds).value
        )
      );

      // Downstream properties may depend on race, so we need to do some promise chaining.
      const racePromise = this.$store.dispatch(
        "current/setRace",
        race_slug || sample(races).value
      );

      // if we have chosen languages, we just add them.
      if (language_slugs.length > 0) {
        // map slugs to promises and reduce to a promise chain.
        promises.push(
          language_slugs
            .map((slug) => this.$store.dispatch("current/addLanguage", slug))
            .reduce((prev, next) => prev.then(next), Promise.resolve())
        );

        // Otherwise, we add languages dependent on the race.
      } else {
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];
          // map slugs to promises and reduce to a promise chain.
          return current_race.languages
            .map((lang) =>
              this.$store.dispatch("current/addLanguage", lang.index)
            )
            .reduce((prev, next) => prev.then(next), Promise.resolve());
        });
      }
      // if we have chosen traits, we just add them.
      if (trait_slugs.length > 0) {
        // map slugs to promises and reduce to a promise chain.
        promises.push(
          trait_slugs
            .map((slug) => this.$store.dispatch("current/addTrait", slug))
            .reduce((prev, next) => prev.then(next), Promise.resolve())
        );
      } else {
        // Otherwise, we generate we add traits dependent on the race.
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];

          return current_race.traits
            .map((lang) => this.$store.dispatch("current/addTrait", lang.index))
            .reduce((prev, next) => prev.then(next), Promise.resolve());
        });
      }
      // if we have chosen a name, we just add that.
      if (name) {
        this.$store.dispatch("current/setName", name);
      } else {
        // Otherwise, we generate a random one from the race and gender.
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];
          const current_gender = this.$store.getters["current/gender"];
          const gen = Names.generate({
            race: camelCase(current_race.index),
            gender: current_gender,
          });
          this.$store.dispatch("current/setName", gen.name);
        });
      }
      // add race promise and resolve.
      promises.push(racePromise);
      await Promise.all(promises).then(() => this.$router.push("changes"));
    },
  },
};
</script>

<style scoped></style>
