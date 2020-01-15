import mongoose from "mongoose";
import House from "../models/House";
// import ApiError from "../utils/ApiError";

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

  // async edit(id, userId, update) {
  //   let data = await _repository.findOneAndUpdate(
  //     { _id: id, authorId: userId },
  //     update,
  //     { new: true }
  //   );
  //   if (!data) {
  //     throw new ApiError("Invalid ID or you do not own this board", 400);
  //   }
  //   return data;
  // }

  // async delete(id, userId) {
  //   let data = await _repository.findOneAndRemove({
  //     _id: id,
  //     authorId: userId
  //   });
  //   if (!data) {
  //     throw new ApiError("Invalid ID or you do not own this board", 400);
  //   }
  // }
}

const _housesService = new HousesService();
export default _housesService;
