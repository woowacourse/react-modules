export const isNotNumber = (value: string) => isNaN(Number(value));

export const isValidNumberLength = (value: string, validLength: number) =>
  value.length === validLength;
