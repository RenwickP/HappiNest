import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import ApiError from "../../../server/utils/ApiError";
import _profilesService from "../../../server/services/ProfilesService";
import choreModule from "./choreModule";
import houseModule from "./houseModule";

Vue.use(Vuex);

//Allows axios to work locally or live

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 5000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    choreModule,
    houseModule
  },
  state: {
    user: {},
    fakeRooms: [],
    fakeHouse: "",
    profiles: [],
    houses: [],
    activeProfile: {},
    activeHouse: {},
    houseChores: []
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
      state.activeProfile = profile;
    },

    createProfile(state, profile) {
      state.profiles.push(profile);
    },

    setActiveHouse(state, house) {
      state.activeHouse = house[0];
    },
    setProfiles(state, profiles) {
      for (let i = 0; i < profiles.length; i++) {
        const element = profiles[i];
        if (state.profiles.length == 0) {
          state.profiles.push(element.profileId);
        } else {
          for (let i = 0; i < state.profiles.length; i++) {
            const elem = state.profiles[i];
            if (element.profileId.userId !== elem.userId) {
              state.profiles.push(element.profileId);
              break;
            }
          }
        }
      }
    },
    setNewProfile(state, profiles) {
      state.profiles.push(profiles[profiles.length - 1].profileId);
    },
    setHouseChores(state, chores) {
      state.houseChores = chores;
    }
  },
  actions: {
    async setActiveProfile({ commit, dispatch }, userId) {
      let profile = await api.get("profiles", userId);
      commit("setActiveProfile", profile.data[0]);
      dispatch("getHousesForProfile", profile.data[0]._id);
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
    async editUsername({ commit, dispatch }, update) {
      let res = await api.put("profiles/" + update.id, update);
      commit("setActiveProfile", res.data);
    }
  }
});
