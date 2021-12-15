export const getDate = (date: string) =>
  new Date(date).toISOString().split("T")[0];

export const randomId = () => {
  const hashId = [];
  const char =
    "abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");
  while (hashId.length <= 5) {
    hashId.push(char[Math.floor(Math.random() * char.length)]);
  }
  return hashId.join("");
};
