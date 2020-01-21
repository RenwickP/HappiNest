import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Chore = new Schema(
  {
    dishes: { type: Number, default: 0 },
    vacuumed: { type: Number, default: 0 },
    wipedCounters: { type: Number, default: 0 },
    dusted: { type: Number, default: 0 },
    mowedLawn: { type: Number, default: 0 },
    pulledWeeds: { type: Number, default: 0 },
    trash: { type: Number, default: 0 },
    cleanedFridge: { type: Number, default: 0 },
    swept: { type: Number, default: 0 },
    mopped: { type: Number, default: 0 },
    bathroom: { type: Number, default: 0 },
    houseId: { type: ObjectId, ref: "House", required: true },
    profileId: { type: ObjectId, ref: "Profile", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Chore;
