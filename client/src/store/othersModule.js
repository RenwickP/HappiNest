import Axios from "axios";

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 5000,
  withCredentials: true
});
export default {
  actions: {
    createFakeRoom({ commit, dispatch }, room) {
      commit("addFakeRoom", room);
    },
    createHouseName({ commit, dispatch }, house) {
      commit("addFakeHouse", house);
    },
    async setActiveProfile({ commit, dispatch }, userId) {
      let profile = await api.get("profiles", userId);
      commit("setActiveProfile", profile.data[0]);
      dispatch("getHousesForProfile", profile.data[0]._id);
    },
    async editUsername({ commit, dispatch }, update) {
      let res = await api.put("profiles/" + update.id, update);
      commit("setActiveProfile", res.data);
    }
  }
};
