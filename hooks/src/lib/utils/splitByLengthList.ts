const splitByLengthList = (string: string, lengthList: number[]) => {
  if (!lengthList.length) {
    return [string];
  }

  const result: string[] = [];
  let startIndex = 0;

  for (const length of lengthList) {
    const endIndex = startIndex + length;
    const substring = string.slice(startIndex, endIndex);
    result.push(substring);
    startIndex = endIndex;

    if (startIndex >= string.length) {
      break;
    }
  }

  if (startIndex < string.length) {
    result.push(string.slice(startIndex));
  }

  return result;
};

export default splitByLengthList;
