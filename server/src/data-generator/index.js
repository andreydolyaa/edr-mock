import { logsData } from "../modules/event-logs/logs-data.js";
import { alertsData } from "../modules/alerts/alert-data.js";
import { incidentData } from "../modules/incidents/incidents-data.js";
import { threatIntlData } from "../modules/threat-intelligence/threat-data.js";
import { networksData } from "../modules/network/network-data.js";
import { reportsData } from "../modules/reports/reports-data.js";
import { usersData } from "../modules/users/users-data.js";
import { Log } from "../modules/event-logs/logs-schema.js";
import { Alert } from "../modules/alerts/alert-schema.js";
import { Incident } from "../modules/incidents/incident-schema.js";
import { Threat } from "../modules/threat-intelligence/threat-schema.js";
import { Network } from "../modules/network/network-schema.js";
import { Report } from "../modules/reports/reports-schema.js";
import { UserActivity } from "../modules/users/user-schema.js";
import log from "../core/logger.js";

export const generateMockData = async () => {
  createLogs()
    .then(createAlerts)
    .then(createIncidents)
    .then(createThreats)
    .then(createNetworks)
    .then(createReports)
    .then(createUsersActivity);
  // .catch();
};

export const createLogs = async () => {
  logsData.forEach(async (x, i) => {
    calculateProgress(logsData.length, i, "Logs");
    try {
      const log = new Log(x);
      await log.save();
    } catch (error) {
      log.error("Failed to create Log in DB: " + error);
    }
  });
};

export const createAlerts = async () => {
  alertsData.forEach(async (x, i) => {
    calculateProgress(alertsData.length, i, "Alerts");
    try {
      const alert = new Alert(x);
      await alert.save();
    } catch (error) {
      log.error("Failed to create Alert in DB: " + error);
    }
  });
};

export const createIncidents = async () => {
  incidentData.forEach(async (x, i) => {
    calculateProgress(incidentData.length, i, "Incidents Management");
    try {
      const incidnet = new Incident(x);
      await incidnet.save();
    } catch (error) {
      log.error("Failed to create incidnet in DB: " + error);
    }
  });
};

export const createThreats = async () => {
  threatIntlData.forEach(async (x, i) => {
    calculateProgress(threatIntlData.length, i, "Threat Intelligence");
    try {
      const threat = new Threat(x);
      await threat.save();
    } catch (error) {
      log.error("Failed to create threat in DB: " + error);
    }
  });
};

export const createNetworks = async () => {
  networksData.forEach(async (x, i) => {
    calculateProgress(networksData.length, i, "Networks Traffic");
    try {
      const network = new Network(x);
      await network.save();
    } catch (error) {
      log.error("Failed to create network in DB: " + error);
    }
  });
};

export const createReports = async () => {
  reportsData.forEach(async (x, i) => {
    calculateProgress(reportsData.length, i, "Reports and Analytics");
    try {
      const report = new Report(x);
      await report.save();
    } catch (error) {
      log.error("Failed to create report in DB: " + error);
    }
  });
};

export const createUsersActivity = async () => {
  usersData.forEach(async (x, i) => {
    calculateProgress(usersData.length, i, "Users Activity");
    try {
      const activity = new UserActivity(x);
      await activity.save();
    } catch (error) {
      log.error("Failed to create activity in DB: " + error);
    }
  });
};

export const calculateTotalDataLength = async () => {
  return (
    logsData.length +
    alertsData.length +
    incidentData.length +
    threatIntlData.length +
    networksData.length +
    reportsData.length +
    usersData.length
  );
};

export const calculateProgress = (itemsCount, index, type) => {
  const progress = ((index + 1) / itemsCount) * 100;
  log.info(`creating [${type}] data... %${progress.toFixed(2)}`);
  if (progress >= 100) log.info(`${type} data created successfuly`);
};
