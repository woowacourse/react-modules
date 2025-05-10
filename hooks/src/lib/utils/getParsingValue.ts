const getParsingValue = (input: string, pattern: number[], splitter = " ") => {
  const result: string[] = [];
  let cursor = 0;

  for (let i = 0; i < pattern.length; i++) {
    const size = pattern[i];
    const chunk = input.slice(cursor, cursor + size);
    if (!chunk) break;
    result.push(chunk);
    cursor += size;
  }
  return result.join(splitter);
};

export default getParsingValue;
