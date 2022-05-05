<template>
  <div>
    <div class="row-fluid">
      <MyOutputView
        @output="generateReport"
        :dropdownAttribute="dropdownAttribute"
      />
      <pdfVue
        myName="name"
        :myClass="myClass"
        :myRace="race"
        :myAlignment="alignment"
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
        :html-to-pdf-options="htmlToPdfOptions"
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
import { mapGetters } from "vuex";
import { RAPIDAPI_KEY } from "../api/rapidApiKey";

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
      // background: "current/background",
      // languages: "current/languages",
      // traits: "current/traits",
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
      dropdownAttribute: ["Elf", "Gnome", "Dwarf", "Human", "Troll"],
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://bing-image-search1.p.rapidapi.com/images/search",
      params: { q: "CHAOS ELF", safeSearch: "Moderate", count: "1" },
      headers: {
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        "X-RapidAPI-Key": RAPIDAPI_KEY,
      },
    };
    const axios = require("axios");
    const comp = this;
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        comp.myPicture.url = response.data.value[0].contentUrl;
        toDataURL(response.data.value[0].contentUrl, function (dataUrl) {
          console.log("RESULT:", dataUrl);
          comp.myPicture.url = dataUrl;
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}
</script>

<style scoped>
.row-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
