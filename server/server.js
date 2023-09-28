import Server from "./src/core/server.js";
import env from "./src/core/env.js";
import router from "./router.js";

const server = new Server({
  host: env.HOST,
  port: env.PORT,
  router,
});

export const startServer = async () => {
  try {
    server.start();
  } catch (error) {
    process.exit();
  }
};
