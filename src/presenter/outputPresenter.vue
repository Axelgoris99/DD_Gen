<template>
  <div>
    <div class="row-fluid">
      <MyOutputView
        @output="generateReport"
        :dropdownAttribute="dropdownAttribute"
      />
      <pdfVue
        :myName="name"
        :myClass="myClass"
<<<<<<< HEAD
        :myRace="myRace"
        :myAlignment="myAlignment"
        :myPicture="myPicture.url"
=======
        :myRace="race"
        :myAlignment="alignment"
>>>>>>> main
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
        :html-to-pdf-options="htmlToPdfOptions"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <pdfVue
            :myName="name"
            :myClass="myClass"
<<<<<<< HEAD
            :myRace="myRace"
            :myAlignment="myAlignment"
            :myPicture="myPicture.url"
=======
            :myRace="race"
            :myAlignment="alignment"
>>>>>>> main
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
<<<<<<< HEAD
// import { RAPIDAPI_KEY } from "../api/rapidApiKey";

=======
import { mapGetters } from "vuex";
>>>>>>> main
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
<<<<<<< HEAD
      myPicture: {
        url: "https://wow.zamimg.com/uploads/screenshots/small/962061.jpg",
      },
      htmlToPdfOptions: {
        margin: 0,

        filename: `hehehe.pdf`,

        image: {
          type: "png",
          quality: 0.98,
        },

        enableLinks: false,

        html2canvas: {
          scale: 1,
          useCORS: true,
        },
      },
=======
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
>>>>>>> main
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
