import { Log } from "../event-logs/logs-schema.js";
import { Alert } from "../alerts/alert-schema.js";
import { Incident } from "../incidents/incident-schema.js";
import { Threat } from "../threat-intelligence/threat-schema.js";
import { Network } from "../network/network-schema.js";
import { Report } from "../reports/reports-schema.js";
import { UserActivity } from "../users/user-schema.js";

const modelsMap = {
  Log,
  Alert,
  Incident,
  Threat,
  Network,
  Report,
  UserActivity,
};

export const countDocumentsController = async (req, res) => {
  try {
    const count = await modelsMap[req.params.model].countDocuments();
    const docs = { [req.params.model]: count };
    res.status(200).send(docs);
  } catch (error) {
    res.status(404).send(error);
  }
};
