import { CourseType } from "../classes/types/types";

export const getDate = (date: string) =>
  new Date(date).toJSON()?.slice(0, 10).split("-").reverse().join("/");

export const randomId = () => {
  const hashId = [];
  const char =
    "abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");
  while (hashId.length <= 5) {
    hashId.push(char[Math.floor(Math.random() * char.length)]);
  }
  return hashId.join("");
};

export const setDate = (date: string, type: CourseType) => {
  let endDate: string;
  const d = new Date(date);
  if (type === "full time") {
    d.setMonth(d.getMonth() + 3);
    console.log(new Date(date).toJSON());
    console.log(d.toJSON());
    endDate = d.toJSON()?.slice(0, 10).split("-").reverse().join("/");

    return endDate;
  }
  if (type === "part time") {
    d.setMonth(d.getMonth() + 6);
    endDate = d.toJSON()?.slice(0, 10).split("-").reverse().join("/");
    return endDate;
  }
};
