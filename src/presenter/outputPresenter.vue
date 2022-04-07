<template>
  <div>
    <div class="row-fluid">
      <MyOutputView @output="generateReport" />
      <pdfVue
        myName="Leyndell"
        :myClass="myClass"
        :myRace="myRace"
        :myAlignment="myAlignment"
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
            myName="Leyndell"
            :myClass="myClass"
            :myRace="myRace"
            :myAlignment="myAlignment"
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
export default {
  name: "MyOutput",
  components: {
    MyOutputView,
    VueHtml2pdf,
    pdfVue,
  },
  data() {
    return {
      myClass: {
        name: "Paladin",
        hp: "18",
      },
      myRace: {
        name: "Dwarf",
      },
      myAlignment: {
        name: "Chaotic Evil",
      },
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style scoped>
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
