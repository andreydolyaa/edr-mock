import { Log } from "./logs-schema.js";

export const eventLogsController = async (req, res) => {
  try {
    const logs = await Log.find({});
    res.status(200).send(logs);
  } catch (error) {
    res.status(404).send(error);
  }
};
