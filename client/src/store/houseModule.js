import Axios from 'axios'

let base = window.location.host.includes('localhost:8080')
  ? '//localhost:3000/'
  : '/'

let api = Axios.create({
  baseURL: base + 'api/',
  timeout: 3000,
  withCredentials: true
})

export default {
  actions: {
    async createHouse ({ commit, dispatch }, newHouse) {
      let res = await api.post('houses', newHouse)
      commit('setHouse', res.data)
      dispatch('getHousesForProfile', res.data.creator)
    },

    async getHousesForProfile ({ commit, dispatch }, profileId) {
      let res = await api.get('profiles/' + profileId + '/rels')
      commit('setResource', { resource: 'houses', data: res.data })
    },

    async setActiveHouse ({ commit, dispatch }, id) {
      let res = await api.get('houses/' + id)
      commit('setActiveHouse', res.data)
    },

    async getProfiles ({ commit, dispatch }, id) {
      let res = await api.get('houses/' + id + '/rels')
      commit('setProfiles', res.data)
    },
    async addRoommate ({ commit, dispatch }, roommate) {
      let id = roommate.houseId
      let res = await api.post('houses/' + id, roommate)
      dispatch('getAddedProfiles', res.data.houseId)
    },

    async getAddedProfiles ({ commit, dispatch }, id) {
      let res = await api.get('houses/' + id + '/rels')
      commit('setNewProfile', res.data)
      dispatch('getProfiles', res.data.houseId)
    },

    async editHouse ({ commit, dispatch }, update) {
      let res = await api.put('houses/' + update.id + '/house', update)
      dispatch('setActiveHouse', res.data._id)
    }
  }
}
