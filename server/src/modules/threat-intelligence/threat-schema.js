import mongoose from "mongoose";

const threatIntelligenceSchema = new mongoose.Schema({
  indicator: {
    type: String,
    required: true,
  },
  indicatorType: {
    type: String,
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
  confidenceLevel: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  tags: [String],
  referenceLinks: [String],
});

export const Threat = mongoose.model(
  "Threat",
  threatIntelligenceSchema
);
