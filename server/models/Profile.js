import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Profile = new Schema(
  {
    userId: { type: ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    //  ref: 'User'
    avatar: { type: String, default: "https://robohash.org/" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;
