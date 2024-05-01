export const unifySpaces = (str: string): string => str.replace(/\s+/g, ' ').trimStart();

export const filterEnglishAndSpaces = (str: string): string => {
  const isUpperCaseOrSpace = (char: string): boolean =>
    char === ' ' ||
    (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0));

  return str.split('').filter(isUpperCaseOrSpace).join('');
};
