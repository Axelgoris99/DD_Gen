<template>
  <div>
    <MyProfileView
      :characters="characters"
      @deleteCharacter="deleteCharacter"
      @downloadCharacter="downloadCharacter"
    />
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      :manual-pagination="false"
      :htmlToPdfOptions="{
        filename: name,
        html2canvas: {
          scale: 4,
          letterRendering: true,
          useCORS: true,
        },
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <pdfVue
          v-if="ready"
          :download="true"
          :myName="name"
          :myClass="class1"
          :myBackground="background"
          :myRace="race"
          :myAlignment="alignment"
          :myTraits="traits"
          :myLanguages="languages"
          :myGender="gender"
          :myImage="imageUrl"
          :myStats="stats"
        ></pdfVue>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import MyProfileView from "../view/profileView.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("characters");
import VueHtml2pdf from "vue-html2pdf";
import pdfVue from "../components/pdf.vue";

export default {
  name: "MyProfile",
  components: {
    MyProfileView,
    VueHtml2pdf,
    pdfVue,
  },
  data() {
    return {
      ready: false,
      name: "test",
      class1: null,
      background: null,
      race: null,
      alignment: null,
      traits: null,
      languages: null,
      gender: null,
      imageUrl: null,
      stats: null,
    };
  },
  computed: {
    ...mapGetters(["characters"]),
  },
  methods: {
    deleteCharacter(char) {
      this.$store.dispatch("characters/removeChar", char);
    },
    downloadCharacter(char) {
      this.name = char.name;
      this.class1 = char.class;
      this.background = char.background;
      this.race = char.race;
      this.alignment = char.alignment;
      this.traits = char.traits;
      this.languages = char.languages;
      this.imageUrl = char.imagePath;
      this.stats = char.stats;
      this.gender = char.gender;
      this.ready = char.ready;
      if (this.ready) {
        setTimeout(() => {
          this.$refs.html2Pdf.generatePdf();
        }, 100);
      }
    },
  },
};
</script>

<style scoped></style>
