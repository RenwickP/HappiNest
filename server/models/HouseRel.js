import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const HouseRel = new Schema(
  {
    houseId: { type: ObjectId, ref: "House", required: true } || { type: ObjectId },
    profileId: { type: ObjectId, ref: "Profile", required: true } || { type: ObjectId }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default HouseRel;
