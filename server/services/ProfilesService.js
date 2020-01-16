import mongoose from "mongoose";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Profile", Profile);

class ProfileService {
  async getProfileByUserId(userId) {
    return await _repository.find({ userId: userId });
  }
  async getByUserId(userId) {
    return await _repository.find({ userId: userId });
  }

  async create(rawData) {
    let newData = {
      userId: rawData.id,
      name: rawData.name
    };
    let data = await _repository.create(newData);
    return data;
  }

  async edit(id, userId, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, authorId: userId },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }
}

const _profilesService = new ProfileService();
export default _profilesService;
