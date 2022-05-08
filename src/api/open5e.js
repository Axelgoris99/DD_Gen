import httpClient from "./httpClient";

const URL = "https://api.open5e.com";
const ENDPOINTS = {
  BACKGROUNDS: "/backgrounds",
};

export default {
  backgroundList() {
    return httpClient.get(`${URL}${ENDPOINTS.BACKGROUNDS}`);
  },
  backgroundGet(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.BACKGROUNDS}/${slug}`);
  },
};
