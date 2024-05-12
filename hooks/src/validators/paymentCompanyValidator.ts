import { divideNumbers } from "../lib/utilities/formatter";
import { PAYMENT_COMPANY } from "../lib/constants/paymentCompany";

const isVisaStart = (cardNumbers: string) => {
  return PAYMENT_COMPANY.VISA.startNumber.some((startNum) =>
    cardNumbers.startsWith(startNum)
  );
};

const isMasterStart = (cardNumbers: string) => {
  return PAYMENT_COMPANY.MASTER.startNumber.some((startNum) =>
    cardNumbers.startsWith(startNum)
  );
};

const isDinersStart = (cardNumbers: string) => {
  return PAYMENT_COMPANY.DINERS.startNumber.some((startNum) =>
    cardNumbers.startsWith(startNum)
  );
};

const isAmexStart = (cardNumbers: string) => {
  return PAYMENT_COMPANY.AMEX.startNumber.some((startNum) =>
    cardNumbers.startsWith(startNum)
  );
};

const isUnionStart = (cardNumbers: string) => {
  return PAYMENT_COMPANY.UNION.startNumber.some((startNum) =>
    cardNumbers.startsWith(startNum)
  );
};

const isInUnionRange = (cardNumbers: string) => {
  return PAYMENT_COMPANY.UNION.ranges.some(({ start, end }) => {
    const rangeLength = start.toString().length;
    const slicedCardNumbers = Number(cardNumbers.slice(0, rangeLength));

    return slicedCardNumbers >= start && slicedCardNumbers <= end;
  });
};

export const getPaymentCompany = (cardNumbers: string) => {
  if (isVisaStart(cardNumbers)) return PAYMENT_COMPANY.VISA.name;
  if (isMasterStart(cardNumbers)) return PAYMENT_COMPANY.MASTER.name;
  if (isAmexStart(cardNumbers)) return PAYMENT_COMPANY.AMEX.name;
  if (isDinersStart(cardNumbers)) return PAYMENT_COMPANY.DINERS.name;
  if (isUnionStart(cardNumbers) && isInUnionRange(cardNumbers))
    return PAYMENT_COMPANY.UNION.name;

  return PAYMENT_COMPANY.NONE.name;
};

export const getFormattedCardNumbers = (
  paymentCompany: string,
  cardNumbers: string
) => {
  const company = Object.values(PAYMENT_COMPANY).find(
    (company) => company.name === paymentCompany
  );

  const formatStyle = company
    ? company.formatStyle
    : PAYMENT_COMPANY.NONE.formatStyle;

  return divideNumbers(cardNumbers, formatStyle);
};
