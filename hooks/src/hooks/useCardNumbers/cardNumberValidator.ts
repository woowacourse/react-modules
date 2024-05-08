export const validMasterNumbers = (firstNumbers: string) => {
  const MASTER_CARD_START_NUMBER_LIST = [51, 52, 53, 54];
  // eslint-disable-next-line no-useless-escape
  const MASTER_REG_PATTERN = new RegExp(`${MASTER_CARD_START_NUMBER_LIST.map(String).join("|")}\d{0,2}$`);
  return MASTER_REG_PATTERN.test(firstNumbers.slice(0, 2));
};

export const validVisaNumbers = (firstNumbers: string) => {
  const VISA_START_NUMBER = 4;
  return firstNumbers.startsWith(String(VISA_START_NUMBER));
};

export const validAMEXNumbers = (firstNumbers: string) => {
  const AMEX_START_NUMBER = [34, 27];
  // eslint-disable-next-line no-useless-escape
  const AMEX_REG_PATTERN = new RegExp(`${AMEX_START_NUMBER.map(String).join("|")}\d{0,2}$`);
  return AMEX_REG_PATTERN.test(firstNumbers.slice(0, 2));
};

export const validDinersNumbers = (firstNumbers: string) => {
  const AMEX_START_NUMBER = [36];
  // eslint-disable-next-line no-useless-escape
  const AMEX_REG_PATTERN = new RegExp(`${AMEX_START_NUMBER.map(String).join("|")}\d{0,2}$`);
  return AMEX_REG_PATTERN.test(firstNumbers.slice(0, 2));
};

const isNumberInRange = (targetNumber: number, number1: number, number2: number) =>
  number1 <= targetNumber && targetNumber <= number2;

export const validUnionPayFirstNumbers = (firstNumbers: string) => {
  const targetNumber = Number(firstNumbers);
  const UNION_PAY_RANGE_NUMBERS = [
    [6222, 6228],
    [6240, 6269],
    [6282, 6288],
  ];
  return UNION_PAY_RANGE_NUMBERS.some(([number1, number2]) => isNumberInRange(targetNumber, number1, number2));
};

export const validUnionPaySecondNumbers = (firstNumbers: string, secondNumbers: string) => {
  const START_NUMBER = 6221;
  const START_CONDITION_MIN_NUMBER = 26;
  const END_NUMBER = 6229;
  const END_CONDITION_MAX_NUMBER = 25;
  console.log(firstNumbers === String(START_NUMBER) && START_CONDITION_MIN_NUMBER <= Number(secondNumbers.slice(0, 2)));
  return (
    (firstNumbers === String(START_NUMBER) && START_CONDITION_MIN_NUMBER <= Number(secondNumbers.slice(0, 2))) ||
    (firstNumbers === String(END_NUMBER) && END_CONDITION_MAX_NUMBER >= Number(secondNumbers.slice(0, 2)))
  );
};
