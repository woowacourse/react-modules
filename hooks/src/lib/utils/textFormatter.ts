export const sliceText = (text: string, maxLength: number) => text.slice(0, maxLength);
export const padZero = (number: number) => {
  return number < 10 ? '0' + number : number.toString();
};
