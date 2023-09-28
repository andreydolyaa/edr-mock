import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportType: {
    type: String,
    required: true,
  },
  period: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  visitors: Number,
  pageViews: Number,
  bounceRate: Number,
  conversionRate: Number,
  totalRevenue: Number,
  totalOrders: Number,
  averageOrderValue: Number,
  topSellingProduct: String,
  topSellingCategory: String,
  incidentType: String,
  incidentDate: Date,
  affectedRecords: Number,
  incidentSeverity: String,
  incidentDescription: String,
  totalHoursWorked: Number,
  averageHoursPerEmployee: Number,
  mostProductiveEmployee: String,
  leastProductiveEmployee: String,
  surveyDate: Date,
  overallSatisfaction: Number,
  customerFeedback: String,
  totalInventoryValue: Number,
  averageInventoryTurnover: Number,
  outOfStockProducts: [String],
  averageLatency: Number,
  networkDowntime: String,
  mostFrequentIssue: String,
});

export const Report = mongoose.model("Report", reportSchema);
