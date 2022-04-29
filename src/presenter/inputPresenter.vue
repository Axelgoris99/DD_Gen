<template>
  <div>
    <MyInputView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      :abilities="abilities"
      @setName="setName"
      @setRace="setRace"
      @setClass="setClass"
      @setBackground="setBackground"
      @setAlignment="setAlignment"
      @addLanguage="addLanguage"
      @addTrait="addTrait"
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
  // We store the selected slugs in component state.
  data() {
    return {
      name: null,
      gender: "male",
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
  // map all the getters to computed properties.
  computed: {
    ...mapGetters({
      races: "options/races",
      classes: "options/classes",
      alignments: "options/alignments",
      languages: "options/languages",
      traits: "options/traits",
      abilities: "options/abilities",
      backgrounds: "options/backgrounds",
    }),
  },
  methods: {
    setName(n) {
      this.name_slug = n;
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
    addTrait(t) {
      this.trait_slugs.push(t);
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
      this.$store.dispatch("current/setGender", gender);

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
        language_slugs.forEach((slug) => {
          promises.push(this.$store.dispatch("current/addLanguage", slug));
        });
        // Otherwise, we add languages dependent on the race.
      } else {
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];
          return Promise.all(
            current_race.languages.map((lang) =>
              this.$store.dispatch("current/addLanguage", lang.index)
            )
          );
        });
      }
      // if we have chosen traits, we just add them.
      if (trait_slugs.length > 0) {
        trait_slugs.forEach((slug) => {
          promises.push(this.$store.dispatch("current/addTrait", slug));
        });
      } else {
        // Otherwise, we generate we add traits dependent on the race.
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];
          return Promise.all(
            current_race.traits.map((trait) =>
              this.$store.dispatch("current/addTrait", trait.index)
            )
          );
        });
      }
      // if we have chosen a name, we just add that.
      if (name) {
        this.$store.dispatch("current/setName", name);
      } else {
        // Otherwise, we generate a random one from the race and gender.
        racePromise.then(() => {
          const current_race = this.$store.getters["current/race"];
          const { gen_name } = Names.generate({
            race: camelCase(current_race.index),
            gender: gender,
          });
          return this.$store.dispatch("current/setName", gen_name);
        });
      }
      // add race promise and resolve.
      promises.push(racePromise);
      await Promise.all(promises);
    },
  },
};
</script>

<style scoped></style>
