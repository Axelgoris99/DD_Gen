<template>
  <div v-if="isVisible" class="loader-overlay">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span class="text" v-html="text"></span>
  </div>
</template>

<script>
export default {
  name: "http-loader",
  props: {
    isVisible: { type: Boolean, required: true },
    text: { type: String, required: false, default: "" },
  },
};
</script>

<style>
.loader-overlay {
  position: fixed;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  cursor: pointer;
}

span.text {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.loader {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
}
.loader div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader div:nth-child(1) {
  left: 8px;
  animation: loader1 0.6s infinite;
}
.loader div:nth-child(2) {
  left: 8px;
  animation: loader2 0.6s infinite;
}
.loader div:nth-child(3) {
  left: 32px;
  animation: loader2 0.6s infinite;
}
.loader div:nth-child(4) {
  left: 56px;
  animation: loader3 0.6s infinite;
}
@keyframes loader1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
