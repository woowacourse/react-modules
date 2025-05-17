const getRangeStringList = (start: number, end: number) => {
  if (start > end) return [];
  return Array.from({ length: end - start + 1 }, (_, i) => String(start + i));
};

export default getRangeStringList;
