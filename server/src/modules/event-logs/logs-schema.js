import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  eventType: String,
  dateTime: Date,
  user: String,
  sourceIp: String,
  destinationIp: String,
  protocol: String,
  rule: String,
  signatureId: Number,
  fileName: String,
  actionTaken: String,
  url: String,
  changeType: String,
  severity: String,
  vpnServer: String,
  connectionDuration: String,
  reason: String,
  sender: String,
  recipient: String,
  anomalyDetected: String,
  sourceIpRange: String,
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const Log = mongoose.model("Log", logSchema);
