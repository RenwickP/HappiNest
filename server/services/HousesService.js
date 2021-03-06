import mongoose from 'mongoose'
import House from '../models/House'
import Profile from '../models/Profile'
import ApiError from '../utils/ApiError'
import HouseRel from '../models/HouseRel'
import _choresService from '../services/ChoresService'

const _repository = mongoose.model('House', House)
const _houseRelRepository = mongoose.model('HouseRel', HouseRel)

class HousesService {
  //#region -- HOUSE REL FUNCTIONS --
  async createHouseRel (relData) {
    let data = await _houseRelRepository.create(relData)
    _choresService.createChore(relData)
    return data
  }
  async getRelsByProfile (id) {
    return await _houseRelRepository
      .find({ profileId: id })
      // returns rel ID
      .populate('houseId')
    // returns rel ID
  }
  async getRelsByHouse (id) {
    return await _houseRelRepository
      .find({ houseId: id })
      // returns rel ID
      .populate('profileId')
    // returns rel ID
  }
  //#endregion

  //#endregion
  async createHouse (rawData) {
    rawData.admins = rawData.creator
    let data = await _repository.create(rawData)
    let relData = {
      houseId: data._id,
      //@ts-ignore
      profileId: data.creator
    }
    await this.createHouseRel(relData)
    return data
  }

  async getHouseById (id) {
    let data = await _repository.find({ _id: id })
    return data
  }
  async edit (id, update) {
    for (let i = 0; i <= update.admins.length; i++) {
      const element = update.admins[i]
      if (element == update.profileId) {
        let data = await _repository.findOneAndUpdate({ _id: id }, update, {
          new: true
        })
        return data
      }
    }
    throw new ApiError('Not admin cannot delete', 400)
  }
  async delete (id, houseData) {
    if (houseData.profileId == houseData.adminId) {
      let data = await _repository.findOneAndRemove({
        _id: id
      })
    } else {
      throw new ApiError('Not admin cannot delete', 400)
    }
  }
}

const _housesService = new HousesService()
export default _housesService
