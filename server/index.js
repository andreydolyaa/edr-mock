import { startServer } from "./server.js";
import { connectDb } from "./src/core/db.js";
import { generateDevices } from "./src/modules/device/device.js";

startServer()
  .then(connectDb)
  .then(generateDevices)
