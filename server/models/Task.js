import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Task = new Schema({
  title: { type: String, required: true },
  // creator: { type: ObjectId, ref: 'Profile', required: true },
  description: { type: String },
  date: { type: Date },
  creator: { type: ObjectId, ref: 'Profile', required: true },
}, { timestamps: true })

export default Task