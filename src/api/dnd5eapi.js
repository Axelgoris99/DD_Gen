import httpClient from "./httpClient";

const URL = "https://dnd5eapi.co";
const ENDPOINTS = {
  RACES: "/api/races",
  CLASSES: "/api/classes",
  ALIGNMENTS: "/api/alignments",
  ABILITY_SCORES: "api/ability-scores",
  LANGUAGES: "api/languages",
  TRAITS: "api/traits",
};

export default {
  raceList() {
    return httpClient.get(`${URL}${ENDPOINTS.RACES}`);
  },
  raceGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.RACES}/${slug}`);
  },
  classList() {
    return httpClient.get(`${URL}${ENDPOINTS.CLASSES}`);
  },
  classGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.CLASSES}/${slug}`);
  },
  alignmentList() {
    return httpClient.get(`${URL}${ENDPOINTS.ALIGNMENTS}`);
  },
  alignmentGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.ALIGNMENTS}/${slug}`);
  },
  languageList() {
    return httpClient.get(`${URL}${ENDPOINTS.LANGUAGES}`);
  },
  languageGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.LANGUAGES}/${slug}`);
  },
  traitList() {
    return httpClient.get(`${URL}${ENDPOINTS.TRAITS}`);
  },
  traitGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.TRAITS}/${slug}`);
  },
  abilityScoreGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.ABILITY_SCORES}/${slug}`);
  },
};
