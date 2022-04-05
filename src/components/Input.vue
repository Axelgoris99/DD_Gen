<template>
  <b-container class="bv-example-row" fluid>
    <b-row v-if="typeAttribute == 'dropdown'" align-v="center">
      <b-col cols="4">{{ nameAttribute }}</b-col>
      <b-col cols="8" v-if="!blocked">
        <b-form-select :options="dropdownAttribute"></b-form-select>
      </b-col>
      <b-col cols="8" v-else class="blockedBox"> Result </b-col>
    </b-row>
    <b-row v-if="typeAttribute == 'number'" align-v="center">
      <b-col cols="4">{{ nameAttribute }}</b-col>
      <b-col cols="8" v-if="!blocked">
        <b-form-input type="number" placeholder="0"></b-form-input>
      </b-col>
      <b-col cols="8" v-else class="blockedBox"> Result </b-col>
    </b-row>
    <b-row v-if="typeAttribute == 'text'">
      <b-col cols="4">{{ nameAttribute }}</b-col>
      <b-col cols="8" v-if="!blocked">
        <b-form-textarea
          id="textarea"
          placeholder="Enter something..."
          column=""
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
      <b-col cols="8" v-else class="blockedBox"> Result </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "InputLine",
  props: {
    blocked: Boolean,
    typeAttribute: String,
    dropdownAttribute: Array,
    valueAttribute: Number,
    nameAttribute: String,
  },
  emits: ["changed"],
  methods: {
    eventFire() {
      this.$emit("changed");
    },
  },
};
</script>

<style scoped>
.rowC {
  display: flex;
  flex-direction: row;
}
.blockedBox {
  background-color: white;
  border-style: solid;
  border-radius: 5px;
  border-color: gainsboro;
}
</style>
