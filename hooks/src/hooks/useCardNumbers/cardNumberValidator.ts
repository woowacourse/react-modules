export const validMasterNumbers = (firstNumbers: string) => {
  const MASTER_CARD_START_NUMBER_LIST = [51, 52, 53, 54];
  // eslint-disable-next-line no-useless-escape
  const MASTER_REG_PATTERN = new RegExp(`${MASTER_CARD_START_NUMBER_LIST.map(String).join("|")}\d{0,3}$`);
  return MASTER_REG_PATTERN.test(firstNumbers);
};

export const validVisaNumbers = (firstNumbers: string) => {
  const VISA_START_NUMBER = 4;
  return firstNumbers.startsWith(String(VISA_START_NUMBER));
};
