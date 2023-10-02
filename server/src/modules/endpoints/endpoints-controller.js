import { Endpoint } from "./endpoints-schema.js";
export const getEndpointsController = async (req, res) => {
  const { page, items } = req.query || {};
  const skip = (page - 1) * items;
  try {
    const endpoints = await Endpoint.find({}).skip(skip).limit(items);
    res.status(200).send(endpoints);
  } catch (error) {
    res.status(404).send(error);
  }
};
