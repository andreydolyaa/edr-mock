import mongoose from "mongoose";

const schema = (keys = {}) => {
  return new mongoose.Schema(keys);
};

const AlertSchema = schema({
  alertId: String,
  timestamp: Date,
  severity: String,
  description: String,
  sourceProcess: String,
  destinationIp: String,
  status: String,
});

const BrowserSchema = schema({
  timestamp: Date,
  url: String,
  title: String,
});

const TerminalSchema = schema({
  timestamp: Date,
  command: String,
  directory: String,
});

const ProcessSchema = schema({
  pid: Number,
  name: String,
  user: String,
  cpuUsage: Number,
  memoryUsage: Number,
});

const SystemHealthSchema = schema({
  cpuUsage: Number,
  memoryUsage: Number,
  diskUsage: Number,
});

const NetworkInfoSchema = schema({
  ipAddress: String,
  macAddress: String,
  subnetMask: String,
  gateway: String,
});

// TODO: move schemas to related directories
const DeviceSchema = schema({
  deviceId: {
    type: String,
    default: function () {
      return this._id;
    },
  },
  deviceName: String,
  deviceType: String,
  osType: String,
  osVersion: String,
  lastSeen: Date,
  status: String,
  currentUser: String,
  networkInfo: NetworkInfoSchema,
  systemHealth: SystemHealthSchema,
  securityAlerts: [AlertSchema],
  browserHistory: [BrowserSchema],
  terminalHistory: [TerminalSchema],
  runningProcesses: [ProcessSchema],
});

export default mongoose.model("Device", DeviceSchema);
