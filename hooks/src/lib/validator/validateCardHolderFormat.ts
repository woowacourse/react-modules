const validateCardHolderFormat = (value: string) => {
  const isValidHolderFormat = /^(?=\S)(?!.*\s\s).*\s+(?=\S).*$/.test(value);

  if (!isValidHolderFormat) {
    return {
      isValid: false,
      errorMessage: '소유자명은 양 끝의 공백이 포함되면 안 되고, 사이의 공백이 한 개 있어야합니다.',
    };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateCardHolderFormat;
