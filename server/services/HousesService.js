import mongoose from "mongoose";
import House from "../models/House";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";
import HouseRel from "../models/HouseRel"

const _repository = mongoose.model("House", House);
const _houseRelRepository = mongoose.model('HouseRel', HouseRel)

class HousesService {
  //#region -- HOUSE REL FUNCTIONS --
  async createHouseRel(relData) {
    let data = await _houseRelRepository.create(relData)
    return data
  }
  async getRelsByProfile(id) {
    return await _houseRelRepository.find({ profileId: id })
      .populate('houseId');
  }
  //#endregion

  async createHouse(rawData) {
    rawData.admins = rawData.creator;
    let data = await _repository.create(rawData);
    let relData = {
      houseId: data._id,
      //@ts-ignore
      profileId: data.creator
    }
    this.createHouseRel(relData)
    return data;
  }

  async edit(id, update) {
    if (update.admins == update.profileId) {
      let data = await _repository.findOneAndUpdate({ _id: id }, update, {
        new: true
      });
      return data;
    } else {
      throw new ApiError("Not admin cannot delete", 400);
    }
  }
  async delete(id, houseData) {
    if (houseData.profileId == houseData.adminId) {
      let data = await _repository.findOneAndRemove({
        _id: id
      });
    } else {
      throw new ApiError("Not admin cannot delete", 400);
    }
  }
}

const _housesService = new HousesService();
export default _housesService;
