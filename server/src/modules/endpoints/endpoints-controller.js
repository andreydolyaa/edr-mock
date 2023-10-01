import { Endpoint } from "./endpoints-schema.js";
export const getEndpointsController = async (req, res) => {
  try {
    const endpoints = await Endpoint.find({});
    res.status(200).send(endpoints);
  } catch (error) {
    res.status(404).send(error);
  }
};
