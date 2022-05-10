<template>
  <div>
    <MyChangesView
      :ready="currentReady"
      :races="races"
      :classes="classes"
      :alignments="alignments"
      :languages="languages"
      :traits="traits"
      :backgrounds="backgrounds"
      :currentName="currentName"
      :currentGender="currentGender"
      :currentRace="currentRace"
      :currentClass="currentClass"
      :currentAlignment="currentAlignment"
      :currentBackground="currentBackground"
      :currentLanguages="currentLanguages"
      :currentTraits="currentTraits"
      :currentImage="imageUrl"
      :stats="currentStats"
      :dices="diceNums"
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
      @changeImage="changeImage"
      @changeStr="changeStr"
      @changeCha="changeCha"
      @changeWis="changeWis"
      @changeCon="changeCon"
      @changeDex="changeDex"
      @changeInt="changeInt"
      @setDices="setDices"
      @changeStats="changeStats"
    />
  </div>
</template>

<script>
import MyChangesView from "../view/changesView.vue";
import { getImage } from "../api/images";
import { mapGetters } from "vuex";

export default {
  name: "MyChanges",
  components: {
    MyChangesView,
  },
  data() {
    return {
      imageUrl: "",
      diceNums: [1, 1, 1, 1],
    };
  },
  created() {
    // Add a watcher to race, gender, class and image to dynamically
    // recalculate the image path.
    this.$watch(
      (vm) => [
        vm.currentRace,
        vm.currentGender,
        vm.currentClass,
        vm.currentImage,
      ],
      () => {
        this.$store.dispatch("loader/pending");
        getImage(
          this.currentRace.index,
          this.currentGender,
          this.currentClass.index,
          this.currentImage
        )
          .then((value) => {
            this.imageUrl = value;
            this.$store.dispatch("loader/done");
          })
          .catch((error) => {
            this.$store.dispatch("loader/done");
            this.$store.dispatch("loader/error");
            return Promise.reject(error);
          });
      },
      {
        immediate: true,
        deep: true,
      }
    );
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
      currentReady: "current/ready",
      currentImage: "current/image",
      currentName: "current/name",
      currentGender: "current/gender",
      currentRace: "current/race",
      currentClass: "current/class",
      currentAlignment: "current/alignment",
      currentLanguages: "current/languages",
      currentTraits: "current/traits",
      currentBackground: "current/background",
      currentStats: "current/stats",
    }),
  },
  methods: {
    setName(n) {
      this.$store.dispatch("current/setName", n);
    },
    setGender(g) {
      this.$store.dispatch("current/setGender", g);
    },
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
    addLanguage(l) {
      this.$store.dispatch("current/addLanguage", l);
    },
    removeLanguage(l) {
      this.$store.dispatch("current/removeLanguage", l);
    },
    addTrait(t) {
      this.$store.dispatch("current/addTrait", t);
    },
    removeTrait(t) {
      this.$store.dispatch("current/removeTrait", t);
    },
    changeImage() {
      const newImage = (this.currentImage + 1) % 3;
      this.$store.dispatch("current/setImage", newImage);
    },
    changeStr(s) {
      this.$store.dispatch("current/setStr", Number(s));
    },
    changeInt(i) {
      this.$store.dispatch("current/setInt", Number(i));
    },
    changeCon(c) {
      this.$store.dispatch("current/setCon", Number(c));
    },
    changeCha(c) {
      this.$store.dispatch("current/setCha", Number(c));
    },
    changeWis(w) {
      this.$store.dispatch("current/setWis", Number(w));
    },
    changeDex(d) {
      this.$store.dispatch("current/setDex", Number(d));
    },
    changeStats() {
      this.changeStr(Math.floor(Math.random() * 18) + 1);
      this.changeInt(Math.floor(Math.random() * 18) + 1);
      this.changeDex(Math.floor(Math.random() * 18) + 1);
      this.changeCon(Math.floor(Math.random() * 18) + 1);
      this.changeCha(Math.floor(Math.random() * 18) + 1);
      this.changeWis(Math.floor(Math.random() * 18) + 1);
    },

    setRandomDicesData() {
      this.diceNums.forEach((element, index) => {
        var randomDiceNum = Math.floor(Math.random() * 6) + 1;
        this.diceNums[index] = randomDiceNum;
      });
    },
    setDices() {
      this.diceNums.forEach((element, index) => {
        var randomDiceNum = Math.floor(Math.random() * 6) + 1;
        this.diceNums[index] = randomDiceNum;
      });
    },
  },
};
</script>

<style scoped></style>
