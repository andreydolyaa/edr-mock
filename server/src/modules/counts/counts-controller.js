import { Endpoint } from "../endpoints/endpoints-schema.js";
import { Alert } from "../alerts/alerts-schema.js";
import { Incident } from "../incidents/incidents-schema.js";

const modelsMap = {
  Endpoint,
  Alert,
  Incident,
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
