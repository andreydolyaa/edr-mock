import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
  incidentId: String,
  description: String,
  severity: String,
  status: String,
  alertIds: [String],
  timestamp: Date,
  additionalInfo: String,
  assignedTo: String,
  resolution: String,
  id: {
    type: String,
    default: function () {
      return this._id;
    },
    index: true,
  },
});

export const Incident = mongoose.model("Incident", incidentSchema);
