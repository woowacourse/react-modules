export const formatCardNumbers = (cardNumber: string, format: number[]) => {
  let prevFormatLength = 0;

  const formattedCardNumber = format
    .reduce((acc, cur) => {
      const part = cardNumber.slice(prevFormatLength, prevFormatLength + cur);
      prevFormatLength += cur;
      return acc + ' ' + part;
    }, '')
    .trim();

  return formattedCardNumber;
};
