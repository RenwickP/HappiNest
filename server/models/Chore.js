import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Chore = new Schema(
  {
    dishes: { type: Number },
    vacuumed: { type: Number },
    wipedCounters: { type: Number },
    dusted: { type: Number },
    mowedLawn: { type: Number },
    pulledWeeds: { type: Number },
    trash: { type: Number },
    cleanedFridge: { type: Number },
    swept: { type: Number },
    mopped: { type: Number },
    bathroom: { type: Number },
    cleanedRoom: { type: Number },
    laundry: { type: Number },
    houseId: { type: ObjectId, ref: "House", required: true },
    profileId: { type: ObjectId, ref: "Profile", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Chore;
