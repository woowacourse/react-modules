function isValidLength(value: string, min: number, max: number) {
  return !(value.length > min && value.length < max);
}

export default isValidLength;
