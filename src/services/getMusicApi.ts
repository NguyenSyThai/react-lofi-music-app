import axios from "axios";

const options = {
  method: "GET",
  url: "https://soundcloud-scraper.p.rapidapi.com/v1/track/metadata",
  params: {
    track: "https://soundcloud.com/edsheeran/photograph",
  },
  headers: {
    "X-RapidAPI-Key": "9ae32b6d20msh29ea70fb6b0a34bp16717fjsn92a033317f64",
    "X-RapidAPI-Host": "soundcloud-scraper.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
