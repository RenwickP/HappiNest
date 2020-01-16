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

export default new Vuex.Store({
  state: {
    user: {},
    fakeRooms: [],
    fakeHouse: "",
    profiles: [],
    houses: [],
    activeProfile: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    setUser(state, user) {
      state.user = user;
      console.log(state.user);
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
      console.log(state.activeProfile);
    },
    setProfile(state, prof) {
      state.activeProfile = prof;
      console.log(state.activeProfile);
    }
  },
  actions: {
    async setActiveProfile({ commit, dispatch }, userId) {
      let profile = await api.get("profiles", userId);
      commit("setActiveProfile", profile);
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
    //#region -- HOUSE FUNCTIONS --
    async createHouse({ commit, dispatch }, newHouse) {
      let res = await api.post("houses", newHouse);
      commit("setHouse", res.data);
    },

    async getHousesForProfile({ commit, dispatch }, profileId) {
      let res = await api.get("profiles/" + profileId + "/houses");
      commit("setResource", { resource: "houses", data: res.data });
    }
    //#endregion
  }
});
