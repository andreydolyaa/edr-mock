import { incidentsData } from "../modules/incidents/incidents-data.js";
import { endpointsData } from "../modules/endpoints/endpoints-data.js";
import { alertsData } from "../modules/alerts/alerts-data.js";
import { Incident } from "../modules/incidents/incidents-schema.js";
import { Endpoint } from "../modules/endpoints/endpoints-schema.js";
import { Alert } from "../modules/alerts/alerts-schema.js";

import log from "../core/logger.js";

export const generateMockData = async () => {
  createEndpoints().then(createAlerts).then(createIncidents);
  // .catch();
};

export const createEndpoints = async () => {
  endpointsData.forEach(async (x, i) => {
    calculateProgress(endpointsData.length, i, "Endpoint");
    try {
      const endpoint = new Endpoint(x);
      await endpoint.save();
    } catch (error) {
      log.error("Failed to create endpoint in DB: " + error);
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
  incidentsData.forEach(async (x, i) => {
    calculateProgress(incidentsData.length, i, "Incidents Management");
    try {
      const incidnet = new Incident(x);
      await incidnet.save();
    } catch (error) {
      log.error("Failed to create incidnet in DB: " + error);
    }
  });
};

export const calculateProgress = (itemsCount, index, type) => {
  const progress = ((index + 1) / itemsCount) * 100;
  log.info(`creating [${type}] data... %${progress.toFixed(2)}`);
  if (progress >= 100) log.info(`${type} data created successfuly`);
};

// export const calculateTotalDataLength = async () => {
//   return (
//     logsData.length +
//     alertsData.length +
//     incidentData.length +
//     threatIntlData.length +
//     networksData.length +
//     reportsData.length +
//     usersData.length
//   );
// };
