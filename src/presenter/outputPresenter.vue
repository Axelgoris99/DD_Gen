<template>
  <div>
    <div>
      <MyOutputView
        @output="generateReport"
        :ready="ready"
        :download="false"
        :myName="name"
        :myClass="_class"
        :myBackground="background"
        :myRace="race"
        :myAlignment="alignment"
        :myTraits="traits"
        :myLanguages="languages"
        :myGender="gender"
        :myImage="imageUrl"
        :myStats="stats"
      />
    </div>
    <div>
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
            id="pdf2Print"
            v-if="ready"
            :download="true"
            :myName="name"
            :myClass="_class"
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
  </div>
</template>

<script>
import MyOutputView from "../view/outputView.vue";
import VueHtml2pdf from "vue-html2pdf";
import pdfVue from "../components/pdf.vue";
import { getImage } from "../api/images";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js/dist/require/html2pdf.cjs";
export default {
  name: "MyOutput",
  components: {
    MyOutputView,
    VueHtml2pdf,
    pdfVue,
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  computed: {
    ...mapGetters({
      name: "current/name",
      _class: "current/class",
      gender: "current/gender",
      race: "current/race",
      alignment: "current/alignment",
      background: "current/background",
      languages: "current/languages",
      traits: "current/traits",
      image: "current/image",
      ready: "current/ready",
      stats: "current/stats",
    }),
  },
  methods: {
    generateReport() {
      // this.$refs.html2Pdf.generatePdf();
      var element = document.getElementById("pdf2Print");
      // html2pdf(element);
      var opt = {
        margin: 0,
        filename: this.name,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          letterRendering: true,
          useCORS: true,
        },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      // New Promise-based usage:
      html2pdf().set(opt).from(element).save();
    },
  },
  mounted() {
    this.$store.dispatch("loader/pending");
    getImage(this.race.index, this.gender, this._class.index, this.image)
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
};
</script>

<style scoped></style>
