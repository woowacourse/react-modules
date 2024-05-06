export const isOnlyNumber = (string: string) => !/^\d*$/.test(string);

export const isValidMonth = (string: string) =>
  !/^$|^(0[1-9]|1[0-2]|0|1)$/.test(string);

export const isOnlyEnglishWithOneSpace = (string: string) =>
  !/^([a-zA-Z]+ ?)*[a-zA-Z]*$/.test(string);
