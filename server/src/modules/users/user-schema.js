import mongoose from "mongoose";

const userActivitySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  activityType: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  device: String,
  websiteUrl: String,
  fileUrl: String,
  fileSize: String,
  updateType: String,
  repository: String,
  database: String,
  query: String,
  serverName: String,
  backupType: String,
  apiEndpoint: String,
  integrationType: String,
  softwareName: String,
  version: String,
  exportType: String,
  exportedDataSize: String,
  updateDescription: String,
  recipient: String,
  emailSubject: String,
  responseStatus: Number,
  details: mongoose.Schema.Types.Mixed,
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const UserActivity = mongoose.model("UserActivity", userActivitySchema);
