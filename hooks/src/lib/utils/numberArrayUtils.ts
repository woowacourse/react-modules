const createNumbers = (startNumber: number, endNumber: number) =>
  Array.from({ length: endNumber - startNumber + 1 }, (_, index) => startNumber + index);

export default createNumbers;
