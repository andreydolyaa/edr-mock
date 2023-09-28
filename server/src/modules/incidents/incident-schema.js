import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  incidentType: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  sourceIp: {
    type: String,
    required: true,
  },
  targetIp: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open",
  },
});

export const Incident = mongoose.model("Incident", incidentSchema);
