import mongoose from "mongoose"
import User from "../models/User"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('User', User)

class UsersService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async getById(id, userId) {
    let data = await _repository.findOne({ _id: id, authorId: userId })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400)
    }
    return data
  }

  async create(rawData) {
    let data = await _repository.create(rawData)
    return data
  }

  async edit(id, userId, update) {
    let data = await _repository.findOneAndUpdate({ _id: id, authorId: userId }, update, { new: true })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }

  async delete(id, userId) {
    let data = await _repository.findOneAndRemove({ _id: id, authorId: userId });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
  }

}


const _usersService = new UsersService()
export default _usersService