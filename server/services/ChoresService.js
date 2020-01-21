import mongoose from "mongoose";
import Chore from "../models/Chore";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Chore ", Chore);

class ChoresService {
  async createChore(body) {
    let data = await _repository.create(body);
    return data;
  }
  async getChoresByHouse(id) {
    let data = _repository.find({ houseId: id });
    return data;
  }
  async getChoreByHouseAndProfile(id, update) {
    let data = await _repository.findOneAndUpdate(
      { houseId: id, profileId: update.profileId },
      update
    );
    return data;
  }
  async editChore(id, update) {
    let data = _repository.findOneAndUpdate(
      { houseId: id, profileId: update.profileId },
      update
    );
    return data;
  }
}

const _choresService = new ChoresService();
export default _choresService;
