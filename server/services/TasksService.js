import mongoose from "mongoose";
import Task from "../models/Task";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Task", Task);

class HousesService {
}
const _housesService = new HousesService();
export default _housesService;