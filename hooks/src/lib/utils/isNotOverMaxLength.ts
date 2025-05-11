const isNotOverMaxLength = (value: string, maxLength: number) => {
  return value.length <= maxLength;
};

export default isNotOverMaxLength;
