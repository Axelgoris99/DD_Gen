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

      <pdfVue
        v-if="ready"
        :download="false"
        :myImage="currentImage"
        :myName="currentName"
        :myClass="currentClass"
        :myBackground="currentBackground"
        :myRace="currentRace"
        :myAlignment="currentAlignment"
        :myTraits="currentTraits"
        :myLanguages="currentLanguages"
        :myGender="currentGender"
        :myStats="stats"
      ></pdfVue>
    </div>
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
    <h2>Quantitative</h2>
    <div>
      <p>
        Here you can roll the dice and then set it to the attributes of your
        choice. At the beginning, the "default" points repartition is suggested
        (15-14-13-12-10-8)
      </p>
      <div class="row-fluid center">
        <div v-for="dice in dices" :key="dice.key">
          <div class="dice" :class="'dice-' + dice"></div>
        </div>
      </div>
      <div class="center">
        <b-button @click="setDices">Roll the dices!</b-button>
      </div>
      <div class="row-fluid center">
        <b-form-group id="str" label="STR" label-for="str">
          <b-form-input
            @change="changeStr"
            type="number"
            :value="stats.str"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="int" label="INT" label-for="int">
          <b-form-input
            @change="changeInt"
            type="number"
            :value="stats.int"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="dex" label="DEX" label-for="dex">
          <b-form-input
            @change="changeDex"
            type="number"
            :value="stats.dex"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="con" label="CON" label-for="con">
          <b-form-input
            @change="changeCon"
            type="number"
            :value="stats.con"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="wis" label="WIS" label-for="wis">
          <b-form-input
            @change="changeWis"
            type="number"
            :value="stats.wis"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="cha" label="CHA" label-for="cha">
          <b-form-input
            @change="changeCha"
            type="number"
            :value="stats.cha"
            :min="0"
            :max="18"
          ></b-form-input>
        </b-form-group>
      </div>
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
    currentImage: String,
    stats: Object,
    dices: Array,
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
    "changeInt",
    "changeStr",
    "changeCon",
    "changeDex",
    "changeWis",
    "changeCha",
    "setDices",
    "changeStats",
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
    changeStr(s) {
      this.$emit("changeStr", s);
    },
    changeInt(i) {
      this.$emit("changeInt", i);
    },
    changeCon(c) {
      this.$emit("changeCon", c);
    },
    changeDex(d) {
      this.$emit("changeDex", d);
    },
    changeWis(w) {
      this.$emit("changeWis", w);
    },
    changeCha(c) {
      this.$emit("changeCha", c);
    },
    setDices() {
      this.$emit("setDices");
      this.$emit("changeStats");
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
.center {
  text-align: center;
  justify-content: center;
  align-content: center;
}
.center > * {
  margin: 10px;
}
/*
 * Dice.css v1.0
 * Code - MIT License - https://github.com/diafygi/dice-css
 * Images - Public Domain - https://openclipart.org/detail/105931/sixsided-dice-faces-lio-01
 */
.dice {
  display: inline-block;
  min-height: 1em;
  padding-left: 1em;
  background-size: 1em;
  background-repeat: no-repeat;
}
.dice-1 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cg transform='translate(113.25%2C-494.1)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-406.5%2C374.7)'%3E%3Crect x='588' y='240.4' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(337.5%2C87.5)' cx='325' cy='227.4' r='12.5' style='fill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E ");
}
.dice-2 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cstyle%3E.s0%7Bfill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000%3B%7D%3C%2Fstyle%3E%3Cg transform='translate(109.9%2C-505.1)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-415.6%2C485.6)'%3E%3Crect x='613' y='40.4' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(326.5%2C-148.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(398.5%2C-76.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E ");
}
.dice-3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cstyle%3E.s0%7Bfill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000%3B%7D%3C%2Fstyle%3E%3Cg transform='translate(84.9%2C-515.5)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-290.6%2C514.9)'%3E%3Crect x='413' y='2.9' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(126.5%2C-186)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(198.5%2C-114)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(162.5%2C-150)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E ");
}
.dice-4 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cstyle%3E.s0%7Bfill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000%3B%7D%3C%2Fstyle%3E%3Cg transform='translate(90.7%2C-499.7)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-302.7%2C367.8)'%3E%3Crect x='425.5' y='265.4' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(139%2C76.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(139%2C148.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(211%2C76.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(211%2C148.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E ");
}
.dice-5 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cstyle%3E.s0%7Bfill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000%3B%7D%3C%2Fstyle%3E%3Cg transform='translate(89.2%2C-510.5)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-194.9%2C372.3)'%3E%3Crect x='213' y='277.9' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(-73.5%2C89)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-73.5%2C161)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-1.5%2C89)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-1.5%2C161)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-37.5%2C125)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E ");
}
.dice-6 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' version='1.1' viewBox='0 0 76.5 76.5' height='21.6' width='21.6'%3E%3Cstyle%3E.s0%7Bfill%3A%23000%3Bstroke-width%3A3%3Bstroke%3A%23000%3B%7D%3C%2Fstyle%3E%3Cg transform='translate(86.2%2C-500.6)'%3E%3Cg transform='matrix(0.5%2C0%2C0%2C0.5%2C-98.2%2C356.2)'%3E%3Crect x='25.5' y='290.4' width='150' height='150' ry='50' rx='50' style='fill%3A%23fff%3Bstroke-width%3A3%3Bstroke%3A%23000'%2F%3E%3Ccircle transform='translate(-261%2C101.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-261%2C173.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-261%2C137.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-189%2C101.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-189%2C173.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3Ccircle transform='translate(-189%2C137.5)' cx='325' cy='227.4' r='12.5' class='s0'%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
</style>
