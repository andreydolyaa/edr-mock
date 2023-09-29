import { startServer } from "./server.js";
import { connectDb } from "./src/core/db.js";
import { generateMockData } from "./src/data-generator/index.js";


startServer()
  .then(connectDb)
  // .then(generateMockData)
