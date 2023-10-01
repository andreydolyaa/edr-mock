import mongoose from "mongoose";

const endpointSchema = new mongoose.Schema({
  hostname: String,
  ipAddress: String,
  osVersion: String,
  status: String,
  lastSeen: Date,
  cpuUsage: Number,
  memoryUsage: Number,
  diskSpaceFree: String,
  activeProcesses: Number,
  loggedInUsers: Number,
  virusScanStatus: String,
  firewallStatus: String,
  antimalwareStatus: String,
  patchStatus: String,
  diskEncryptionStatus: String,
  networkType: String,
  dnsServer: String,
  gateway: String,
  openPorts: [Number],
  lastSecurityScan: Date,
  networkConnections: Number,
  actions: [String],
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const Endpoint = mongoose.model("Endpoint", endpointSchema);
