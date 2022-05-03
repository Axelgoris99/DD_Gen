<template>
  <div>
    <MyOutputView @output="generateReport" @saveCharacter="saveCharacter" />
    <div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="Yahou!"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <pdfVue></pdfVue>
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
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    saveCharacter() {
      this.$store.commit("characters/ADD_CHARACTER", {
        name: "Thomas",
      });
      this.$router.replace({ name: "profile" });
    },
  },
};
</script>

<style scoped></style>
