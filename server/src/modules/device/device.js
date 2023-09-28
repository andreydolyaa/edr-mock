import Device from "./deviceSchema.js";
import {
  sleep,
  randomFloat,
  randomNumber,
  uniqueId,
  randomMac,
  previousDate,
} from "../../utils/index.js";
import * as mock from "../mock/mock.js";

export const generateDevices = async () => {
  // const device = new Device();
  // TBD
};

// TODO: break this down
export const createDevice = async () => {
  return new Device({
    deviceName: item(mock.deviceNames),
    deviceType: item(mock.deviceTypes),
    osType: item(mock.osTypes),
    osVersion: `10.0.${randomNumber(19020, 19099)}`,
    lastSeen: previousDate(randomNumber(1, 30)),
    status: item(mock.status),
    currentUser: item(mock.currentUser),
    networkInfo: {
      // TDB
    }
    // TBD
  });
};

export const item = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};
