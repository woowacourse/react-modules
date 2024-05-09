export const divideNumbers = (
  numbers: string,
  splits: readonly number[]
): string[] => {
  return splits.reduce<{ result: string[]; startIndex: number }>(
    (acc, split) => {
      const { result, startIndex } = acc;
      const endIndex = startIndex + split;
      if (endIndex > numbers.length) {
        const remaining = numbers.substring(startIndex);
        return {
          result: remaining ? [...result, remaining] : result,
          startIndex: endIndex,
        };
      }

      return {
        result: [...result, numbers.substring(startIndex, endIndex)],
        startIndex: endIndex,
      };
    },
    { result: [], startIndex: 0 }
  ).result;
};
