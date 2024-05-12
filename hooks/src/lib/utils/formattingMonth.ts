import { REGEX } from "../constants";

const formattingMonth = (value: string) => {
  if (REGEX.oneToNine.test(value)) return `0${value}`;

  return value;
};

export default formattingMonth;
