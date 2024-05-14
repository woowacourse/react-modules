// TODO: 리펙터링
const formatCardNumber = (number: string, pattern: number[], maxLength: number, separator: string = ' ') => {
  const slicedNumber = number.slice(0, maxLength);

  let formattedNumber = '';
  let cursorIndex = 0;

  pattern.forEach((unitLength) => {
    const unitNumber = slicedNumber.slice(cursorIndex, cursorIndex + unitLength);
    formattedNumber += unitNumber + separator;
    cursorIndex += unitLength;
  });

  return formattedNumber.trim();
};

export default formatCardNumber;
