import mongoose from "mongoose";
const networkTrafficSchema = new mongoose.Schema({
  sourceIp: {
    type: String,
    required: true,
  },
  destinationIp: {
    type: String,
    required: true,
  },
  sourcePort: {
    type: Number,
    required: true,
  },
  destinationPort: {
    type: Number,
    required: true,
  },
  protocol: {
    type: String,
    required: true,
  },
  bytesSent: {
    type: Number,
    required: true,
  },
  bytesReceived: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

export const Network = mongoose.model("Network", networkTrafficSchema);
