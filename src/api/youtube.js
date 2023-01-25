import axios from "axios";

export class Youtube {
  // constructor(apiClient) {
  //   this.apiClient = apiClient;
  // }

  async search(keyword) {
    return keyword ? this.#searchBykeyword(keyword) : this.#popularVideos();
  }

  async #searchBykeyword(keyword) {
    return axios
      .get(`/data/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #popularVideos() {
    return axios.get(`/data/popular.json`).then((res) => res.data.items);
  }
}
