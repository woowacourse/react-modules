const formatCardNumber = (cardNumber: string, divisionUnits: number[]) => {
  let start = 0;
  const formattedCardNumbers = divisionUnits.map(unit => {
    const digits = cardNumber.slice(start, start + unit);
    start += unit;
    return digits;
  });

  return formattedCardNumbers;
};

const formatCardNumberToString = (cardNumberList: string[], format: number[]) => {
  const formattedCardNumber = cardNumberList.reduce((acc, cur, idx, array) => {
    if (cur.length === format[idx]) {
      return idx === array.length - 1 ? acc + cur : `${acc}${cur}-`;
    }
    return acc + cur;
  }, '');

  return formattedCardNumber;
};
export { formatCardNumber, formatCardNumberToString };
