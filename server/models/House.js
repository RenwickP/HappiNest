import mongoose from "mongoose"
let Schema = mongoose.Schema

const House = new Schema({
  title: { type: String, required: true },
  // creator: { type: ObjectId, ref: 'Profile', required: true },
  admins: { type: Array, required: true }
}, { timestamps: true })

export default House