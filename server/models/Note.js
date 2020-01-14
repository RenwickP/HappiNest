import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Note = new Schema({
  title: { type: String, required: true },
  // creator: { type: ObjectId, ref: 'Profile', required: true },
  description: { type: String },
  creator: { type: ObjectId, ref: 'Profile', required: true },
  communal: { type: Boolean, default: false }
}, { timestamps: true })

export default Note