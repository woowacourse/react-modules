// TODO: 리펙터링
const formatCardNumber = (number: string, pattern: number[], separator: string = ' ') => {
  let formattedNumber = '';
  let cursorIndex = 0;

  pattern.forEach((unitLength) => {
    const unitNumber = number.slice(cursorIndex, cursorIndex + unitLength);
    formattedNumber += unitNumber + separator;
    cursorIndex += unitLength;
  });

  return formattedNumber.trim();
};

export default formatCardNumber;
