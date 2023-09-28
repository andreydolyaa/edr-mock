import mongoose from "mongoose";
import env from "./env.js";
import log from "./logger.js";

export const connectDb = async () => {
  const url = `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        log.info("MongoDB Connected: " + url);
        resolve();
      })
      .catch((error) => {
        log.error("Failed to connected to Databse at: " + url);
        reject(error);
      });
  });
};