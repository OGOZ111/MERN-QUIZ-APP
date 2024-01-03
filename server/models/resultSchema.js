import mongoose from "mongoose";

const { Schema } = mongoose;

// result model

const resultModel = new Schema({
  username: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  acheived: { type: String, default: "0" },
  createdAt: { type: Date, defalt: Date.now },
});

export default mongoose.model("result", resultModel);
