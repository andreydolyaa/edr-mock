import dotenv from "dotenv";
import path from "path";
import config from "../../bin/config.json" assert { type: "json" };

dotenv.config();

const ROOT = path.resolve();

const e = process.env;

const env = {
  ROOT,
  HOST:               e.HOST || config.HOST,
  PORT:               e.PORT || config.PORT,
  DB_HOST:            e.DB_HOST || config.DB_HOST,
  DB_PORT:            e.DB_PORT || config.DB_PORT,
  DB_NAME:            e.DB_NAME || config.DB_NAME,
};

export default env;
