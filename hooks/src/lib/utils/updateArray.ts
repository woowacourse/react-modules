/**
 * 1차원 배열만 가능
 */
export const updateArray = <T>(array: T[], newValue: T, index: number) => {
  const copyArray = [...array];
  copyArray[index] = newValue;

  return copyArray;
};
