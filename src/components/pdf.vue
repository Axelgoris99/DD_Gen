<template>
  <section class="container">
    <article class="half">
      <h1>{{ myName }}</h1>
      <h2>{{ myClass.name }}</h2>
      <p class="detail" style="text-align: center">
        {{ myRace.name }} - {{ myAlignment.name }}
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
                <label for="armor">Armor Class</label>
                <div class="inpt number">15</div>
              </div>
              <div>
                <label for="speed">Speed</label>
                <div class="inpt number">30</div>
              </div>
            </div>
            <hr />
            <div class="stats abilities">
              <div>
                <label for="str">STR</label>
                <div id="str" class="stat">8 (+0)</div>
              </div>
              <div>
                <label for="dex">DEX</label>
                <div id="dex" class="stat">16 (+3)</div>
              </div>
              <div>
                <label for="con">CON</label>
                <div id="con" class="stat">10 (+0)</div>
              </div>
            </div>
            <div class="stats abilities">
              <div>
                <label for="int">INT</label>
                <div id="int" class="stat">13 (+1)</div>
              </div>
              <div>
                <label for="wis">WIS</label>
                <div id="wis" class="stat">12 (+1)</div>
              </div>
              <div>
                <label for="cha">CHA</label>
                <div id="cha" class="stat">16 (+3)</div>
              </div>
            </div>
            <hr />

            <div class="profs">
              <h3>
                Proficiencies <span class="detail">(+2 Proficiency Bonus)</span>
              </h3>

              <ul>
                <li>
                  <span class="bold">Saving Throws </span>
                  <span>Dex +5, Int +3</span>
                </li>
                <li>
                  <span class="bold">Skills </span
                  ><span>
                    Deception +5, Insight +3, Investigation +3, Perception +5*,
                    Persuasion +5, Sleight of Hand +5, Stealth +7*</span
                  >
                </li>
                <li>
                  <span class="bold">Tools </span>
                  <span>disguise kit, poisoner’s kit, thieves’ tools</span>
                </li>
                <li>
                  <span class="bold">Armor </span>
                  <span>Light Armor (studded leather)</span>
                </li>
                <li>
                  <span class="bold">Weapons </span>
                  <span
                    >simple weapons, hand crossbows, longswords, rapiers,
                    shortswords</span
                  >
                </li>
                <li>
                  <span class="bold">Senses </span>
                  <span>passive (Perception) 15</span>
                </li>
                <li>
                  <span class="bold">Languages </span>
                  <span>Common, Elvish, Undercommon, thieves’ cant</span>
                </li>
              </ul>
              <img
                crossOrigin="anonymous"
                referrerPolicy="origin"
                :src="myPicture"
              />
            </div>
          </form>
        </div>
      </div>
    </article>

    <!-- <div
      class="half bg"
      :style="{ 'background-image': 'url(' + myPicture + ')' }"
    ></div> -->
    <div class="html2pdf__page-break"></div>
  </section>
</template>

<script>
export default {
  name: "MyPDF",
  props: {
    myName: String,
    myClass: Object,
    myBackground: Object,
    myAlignment: Object,
    myAbilityScore: Object,
    myRace: Object,
    myPicture: String,
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
  overflow: hidden;
  width: 95%;
  max-width: 740px;
  height: 900px;
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
</style>
