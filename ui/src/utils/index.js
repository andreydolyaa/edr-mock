import moment from "moment";

export const formatTimestamp = (timestamp, format = "YYYY-MM-DD HH:mm:ss") => {
  const parsed = moment(timestamp);
  return parsed.format(format);
};
