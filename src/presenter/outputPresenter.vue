<template>
  <div>
    <div>
      <MyOutputView
        @output="generateReport"
        :dropdownAttribute="dropdownAttribute"
      />
      <pdfVue
        :myName="name"
        :myClass="myClass"
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
            :myName="name"
            :myClass="myClass"
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
      gender: "current/gender",
      race: "current/race",
      alignment: "current/alignment",
      background: "current/background",
      languages: "current/languages",
      traits: "current/traits",
    }),
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
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style scoped></style>
