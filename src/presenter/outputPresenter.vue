<template>
  <div>
    <div>
      <MyOutputView @output="generateReport" />
      <pdfVue
        :download="false"
        :myName="name"
        :myClass="class1"
        :myBackground="background"
        :myRace="race"
        :myAlignment="alignment"
      ></pdfVue>
    </div>
    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        filename="Yahou!"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <pdfVue
            :download="true"
            :myName="name"
            :myClass="class1"
            :myBackground="background"
            :myRace="race"
            :myAlignment="alignment"
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
  computed: {
    ...mapGetters({
      name: "current/name",
      class1: "current/class",
      gender: "current/gender",
      race: "current/race",
      alignment: "current/alignment",
      background: "current/background",
      languages: "current/languages",
      traits: "current/traits",
    }),
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style scoped></style>
