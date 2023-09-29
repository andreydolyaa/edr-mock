import { Log } from "./logs-schema.js";

export const eventLogsController = async (req, res) => {
  const skip = (req.query.page - 1) * req.query.items;
  try {
    const logs = await Log.find({}).skip(skip).limit(req.query.items);
    res.status(200).send(logs);
  } catch (error) {
    res.status(404).send(error);
  }
};
