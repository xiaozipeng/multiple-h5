import dayjs from "dayjs";

export const getCurrentDate = (): string => {
  return dayjs().format("YYYY-MM-DD");
};
