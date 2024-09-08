import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a712c5dd7064f0199c88891914bec06",
  },
});
