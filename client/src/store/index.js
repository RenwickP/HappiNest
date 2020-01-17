import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import ApiError from "../../../server/utils/ApiError";
import _profilesService from "../../../server/services/ProfilesService";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});
let robo = Axios.create({
  baseURL: "https://robohash.p.rapidapi.com/index.php",
  headers: {
    "x-rapidapi-host": "robohash.p.rapidapi.com",
    "x-rapidapi-key": "159f8ae7dbmshcb77305ee28c85fp18d00fjsn0ebaae29dd4e"
  }
});

export default new Vuex.Store({
  state: {
    user: {},
    fakeRooms: [],
    fakeHouse: "",
    profiles: [],
    houses: [],
    activeProfile: {},
    activeHouse: {},
    robos: []
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    setUser(state, user) {
      state.user = user;
    },
    resetState(state) {
      (state.user = {}), (state.profiles = []), (state.houses = []);
    },
    addFakeRoom(state, room) {
      state.fakeRooms.push(room);
    },
    addFakeHouse(state, house) {
      state.fakeHouse = house;
    },
    //FOR HOUSES
    setHouse(state, house) {
      state.houses.push(house);
    },
    setActiveProfile(state, profile) {
      state.activeProfile = profile.data[0];
    },

    setActiveHouse(state, house) {
      state.activeHouse = house[0];
    },
    setProfiles(state, profiles) {
      if (state.profiles.length == 0) {
        state.profiles.push(profiles[0].profileId);
      } else {
        for (let i = 0; i < state.profiles.length; i++) {
          const elem = state.profiles[i];
          if (profiles[0].profileId._id != elem._id) {
            state.profiles.push(profiles[0].profileId);
          } else {
            break;
          }
        }
      }
      console.log("from profiles", state.profiles);
    },
    setRobos(state, img) {
      state.robos.push(img);
    }
  },
  actions: {
    async setActiveProfile({ commit, dispatch }, userId) {
      let profile = await api.get("profiles", userId);
      // commit("setActiveProfile", profile);
      dispatch("getHousesForProfile", profile.data[0]._id);
      dispatch("getRobo", profile.data[0]);
    },

    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "houses" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "houses" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    //#endregion

    createFakeRoom({ commit, dispatch }, room) {
      commit("addFakeRoom", room);
    },
    createHouseName({ commit, dispatch }, house) {
      commit("addFakeHouse", house);
    },
    async getRobo({ commit, dispatch }, profile) {
      let res = await robo.get("" + profile.name);
      let newData = {};
      newData._id = profile._id;
      newData.url = res.data.imageUrl;
      dispatch("editProfile", newData);
    },
    async editProfile({ commit, dispatch }, data) {
      let res = await api.put("profiles/" + data._id, { avatar: data.url });
      commit("setActiveProfile", res.data);
    },
    //#region -- HOUSE FUNCTIONS --
    async createHouse({ commit, dispatch }, newHouse) {
      let res = await api.post("houses", newHouse);
      commit("setHouse", res.data);
    },

    async getHousesForProfile({ commit, dispatch }, profileId) {
      let res = await api.get("profiles/" + profileId + "/rels");
      commit("setResource", { resource: "houses", data: res.data });
    },

    async setActiveHouse({ commit, dispatch }, id) {
      let res = await api.get("houses/" + id);
      commit("setActiveHouse", res.data);
    },

    async getProfiles({ commit, dispatch }, id) {
      let res = await api.get("houses/" + id + "/rels");
      commit("setProfiles", res.data);
    }
    //#endregion
  }
});
