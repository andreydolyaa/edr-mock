import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  endpoint: String,
  alertType: String,
  description: String,
  timestamp: Date,
  severity: String,
  sourceIP: String,
  additionalInfo: String,
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const Alert = mongoose.model("Alert", alertSchema);
