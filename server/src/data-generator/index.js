import { logsData } from "../modules/event-logs/eventLogsData.js";
import { alertsData } from "../modules/alerts/alertsData.js";
import { Log } from "../modules/event-logs/eventLogsSchemas.js";
import { Alert } from "../modules/alerts/alertsSchema.js";
import log from "../core/logger.js";

export const generateMockData = async () => {
  writeLogs().then(writeAlerts);
};

export const writeLogs = async () => {
  logsData.forEach(async (x) => {
    try {
      const log = new Log(x);
      await log.save();
    } catch (error) {
      log.error("Failed to write Log to DB: " + error);
    }
  });
};

export const writeAlerts = async () => {
  alertsData.forEach(async (x) => {
    try {
      const alert = new Alert(x);
      await alert.save();
    } catch (error) {
      log.error("Failed to write Alert to DB: " + error);
    }
  });
};
