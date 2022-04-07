import httpClient from "./httpClient";

const URL = "https://www.dnd5eapi.co/api/";
const ENDPOINTS = {
  RACES: "races/",
  CLASSES: "classes/",
  ALIGNMENTS: "alignments/",
  ABILITY_SCORES: "ability-scores/",
  LANGUAGES: "languages/",
  TRAITS: "traits/",
};

export default {
  raceList() {
    return httpClient.get(`${URL}${ENDPOINTS.RACES}`);
  },
  raceGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.RACES}${slug}`);
  },
  classList() {
    return httpClient.get(`${URL}${ENDPOINTS.CLASSES}`);
  },
  classGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.CLASSES}${slug}`);
  },
  alignmentList() {
    return httpClient.get(`${URL}${ENDPOINTS.ALIGNMENTS}`);
  },
  alignmentGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.ALIGNMENTS}${slug}`);
  },
  languageList() {
    return httpClient.get(`${URL}${ENDPOINTS.LANGUAGES}`);
  },
  languageGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.LANGUAGES}${slug}`);
  },
  traitList() {
    return httpClient.get(`${URL}${ENDPOINTS.TRAITS}`);
  },
  traitGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.TRAITS}${slug}`);
  },
  abilityScoreList() {
    return httpClient.get(`${URL}${ENDPOINTS.ABILITY_SCORES}`);
  },
  abilityScoreGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.ABILITY_SCORES}${slug}`);
  },
};
