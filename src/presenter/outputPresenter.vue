<template>
  <div>
    <div class="row-fluid">
      <MyOutputView @output="generateReport" />
      <pdfVue
        myName="Leyndell"
        :myClass="myClass"
        :myRace="myRace"
        :myAlignment="myAlignment"
        :myPicture="myPicture.url"
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
            :myPicture="myPicture.url"
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
// import { RAPIDAPI_KEY } from "../api/rapidApiKey";

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
      myPicture: {
        url: "src/assets/dd_logo.png",
      },
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  // mounted() {
  //   const options = {
  //     method: "GET",
  //     url: "https://bing-image-search1.p.rapidapi.com/images/search",
  //     params: { q: "paladin dwarf", safeSearch: "Moderate", count: "1" },
  //     headers: {
  //       "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  //       "X-RapidAPI-Key": RAPIDAPI_KEY,
  //     },
  //   };
  //   const axios = require("axios");
  //   const comp = this;
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       comp.myPicture.url = response.data.value[0].contentUrl;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // },
};
</script>

<style scoped>
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
