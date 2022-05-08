<template>
  <div>
    <div>
      <MyOutputView @output="generateReport" />
      <pdfVue
        v-if="ready"
        :download="false"
        :myName="name1"
        :myClass="class1"
        :myBackground="background"
        :myRace="race"
        :myAlignment="alignment"
        :myTraits="traits"
        :myLanguages="languages"
        :myGender="gender"
        :myImageNumber="image"
      ></pdfVue>
    </div>
    <b-button class="space" v-on:click="generateReport">Export as PDF</b-button>
    <b-button class="space">Add to my Characters</b-button>
    <b-button class="space" to="input">New character</b-button>

    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        :manual-pagination="false"
        :htmlToPdfOptions="option"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <pdfVue
            v-if="ready"
            :download="true"
            :myName="name1"
            :myClass="class1"
            :myBackground="background"
            :myRace="race"
            :myAlignment="alignment"
            :myTraits="traits"
            :myGender="gender"
            :myLanguages="languages"
            :myImageNumber="image"
          ></pdfVue>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>
import MyOutputView from "../view/outputView.vue";
import VueHtml2pdf from "vue-html2pdf";
import pdfVue from "../components/pdf.vue";
import { mapGetters } from "vuex";
export default {
  name: "MyOutput",
  components: {
    MyOutputView,
    VueHtml2pdf,
    pdfVue,
  },
  data() {
    return {
      option: null,
    };
  },
  computed: {
    ...mapGetters({
      name1: "current/name",
      class1: "current/class",
      gender: "current/gender",
      race: "current/race",
      alignment: "current/alignment",
      background: "current/background",
      languages: "current/languages",
      traits: "current/traits",
      image: "current/image",
      ready: "current/ready",
    }),
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  created() {
    this.option = {
      filename: this.name1,
      html2canvas: {
        scale: 4,
        letterRendering: true,
        useCORS: true,
      },
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
  },
};
</script>

<style scoped></style>
