<template>
  <section
    class="container"
    :style="[
      download
        ? { 'overflow-y': 'visible' }
        : { 'overflow-y': 'scroll', height: '900px' },
    ]"
  >
    <article class="half">
      <h1>{{ myName }}</h1>
      <h2>{{ myClass.name }}</h2>
      <p class="detail" style="text-align: center">
        {{ myGender }}
      </p>
      <p class="detail" style="text-align: center">
        {{ myRace.name }} - {{ myAlignment.name }}
      </p>
      <p class="detail" style="text-align: center">
        {{ myBackground.desc }}
      </p>
      <div class="tabs">
        <span class="tab main active">Abilities</span>
      </div>
      <div class="content">
        <div class="main-cont cont">
          <form action="#" method="post" enctype="multipart/form-data">
            <div class="stats">
              <div>
                <label for="hitpoints">Hitpoints</label>
                <div class="inpt number">18</div>
              </div>
              <div>
                <label for="armor">Hit Die</label>
                <div class="inpt number">{{ myClass.hit_die }}</div>
              </div>
            </div>
            <hr />
            <div class="stats abilities">
              <div>
                <label for="str">STR</label>
                <div id="str" class="stat">
                  {{ myStats.str }} ({{ Math.floor((myStats.str - 10) / 2) }})
                </div>
              </div>
              <div>
                <label for="dex">DEX</label>
                <div id="dex" class="stat">
                  {{ myStats.dex }} ({{ Math.floor((myStats.dex - 10) / 2) }})
                </div>
              </div>
              <div>
                <label for="con">CON</label>
                <div id="con" class="stat">
                  {{ myStats.con }} ({{ Math.floor((myStats.con - 10) / 2) }})
                </div>
              </div>
            </div>
            <div class="stats abilities">
              <div>
                <label for="int">INT</label>
                <div id="int" class="stat">
                  {{ myStats.int }} ({{ Math.floor((myStats.int - 10) / 2) }})
                </div>
              </div>
              <div>
                <label for="wis">WIS</label>
                <div id="wis" class="stat">
                  {{ myStats.wis }} ({{ Math.floor((myStats.wis - 10) / 2) }})
                </div>
              </div>
              <div>
                <label for="cha">CHA</label>
                <div id="cha" class="stat">
                  {{ myStats.cha }} ({{ Math.floor((myStats.cha - 10) / 2) }})
                </div>
              </div>
            </div>
            <hr />
            <p class="detail" style="text-align: center">
              {{ myAlignment.desc }}
            </p>
            <p class="detail" style="text-align: center">
              {{ myRace.age }}
            </p>
          </form>
        </div>
      </div>
    </article>
    <img class="halfBg" :src="myImage" />
    <div v-if="download" class="html2pdf__page-break marginBot"></div>
    <article class="half">
      <div v-if="download">
        <h1>{{ myName }}</h1>
      </div>
      <div class="profs">
        <h3>Traits</h3>
        <ul>
          <li v-for="trait in myTraits" :key="trait.index">
            <span class="bold">{{ trait.name }} </span>
            <p>{{ trait.desc }}</p>
          </li>
        </ul>
      </div>
      <div class="profs">
        <h3>Languages</h3>
        <ul>
          <li v-for="lang in myLanguages" :key="lang.index">
            <span class="bold">{{ lang.name }} </span>
            <p>{{ lang.desc }}</p>
          </li>
        </ul>
      </div>
      <div class="profs">
        <h3>Proficiencies</h3>
        <div class="flex">
          <div
            v-for="prof in myClass.proficiencies"
            :key="prof.index"
            class="bold"
          >
            <div class="marginLR">{{ prof.name }}</div>
          </div>
        </div>
      </div>
      <div class="profs">
        <br />
        <h3>Saving Throws</h3>
        <div class="flex">
          <div
            v-for="saving in myClass.saving_throws"
            :key="saving.index"
            class="bold"
          >
            <div class="marginLR">{{ saving.name }}</div>
          </div>
        </div>
      </div>
      <div class="profs">
        <h3>Starting Equipment</h3>
        <div class="flex">
          <div
            v-for="items in myClass.starting_equipment"
            :key="items.equipment.index"
            class="bold"
          >
            <div class="marginLR">{{ items.equipment.name }}</div>
          </div>
        </div>
      </div>
      <img class="smallImg" :src="myImage" />
    </article>
  </section>
</template>

<script>
export default {
  name: "MyPDF",
  props: {
    download: Boolean,
    myName: String,
    myClass: Object,
    myBackground: Object,
    myAlignment: Object,
    myAbilityScore: Object,
    myRace: Object,
    myTraits: Array,
    myLanguages: Array,
    myGender: String,
    myImageNumber: Number,
    myStats: Object,
    myImage: String,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #f8f8f8;
}
body .container {
  position: relative;
  width: 95%;
  max-width: 740px;
  margin: 30px auto;
  background-color: #ffffff;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
}

body .container .half {
  float: left;
  width: 75%;
  height: 100%;
  padding: 58px 0px 10px 30px;
  background-color: transparent;
}

body .container .half.bg {
  background-size: 300px;
  width: 25%;
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 10%;
}

.halfBg {
  object-fit: cover;
  position: absolute;
  top: 2%;
  right: 1%;
  height: 40%;
  width: 20%;
}
body .container h1 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  text-indent: 6px;
  letter-spacing: 7px;
  text-transform: uppercase;
  color: #263238;
}

body .container h2 {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 23px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #263238;
}

body .container h3 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9em;
}

body .container h3 span.detail {
  text-transform: capitalize;
}

.bold {
  font-weight: 700;
}

.detail {
  font-size: 0.8em;
  font-style: italic;
}

a {
  color: #263238;
}

body .container .tabs {
  width: 100%;
  margin-bottom: 29px;
  border-bottom: 1px solid #d9d9d9;
}

body .container .tabs .tab {
  display: inline-block;
  margin-bottom: -1px;
  padding: 20px 15px 10px;
  cursor: pointer;
  letter-spacing: 0;
  border-bottom: 1px solid #d9d9d9;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  transition: all 0.1s ease-in-out;
}

body .container .tabs .tab a {
  font-size: 11px;
  text-decoration: none;
  text-transform: uppercase;
  color: #d9d9d9;
  transition: all 0.1s ease-in-out;
}

body .container .tabs .tab.active a,
body .container .tabs .tab:hover a {
  color: #263238;
}

body .container .tabs .tab.active {
  border-bottom: 1px solid #263238;
}

body .container .content .stats {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

body .container .content .stats.abilities {
  width: 100%;
  margin-bottom: 15px;
}

body .container .content .stats div {
  margin: 0 10px;
}

body .container .content .stats .stat {
  font-size: 14px;
  text-align: center;
}

.actions {
  margin-bottom: 20px;
}

.actions p {
  margin: 10px;
  font-size: 0.9em;
}

.profs ul,
.actions ul {
  margin: 10px;
  font-size: 0.9em;
}

.profs ul li,
.actions ul li {
  margin: 10px auto;
}

body .container .content form {
  position: relative;
  height: 300px;
}

body .container .content label:first-of-type,
body .container .content input:first-of-type,
body .container .content .more:first-of-type {
  -moz-animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
  -webkit-animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
  animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
}

body .container .content label:nth-of-type(2),
body .container .content input:nth-of-type(2),
body .container .content .more:nth-of-type(2) {
  -moz-animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
  -webkit-animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
  animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
}

body .container .content label:nth-of-type(3),
body .container .content input:nth-of-type(3),
body .container .content .more:nth-of-type(3) {
  -moz-animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
  -webkit-animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
  animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
}

body .container .content label {
  font-size: 12px;
  color: #263238;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

body .container .content .stats label {
  text-align: center;
  width: 100%;
}

body .container .content .stats.abilities label {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1em;
}

body .container .content label:not([for="remember"]) {
  display: inline-block;
}

body .container .content .inpt {
  font-size: 14px;
  display: block;
  width: 100%;
  height: 42px;
  margin-bottom: 12px;
  padding: 10px 13px;
  color: #999999;
  border: 1px solid #d9d9d9;
  background: transparent;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

body .container .content .inpt.number {
  width: 60px;
}

body .container .content .inpt::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
  font-family: "Lato", sans-serif;
}

body .container .content .inpt:-moz-placeholder {
  font-size: 14px;
  color: #999999;
  font-family: "Lato", sans-serif;
}

body .container .content .inpt::-moz-placeholder {
  font-size: 14px;
  color: #999999;
  font-family: "Lato", sans-serif;
}

body .container .content .inpt:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
  font-family: "Lato", sans-serif;
}

body .container .content .inpt:focus {
  border-color: #999999;
}

body .container .content .checkbox {
  margin-top: 4px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 0;
  height: 0;
  margin: 17px -1px;
  padding: 0;
  border: 0;
  opacity: 0;
  visibility: hidden;
}

body .container .content .checkbox + label {
  vertical-align: middle;
  display: inline-block;
  width: 50%;
}

body .container .content .checkbox + label:before {
  content: "\A";
  color: #999999;
  font-family: Verdana;
  font-weight: bold;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: transparent;
  border: 1px solid #d9d9d9;
  width: 11px;
  height: 11px;
  margin: -2px 8px 0 0;
}

body .container .content .checkbox:checked + label:before {
  content: "✓";
}

body .container .content .submit-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
}

body .container .content .submit-wrap a {
  font-size: 12px;
  display: block;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  color: #999999;
}

body .container .content .submit-wrap a:hover {
  text-decoration: underline;
}

body .container .content .signup-cont {
  display: none;
}

@keyframes slideIn {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    margin-left: -320px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    margin-left: 0px;
  }
}
@-webkit-keyframes slideIn {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    margin-left: -320px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    margin-left: 0px;
  }
}

.credits {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #999999;
  font-size: 14px;
  margin: 0 10px 10px 0;
}

.credits a {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  color: inherit;
  font-weight: 700;
  text-decoration: none;
}

.smallImg {
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 10px;
  margin-left: 10px;
}
.marginLR {
  margin-right: 10px;
  margin-left: 10px;
}
.marginBot {
  margin-bottom: 10%;
}
</style>
