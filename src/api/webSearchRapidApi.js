const axios = require("axios");
import { RAPIDAPI_KEY } from "./rapidApiKey";

const options = {
  method: 'GET',
  url: 'https://bing-image-search1.p.rapidapi.com/images/search',
  params: {q: 'paladin dwarf', safeSearch: 'Moderate', count: '1'},
  headers: {
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
    'X-RapidAPI-Key': RAPIDAPI_KEY
  }
};


