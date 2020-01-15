import mongoose from "mongoose";
import House from "../models/House";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("House", House);

class HousesService {
  async getHousesByProfileId(id) {
    return await _repository.find({ profiles: id });
  }

  async createHouse(rawData) {
    rawData.admins = rawData.creator;
    rawData.profiles = rawData.creator;
    let data = await _repository.create(rawData);
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
