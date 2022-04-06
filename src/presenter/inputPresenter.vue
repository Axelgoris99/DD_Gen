<template>
  <div>
    <MyInputView
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
    />
  </div>
</template>

<script>
import MyInputView from "../view/inputView.vue";
import dnd5 from "../api/dnd5eapi";
import open5 from "../api/open5e";
export default {
  name: "MyInput",
  components: {
    MyInputView,
  },
  methods: {},
  data: function () {
    return {
      races: [],
      classes: [],
      alignments: [],
      languages: [],
      traits: [],
      backgrounds: [],
    };
  },
  mounted() {
    // Fetch data from apis to populate dropdowns
    const promises = [
      dnd5.raceList(),
      dnd5.classList(),
      dnd5.alignmentList(),
      dnd5.languageList(),
      dnd5.traitList(),
      open5.backgroundList(),
    ];
    Promise.all(promises)
      .then(
        ([
          { data: races },
          { data: classes },
          { data: alignments },
          { data: languages },
          { data: traits },
          { data: backgrounds },
        ]) => {
          this.races = races.results.map((r) => ({
            text: r.name,
            value: r.index,
          }));
          this.classes = classes.results.map((r) => ({
            text: r.name,
            value: r.index,
          }));
          this.alignments = alignments.results.map((r) => ({
            text: r.name,
            value: r.index,
          }));
          this.languages = languages.results.map((r) => ({
            text: r.name,
            value: r.index,
          }));
          this.traits = traits.results.map((r) => ({
            text: r.name,
            value: r.index,
          }));
          this.backgrounds = backgrounds.results.map((r) => ({
            text: r.name,
            value: r.slugs,
          }));
        }
      )
      .catch(() => console.log("error resolving promises"));
  },
};
</script>

<style scoped></style>
