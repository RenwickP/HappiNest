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
    async getChores({ commit, dispatch }, id) {
      let res = await api.get("houses/" + id + "/chores");
      commit("setHouseChores", res.data);
    },
    async addDishes({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.dishes = res1.data.dishes;
      newData.dishes += 3;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addVacuum({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.vacuumed = res1.data.vacuumed;
      newData.vacuumed += 2;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addCounters({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.wipedCounters = res1.data.wipedCounters;
      newData.wipedCounters += 1;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addDust({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.dusted = res1.data.dusted;
      newData.dusted += 1;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addLawn({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.mowedLawn = res1.data.mowedLawn;
      newData.mowedLawn += 3;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addWeeds({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.pulledWeeds = res1.data.pulledWeeds;
      newData.pulledWeeds += 4;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addTrash({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.trash = res1.data.trash;
      newData.trash += 2;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addFridge({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.cleanedFridge = res1.data.cleanedFridge;
      newData.cleanedFridge += 2;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addSwept({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.swept = res1.data.swept;
      newData.swept += 1;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addMop({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.mopped = res1.data.mopped;
      newData.mopped += 3;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    },
    async addBathroom({ commit, dispatch }, update) {
      let res1 = await api.put("houses/" + update.houseId, update);
      let newData = {};
      newData.profileId = update.profileId;
      newData.bathroom = res1.data.bathroom;
      newData.bathroom += 5;
      let res2 = await api.put("houses/" + update.houseId + "/chores", newData);
      dispatch("getChores", res2.data.houseId);
    }
  }
};
