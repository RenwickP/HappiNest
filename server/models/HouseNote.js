import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const HouseNote = new Schema({
  houseId: { type: ObjectId, ref: 'House', required: true },
  profileId: { type: ObjectId, ref: 'Profile', required: true },
  noteId: { type: ObjectId, ref: 'Note', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

export default HouseNote