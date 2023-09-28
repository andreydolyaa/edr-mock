import moment from "moment";

const color = {
  red: "\x1b[31m%s\x1b[0m",
  green: "\x1b[32m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  magenta: "\x1b[35m%s\x1b[0m",
  cyan: "\x1b[36m%s\x1b[0m",
};

const log = (color, msg, type) => {
  const time = moment(new Date()).format("DD/MM/YY hh:mm:ss:ms");
  const logMsg = `[${type}][${time}] ~> ${msg}`;
  console.log(color, logMsg);
};

const logError = (msg) => {
  log(color.red, msg, "ERROR");
};

const logInfo = (msg) => {
  log(color.blue, msg, "INFO");
};

const logRequest = (req, data, type = "REQUEST") => {
  let currentColor = color.yellow;
  if (type == "RESPONSE") currentColor = color.magenta;
  const msg = req + " " + JSON.stringify(data);
  log(currentColor, msg, type);
};

log.error = logError;
log.info = logInfo;
log.req = logRequest;

export const logResponseBody = (req, res, next) => {
  const oldWrite = res.write,
    oldEnd = res.end;
  const chunks = [];

  res.write = function (chunk) {
    chunks.push(chunk);
    return oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk && res.statusCode !== 404) chunks.push(chunk);
    const body = Buffer.concat(chunks).toString("utf8");
    log.req(req.path, body, "RESPONSE");
    oldEnd.apply(res, arguments);
  };

  next();
};

export const logRequestBody = (req, res, next) => {
  // const { query, headers, body } = req;
  // log.req(`${req.method} ${req.path}`, { query, headers, body });
  const { query, body } = req;
  log.req(`${req.method} ${req.path}`, { query, body });
  next();
};

export default log;