import Vue from "vue";
import Vuex from "vuex";
import _profilesService from "../../../server/services/ProfilesService";
import choreModule from "./choreModule";
import houseModule from "./houseModule";
import othersModule from "./othersModule";
import authModule from "./authModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    choreModule,
    houseModule,
    othersModule,
    authModule
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
  }
});
