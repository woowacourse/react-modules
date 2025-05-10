const splitByBlocks = (blockSizes: number[], cardNumber: string) => {
  return blockSizes.map((size, idx) =>
    cardNumber.slice(size * idx, size * (idx + 1))
  );
};

export const formatCardNumberBlocks = (cardNumber: string) => {
  if (cardNumber.length === 15) return splitByBlocks([4, 6, 5], cardNumber);
  if (cardNumber.length === 14) return splitByBlocks([4, 6, 4], cardNumber);
  return splitByBlocks([4, 4, 4, 4], cardNumber);
};
