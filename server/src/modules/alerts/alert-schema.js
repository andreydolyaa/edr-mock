import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open",
  },
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const Alert = mongoose.model("Alert", alertSchema);
