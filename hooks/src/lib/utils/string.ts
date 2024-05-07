export const startsWithin = ({ from, to, value }: { from: string; to: string; value: string }) => {
  const startNum = parseInt(value.substring(0, from.length));
  return startNum >= parseInt(from) && startNum <= parseInt(to);
};
