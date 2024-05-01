const isSpace = (char: string) => char === ' ';

const isUpperCase = (char: string) => char >= 'A' && char <= 'Z';

export const unifySpaces = (str: string): string => str.replace(/\s+/g, ' ').trimStart();

export const filterEnglishAndSpaces = (str: string): string => {
  return str
    .split('')
    .filter((char: string) => isUpperCase(char) || isSpace(char))
    .join('');
};
