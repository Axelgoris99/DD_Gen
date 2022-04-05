import httpClient from "./httpClient";

const URL = "https://api.open5e.com";
const ENDPOINTS = {
  BACKGROUNDS: "/backgrounds",
};

export default {
  backgrounds() {
    return httpClient.get(`${URL}${ENDPOINTS.BACKGROUNDS}`);
  },
  background(slug) {
    return httpClient.get(`${URL}${ENDPOINTS.BACKGROUNDS}/${slug}`);
  },
};
