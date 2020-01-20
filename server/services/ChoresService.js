import mongoose from "mongoose";
import Chore from "../models/Chore";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Chore ", Chore);

class ChoresService {
	async createChore(body) {
		let data = await _repository.create(body)
		return data
	}
	async getChoresByHouse(id) {
		let data = _repository.find({ houseId: id })
		return data
	}
}

const _choresService = new ChoresService();
export default _choresService;