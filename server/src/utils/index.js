export const randomNumber = (minimum, maximum) => {
  const num = Math.random() * (maximum - minimum) + minimum;
  return Math.round(num * 100) / 100;
};

export const randomFloat = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const uniqueId = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset.charAt(randomIndex);
  }
  return id;
};

export const randomMac = () => {
  const macBytes = [];
  for (let i = 0; i < 6; i++) {
    const randomByte = Math.floor(Math.random() * 256);
    macBytes.push(randomByte.toString(16).padStart(2, "0"));
  }
  return macBytes.join(":").toUpperCase();
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const previousDate = (daysAgo) => {
  const currentDate = new Date();
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  return new Date(currentDate - daysAgo * millisecondsInDay);
};
