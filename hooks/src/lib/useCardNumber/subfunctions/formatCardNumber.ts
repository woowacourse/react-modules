export default function formatCardNumber(cardNumber: string, format: number[]) {
  const formattedCardNumber = [];
  let targetIndex = 0;

  for (const partLength of format) {
    if (cardNumber.length > targetIndex) {
      formattedCardNumber.push(cardNumber.slice(targetIndex, targetIndex + partLength));
    }
    targetIndex += partLength;
  }

  return formattedCardNumber.join(' ').trim();
}
